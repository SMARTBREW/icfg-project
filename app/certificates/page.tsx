import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { CERTIFICATES } from "@/constants/content";
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

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";
const CERT_HERO = "/about/DSC_0069-1.webp";

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(72vh,40rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={CERT_HERO}
            alt="Forest landscape"
            fill
            priority
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
            <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
              Transparency
            </p>
            <h2
              className={`${playfairDisplay.className} mt-3 max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Registration and reporting at a glance
            </h2>
            <p className="mt-4 max-w-[48rem] font-['Inter'] text-[1rem] leading-[1.75rem] text-gray-700">
              Below is a summary of our standing and practices. For due diligence,
              grant agreements, or donor verification, contact us—we respond to
              reasonable requests from verified partners.
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

            <p className="mt-12 max-w-[40rem] font-['Inter'] text-[0.9rem] leading-[1.65rem] text-gray-600">
              <Link
                href="/#contact"
                className="font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
              >
                Get in touch
              </Link>{" "}
              for copies of certificates, trust deed excerpts, or latest audited
              reports where appropriate.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
