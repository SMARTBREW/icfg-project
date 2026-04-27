import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { INSTITUTE_CONTACT } from "@/constants/institute-contact";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";

export const metadata: Metadata = {
  title: "Donate — Institute of Community Forest Governance",
  description:
    "Support ICFG’s field programmes with forest communities in India: Gram Sabha facilitation, women’s cooperatives, and youth assemblies.",
  openGraph: {
    title: "Donate — ICFG",
    description:
      "Help forest-dwelling communities secure rights, restore ecosystems, and build dignified livelihoods.",
  },
};

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";
const DONATE_HERO = "/programms/DSC04758-1-1.webp";

const ALLOCATION = [
  {
    pct: 55,
    label: "Field coordinators & travel",
    body: "Stipends for 36 coordinators, plus fuel and materials for hearings, boundary walks, and Gram Sabha meetings.",
    swatch: "var(--icfg-forest)",
  },
  {
    pct: 30,
    label: "Trainings & residential learning",
    body: "FRA workshops, paralegal trainings, women’s cooperative facilitation, Bal Akhra youth assemblies.",
    swatch: "var(--icfg-leaf)",
  },
  {
    pct: 15,
    label: "Operations & compliance",
    body: "Audits, statutory filings, printing claim papers, and the small office that keeps it together.",
    swatch: "var(--icfg-lime)",
  },
] as const;

