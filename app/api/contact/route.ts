import { NextResponse } from "next/server";
import { z } from "zod";

import { logger } from "@/lib/logger";
import { sanitizeHtml } from "@/lib/sanitize-html";

const bodySchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/),
  message: z.string().min(10).max(500),
  agree: z.literal(true),
});

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes.
// For production at scale, replace with Redis / Upstash.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const ipMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    ipMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  if (isRateLimited(ip)) {
    logger.warn("Contact form rate limit exceeded", { ip });
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    logger.warn("Contact form: invalid JSON body", { ip });
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof json !== "object" || json === null) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const record = json as Record<string, unknown>;
  const phoneRaw = record.phone;
  const phone = typeof phoneRaw === "string" ? phoneRaw.trim() : "";

  const parsed = bodySchema.safeParse({
    name: record.name,
    email: record.email,
    message: record.message,
    agree: record.agree,
    phone,
  });

  if (!parsed.success) {
    logger.warn("Contact form: validation failed", { ip });
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Sanitize user-supplied text fields before any downstream use (email, storage, logs).
  const safeName = sanitizeHtml(parsed.data.name);
  const safeMessage = sanitizeHtml(parsed.data.message);

  logger.info("Contact form submission received", {
    name: safeName,
    email: parsed.data.email,
    hasPhone: !!parsed.data.phone,
    messageLength: safeMessage.length,
  });

  // TODO: Forward submission to an email service (e.g. Resend, Nodemailer, Postmark).
  // Set CONTACT_EMAIL_TO and RESEND_API_KEY (or equivalent) in .env.local.
  // Example with Resend:
  //   await resend.emails.send({
  //     from: "website@icfgindia.org",
  //     to: process.env.CONTACT_EMAIL_TO,
  //     subject: `Website enquiry from ${safeName}`,
  //     text: safeMessage,
  //   });

  return NextResponse.json({ ok: true });
}
