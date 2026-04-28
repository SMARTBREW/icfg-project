import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { CERTIFICATES } from "@/constants/content";
import { sectionPad } from "@/constants/layout";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";

export const metadata: Metadata = {
  title: "Certificates & compliance — Institute of Community Forest Governance",
  description:
    "Trust registration, tax-related certifications, and reporting practices for ICFG—a non-profit working with forest communities in India.",
  openGraph: {
    title: "Certificates & compliance — ICFG",
    description:
      "Legal and fiscal transparency for donors and partners.",
  },
};

const CERT_HERO = "/about/DSC_0069-1.webp";

const COMPLIANCE_TIMELINE = [
  {
    when: "2006",
    title: "Trust registered",
    body: "ICFG is constituted as a public charitable trust in Jharkhand, with objectives focused on community forest governance and forest rights.",
  },
  {
    when: "Within 12 months of registration",
    title: "Section 12A granted",
    body: "Income applied to charitable purposes is recognised under section 12A of the Income Tax Act, in line with the trust deed.",
  },
  {
    when: "Following 12A approval",
    title: "Section 80G certification",
    body: "Indian donors become eligible for deductions on qualifying contributions; receipts issued against PAN, name, and address.",
  },
  {
    when: "Every financial year",
    title: "Independent audit & filings",
    body: "Books of account are independently audited; statutory returns and activity summaries are prepared for compliance and partner due diligence.",
  },
] as const;

type Download = {
  label: string;
  description: string;
  href?: string;
};

const DOWNLOADS: readonly Download[] = [
  {
    label: "Annual report (latest)",
    description:
      "Programme summary, regional highlights, and key indicators for the most recent financial year.",
  },
  {
    label: "Audited financial statements",
    description:
      "Independent auditor’s report with the trust’s receipts and payments and balance sheet.",
  },
  {
    label: "Trust deed extract",
    description:
      "Objects, governance structure, and governing principles excerpted for partner due diligence.",
  },
  {
    label: "12A & 80G certificates",
    description:
      "Tax registration certificates shared with verified donors and institutional partners on request.",
  },
];

const AUDITOR_INFO = [
  { label: "Trust", value: "Institute of Community Forest Governance" },
  { label: "Type", value: "Public charitable trust, registered in India" },
  { label: "Region of operation", value: "Jharkhand & neighbouring states" },
  { label: "Statutory auditor", value: "Independent chartered accountant (shared on request)" },
  { label: "Primary inquiries", value: "info@icfgindia.org" },
] as const;

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(72vh,40rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={CERT_HERO}
            alt="Forest landscape"
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/25 to-black/10"
            aria-hidden
          />
          <div
            className={`relative z-10 flex min-h-[min(72vh,40rem)] w-full flex-col justify-end pb-14 pt-28 ${sectionPad} md:pb-20 md:pt-32`}
          >
            <p
              className={`${instrumentSerif.className} text-[1.2rem] italic tracking-[-0.02em] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] md:text-[1.35rem]`}
            >
              Institute of Community Forest Governance
            </p>
            <h1
              className={`${SatoshiBold.className} mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.05em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[3.25rem] lg:text-[3.75rem]`}
            >
              Certificates &amp; compliance
            </h1>
            <p
              className={`${playfairDisplay.className} mt-6 max-w-2xl text-[clamp(0.95rem,2.2vw,1.35rem)] leading-[1.45] tracking-[-0.02em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]`}
            >
              Registered non-profit status and the documents we share with donors,
              institutions, and communities who work with us.
            </p>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`}>
          <div className="mx-auto max-w-[90rem]">
            <h2
              className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Registration and reporting at a glance
            </h2>
            <p className="mt-4 max-w-[48rem] font-['Inter'] text-[1rem] leading-[1.75rem] text-gray-700">
              A short summary of where the trust stands legally and what it
              files each year. For due diligence or grant agreements, write to
              us — we share full documents with verified partners.
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {CERTIFICATES.map((item) => (
                <li key={item.id}>
                  <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-8">
                    {item.image ? (
                      <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-100">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain object-center bg-gray-50"
                        />
                      </div>
                    ) : (
                      <div
                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--icfg-forest)]/10 font-['Inter'] text-[0.75rem] font-[700] text-[color:var(--icfg-forest)]"
                        aria-hidden
                      >
                        {String(item.id).padStart(2, "0")}
                      </div>
                    )}
                    <h3
                      className={`${SatoshiBold.className} text-[1.15rem] leading-snug tracking-[-0.03em] text-black md:text-[1.25rem]`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

          </div>
        </section>

        <section
          id="compliance-timeline"
          className={`border-t border-gray-200 bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-5xl">
            <h2
              className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              From registration to annual review
            </h2>
            <p className="mt-5 max-w-[44rem] font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
              ICFG has been through the usual compliance milestones for Indian
              non-profits. Specific certificate numbers, validity periods, and
              the latest auditor’s report are shared with verified donors and
              institutional partners on request.
            </p>
            <ol className="relative mt-12 border-l-2 border-[color:var(--icfg-leaf)]/35 pl-6 md:pl-10">
              {COMPLIANCE_TIMELINE.map((m) => (
                <li key={m.title} className="relative mb-10 last:mb-0">
                  <span
                    className="absolute -left-[2.05rem] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[color:var(--icfg-forest)] shadow-[0_0_0_3px_rgba(46,90,49,0.18)] md:-left-[2.55rem]"
                    aria-hidden
                  />
                  <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                    {m.when}
                  </p>
                  <h3 className="mt-2 font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.02em] text-black md:text-[1.15rem]">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-[44rem] font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="downloads"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2
                className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
              >
                Documents we share on request
              </h2>
              <p className="mt-5 max-w-[44rem] font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
                Send a short note describing your role and what you need. Most
                requests get a reply within a fortnight; in field-heavy months
                (Mar–May, Oct) it can stretch a little.
              </p>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {DOWNLOADS.map((d) => (
                  <li
                    key={d.label}
                    className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--icfg-forest)]/10 text-[color:var(--icfg-forest)]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current"
                          aria-hidden
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 7V3.5L19.5 9H14Z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-['Inter'] text-[1rem] font-[600] tracking-[-0.02em] text-black">
                          {d.label}
                        </h3>
                        <p className="mt-2 font-['Inter'] text-[0.9rem] leading-[1.6rem] text-gray-700">
                          {d.description}
                        </p>
                      </div>
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-4 inline-flex w-fit font-['Inter'] text-[0.85rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download PDF →
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex w-fit font-['Inter'] text-[0.85rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
                      >
                        Request a copy →
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:p-8">
                <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                  Trust & auditor
                </p>
                <h3
                  className={`${playfairDisplay.className} mt-3 text-[1.35rem] leading-tight text-black md:text-[1.55rem]`}
                >
                  Quick reference
                </h3>
                <dl className="mt-6 divide-y divide-gray-200">
                  {AUDITOR_INFO.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                      <dt className="font-['Inter'] text-[0.7rem] font-[600] uppercase tracking-[0.18em] text-gray-500 sm:w-[8rem] sm:shrink-0">
                        {row.label}
                      </dt>
                      <dd className="font-['Inter'] text-[0.92rem] leading-[1.6rem] text-gray-800">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/contact"
                  className="icfg-btn-primary mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-['Inter'] text-[0.88rem] font-[600] tracking-[-0.01em] text-white"
                >
                  Request documents
                </Link>
                <Link
                  href="/donate"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-5 py-3 font-['Inter'] text-[0.88rem] font-[500] text-[color:var(--icfg-forest)] shadow-sm transition hover:bg-gray-50"
                >
                  Donate to ICFG
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
