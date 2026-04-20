import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/)
    .optional(),
  message: z.string().min(10).max(500),
  agree: z.literal(true),
});

export async function POST(request: Request) {
  const json: unknown = await request.json();

  if (typeof json !== "object" || json === null) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const record = json as Record<string, unknown>;
  const phoneRaw = record.phone;
  const phone =
    typeof phoneRaw === "string" && phoneRaw.trim() !== ""
      ? phoneRaw.trim()
      : undefined;

  const parsed = bodySchema.safeParse({
    name: record.name,
    email: record.email,
    message: record.message,
    agree: record.agree,
    phone,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