const WAYS_TO_GIVE = [
  {
    title: "Online (coming soon)",
    body: "We are finalising a secure online giving flow with our payment partner. Until then, please email us for the link or for one-time invoices.",
  },
  {
    title: "UPI",
    body: "We can share a UPI ID against an email request mentioning the amount and frequency. Receipts go out within 7 working days.",
  },
  {
    title: "Bank transfer (NEFT / IMPS)",
    body: "Indian donors: we share the registered trust account on request. Please write to us with PAN and address for an 80G receipt.",
  },
  {
    title: "Cheque or DD",
    body: "Made out in the name of the trust and couriered to the registered address. Add a covering note with PAN if you need an 80G receipt.",
  },
] as const;

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(60vh,36rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={DONATE_HERO}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/30 to-black/10"
            aria-hidden
          />
          <div
            className={`relative z-10 flex min-h-[min(60vh,36rem)] w-full flex-col justify-end pb-12 pt-28 ${sectionPad} md:pb-16 md:pt-32`}
          >
            <p
              className={`${instrumentSerif.className} text-[1.2rem] italic tracking-[-0.02em] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] md:text-[1.35rem]`}
            >
              Institute of Community Forest Governance
            </p>
            <h1
              className={`${SatoshiBold.className} mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.05em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[3.25rem] lg:text-[3.5rem]`}
            >
              Donate
            </h1>
            <p
              className={`${playfairDisplay.className} mt-6 max-w-2xl text-[clamp(0.95rem,2.2vw,1.2rem)] leading-[1.5] tracking-[-0.02em] text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`}
            >
              Your contribution helps Gram Sabhas, women’s cooperatives, and
              youth assemblies stay rooted in community consent and transparent
              field practice.
            </p>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`}>
          <div className="mx-auto max-w-6xl">
            <h2
              className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Where the money goes
            </h2>
            <p className="mt-5 max-w-[44rem] font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
              These percentages are our target split, set at the start of each
              financial year. Real spend wobbles a few points either way; the
              audited number is the one we report against in our annual report.
            </p>

            <div
              className="mt-12 flex h-7 w-full overflow-hidden rounded-full ring-1 ring-gray-200/80 md:h-9"
              role="img"
              aria-label="Budget split: 55% field, 30% trainings, 15% operations"
            >
              {ALLOCATION.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center justify-end pr-3 font-['Inter'] text-[0.7rem] font-[600] tracking-[-0.01em] text-white/95 md:pr-4 md:text-[0.78rem]"
                  style={{
                    width: `${a.pct}%`,
                    backgroundColor: `color-mix(in srgb, ${a.swatch} 100%, transparent)`,
                  }}
                >
                  {a.pct}%
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-3">
              {ALLOCATION.map((a) => (
                <li key={a.label} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: a.swatch }}
                    />
                    <p className="font-['Inter'] text-[0.95rem] font-[600] tracking-[-0.02em] text-black">
                      {a.label}
                    </p>
                  </div>
                  <p className="mt-2 font-['Inter'] text-[0.88rem] leading-[1.6rem] text-gray-600">
                    {a.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={`border-t border-gray-200 bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Ways to give
            </h2>
            <p className="mt-4 max-w-[44rem] font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-600">
              Online giving is still being set up. Until then, the four routes
              below all work — UPI is the fastest if you’re in India.
            </p>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {WAYS_TO_GIVE.map((w) => (
                <li
                  key={w.title}
                  className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:p-7"
                >
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.02em] text-black md:text-[1.1rem]">
                    {w.title}
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                    {w.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${INSTITUTE_CONTACT.emailMailto.replace(
                  /^mailto:/,
                  ""
                )}?subject=${encodeURIComponent("Donation inquiry")}`}
                className="icfg-btn-primary inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-center font-['Inter'] text-[0.95rem] font-[600] tracking-[-0.01em] text-white"
              >
                Email us to give
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-7 py-3.5 text-center font-['Inter'] text-[0.95rem] font-[500] text-[color:var(--icfg-forest)] shadow-sm transition hover:bg-gray-50"
              >
                Use the contact form
              </Link>
            </div>
            <p className="mt-4 font-['Inter'] text-[0.85rem] leading-[1.6rem] text-gray-600">
              Subject line that helps us respond fastest:{" "}
              <strong className="font-[600] text-black">
                “Donation inquiry — UPI”
              </strong>{" "}
              or{" "}
              <strong className="font-[600] text-black">
                “Donation inquiry — Bank transfer”
              </strong>
              .
            </p>
          </div>
        </section>

        <section
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
            <div className="rounded-2xl border border-gray-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:p-9">
              <h2
                className={`${playfairDisplay.className} text-[1.5rem] leading-tight text-black md:text-[1.85rem]`}
              >
                For Indian donors: 80G
              </h2>
              <p className="mt-5 font-['Inter'] text-[0.98rem] leading-[1.8rem] text-gray-700">
                ICFG is registered under sections 12A and 80G of the Income Tax
                Act, so contributions from Indian taxpayers qualify for the
                usual deduction.
              </p>
              <p className="mt-4 font-['Inter'] text-[0.95rem] leading-[1.75rem] text-gray-700">
                For an 80G receipt we need three things along with your
                contribution:
              </p>
              <ul className="mt-3 space-y-1.5 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                <li>· PAN</li>
                <li>· Full name as on PAN</li>
                <li>· Postal address (not just city)</li>
              </ul>
              <p className="mt-5 font-['Inter'] text-[0.88rem] leading-[1.65rem] text-gray-500">
                Receipts go out by email within about a week of the funds
                clearing. Registration certificates, the latest audited
                statements, and the trust deed are listed on the{" "}
                <Link
                  href="/certificates"
                  className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                >
                  certificates page
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-[color:var(--icfg-forest)] p-7 text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:p-9">
              <blockquote
                className={`${playfairDisplay.className} text-[1.25rem] italic leading-[1.55] text-white md:text-[1.4rem]`}
              >
                “Forest is our culture; nobody can be her proprietor.”
              </blockquote>
              <p className="mt-5 font-['Inter'] text-[0.85rem] tracking-[-0.01em] text-white/80">
                — said in a Gram Sabha at Dango village, recorded in our 2023
                field notes. A line our team comes back to often.
              </p>
              <Link
                href="/blogs/dango-active-gram-sabha-success"
                className="mt-7 inline-flex w-fit items-center gap-2 font-['Inter'] text-[0.88rem] font-[500] tracking-[-0.01em] text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
              >
                Read the Dango story →
              </Link>
            </div>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`${playfairDisplay.className} text-[1.5rem] leading-tight text-black md:text-[1.85rem]`}
            >
              Want to talk first?
            </h2>
            <p className="mt-4 font-['Inter'] text-[0.98rem] leading-[1.8rem] text-gray-700">
              Happy to send the annual report, audited financials, and
              programme notes. Foreign donations are taken only where the law
              and our governing documents allow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="icfg-btn-primary inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-center font-['Inter'] text-[0.95rem] font-[600] tracking-[-0.01em] text-white"
              >
                Talk to us first
              </Link>
              <a
                href={INSTITUTE_CONTACT.emailMailto}
                className="inline-flex items-center justify-center rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-7 py-3.5 text-center font-['Inter'] text-[0.95rem] font-[500] text-[color:var(--icfg-forest)] shadow-sm transition hover:bg-gray-50"
              >
                {INSTITUTE_CONTACT.emailDisplay}
              </a>
            </div>
            <p className="mt-10 font-['Inter'] text-[0.85rem] leading-[1.6rem] text-gray-500">
              ICFG is a registered non-profit in India. We may decline or
              return funds that compromise community consent or conflict with
              our mission, in line with our governing documents.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
