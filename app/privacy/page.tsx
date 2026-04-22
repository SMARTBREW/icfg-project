import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { playfairDisplay, SatoshiBold } from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — Institute of Community Forest Governance",
  description:
    "How ICFG collects, uses, and protects personal information on icfgindia.org and related services.",
  openGraph: {
    title: "Privacy Policy — ICFG",
    description:
      "Privacy practices for the Institute of Community Forest Governance website.",
  },
};

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";

const prose =
  "max-w-3xl font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <header
          className={`border-b border-gray-200 bg-white py-12 md:py-16 ${sectionPad}`}
        >
          <h1
            className={`${SatoshiBold.className} text-[2rem] leading-tight tracking-[-0.04em] text-black md:text-[2.5rem]`}
          >
            Privacy Policy
          </h1>
          <p
            className={`${playfairDisplay.className} mt-3 text-[1.15rem] text-gray-800 md:text-[1.25rem]`}
          >
            Institute of Community Forest Governance (ICFG)
          </p>
          <p className="mt-4 font-['Inter'] text-[0.9rem] text-gray-500">
            Last updated: April 2026
          </p>
        </header>

        <article className={`py-12 md:py-16 ${sectionPad}`}>
          <div className={`${prose} space-y-10`}>
            <section className="space-y-4" aria-labelledby="intro-heading">
              <h2
                id="intro-heading"
                className={`${playfairDisplay.className} text-[1.5rem] leading-tight text-black md:text-[1.75rem]`}
              >
                Introduction
              </h2>
              <p>
                This is the Privacy Policy for the Institute of Community Forest
                Governance website.
              </p>
              <p>
                The Institute of Community Forest Governance (“ICFG”, “we”,
                “our”, “us”) operates its online portal at{" "}
                <Link
                  href="https://icfgindia.org"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  https://icfgindia.org
                </Link>{" "}
                (the “Site”). By using (browsing, donating, registering, or
                otherwise using) our Site or any services (“Services”), you agree
                to this Privacy Policy.
              </p>
              <p>
                Please read this policy carefully. If you do not agree, please do
                not use the Site.
              </p>
            </section>

            <section aria-labelledby="s1-heading">
              <h2
                id="s1-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                1) Personal Data Privacy
              </h2>
              <div className="space-y-4">
                <p>
                  ICFG values your privacy and takes reasonable steps to protect
                  personal information.
                </p>
                <p>
                  We may update this Privacy Policy from time to time by posting
                  revised content on this page. Continued use of the Site after
                  updates means you accept those changes.
                </p>
                <p>
                  ICFG collects personal information that you knowingly provide
                  through forms, communications, donations, registrations,
                  subscriptions, or similar interactions.
                </p>
                <p>
                  We do not sell your personal information to third parties. We
                  may share data only where necessary for service delivery,
                  compliance, legal requirements, or with your consent.
                </p>
                <p>
                  If you are under 18 years of age, please use this Site with the
                  guidance of a parent or guardian.
                </p>
                <p>
                  We do not store full card, net-banking, or UPI credentials on
                  our own servers. Payment transactions are processed by
                  authorized payment gateway and banking partners.
                </p>
              </div>
            </section>

            <section aria-labelledby="s2-heading">
              <h2
                id="s2-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                2) What Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-['Inter'] text-[1.05rem] font-[600] text-black">
                    a) Personal information
                  </h3>
                  <p className="mb-3">
                    Depending on your interaction, we may collect details such
                    as:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Name</li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Donation/payment details (limited transaction metadata)</li>
                    <li>Any information you submit via contact or campaign forms</li>
                  </ul>
                  <p className="mt-4">
                    You may choose not to provide certain information, but some
                    services may then not function properly.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-['Inter'] text-[1.05rem] font-[600] text-black">
                    b) Non-personal/technical information
                  </h3>
                  <p className="mb-3">
                    We may collect technical data such as:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>IP address</li>
                    <li>Device/browser type</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring URL</li>
                    <li>Basic usage analytics</li>
                  </ul>
                  <p className="mt-4">
                    This helps us improve Site performance, security, and user
                    experience.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="s3-heading">
              <h2
                id="s3-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                3) Analytics and Similar Tools
              </h2>
              <p>
                We may use analytics tools (such as Google Analytics or
                equivalent) to understand usage patterns and improve content and
                services. These tools may use cookies or similar technologies.
                You can manage ad personalization and cookie preferences via your
                browser and provider settings.
              </p>
            </section>

            <section aria-labelledby="s4-heading">
              <h2
                id="s4-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                4) Where and How Information Is Stored
              </h2>
              <p className="mb-4">
                Information submitted via the Site may be stored in systems used
                by ICFG and trusted service providers for website operation,
                communication, records, and compliance.
              </p>
              <p className="mb-3">We keep data only as long as reasonably required for:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Service delivery</li>
                <li>Legal, tax, accounting, and audit obligations</li>
                <li>Fraud prevention and security</li>
                <li>Dispute handling</li>
              </ul>
            </section>

            <section aria-labelledby="s5-heading">
              <h2
                id="s5-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                5) Children’s Information
              </h2>
              <p>
                If you are under 18, do not submit personal data without
                permission from a parent or legal guardian. We encourage
                guardians to supervise children’s online activities.
              </p>
            </section>

            <section aria-labelledby="s6-heading">
              <h2
                id="s6-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                6) Your Rights
              </h2>
              <p className="mb-3">
                Subject to applicable law, you may request:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>Access to personal data we hold about you</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of data where legally permissible</li>
                <li>
                  Withdrawal of consent (where processing is consent-based)
                </li>
              </ul>
              <p>
                To make a request, contact us using the details in section 13.
              </p>
            </section>

            <section aria-labelledby="s7-heading">
              <h2
                id="s7-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                7) Emails and Communications
              </h2>
              <p>
                We send email communications to users/supporters who have opted
                in, contacted us, donated, or otherwise interacted with us where
                communication is reasonably related to that interaction. You can
                unsubscribe from non-essential emails at any time using the
                unsubscribe link (where available) or by contacting us.
              </p>
            </section>

            <section aria-labelledby="s8-heading">
              <h2
                id="s8-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                8) Cookies
              </h2>
              <p className="mb-3">
                Like many websites, we use cookies and similar technologies to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>Remember preferences</li>
                <li>Improve performance</li>
                <li>Understand usage trends</li>
                <li>Support essential functionality and security</li>
              </ul>
              <p>
                You can accept or reject cookies using browser settings.
                Disabling some cookies may impact Site functionality.
              </p>
            </section>

            <section aria-labelledby="s9-heading">
              <h2
                id="s9-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                9) External Links
              </h2>
              <p>
                The Site may include links to third-party websites. We do not
                control those websites and are not responsible for their privacy
                practices, content, or services. Please review their privacy
                policies before sharing information.
              </p>
            </section>

            <section aria-labelledby="s10-heading">
              <h2
                id="s10-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                10) Legal Disclosure / Exceptions
              </h2>
              <p className="mb-3">
                ICFG may disclose personal information when required by law,
                court order, government directive, or where necessary to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Protect legal rights</li>
                <li>Prevent fraud or abuse</li>
                <li>Protect users, staff, or property</li>
                <li>Enforce Terms of Use and other policies</li>
              </ul>
            </section>

            <section aria-labelledby="s11-heading">
              <h2
                id="s11-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                11) Security
              </h2>
              <p>
                We use reasonable administrative, technical, and organizational
                safeguards to protect personal data. However, no internet
                transmission or electronic storage method is completely secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section aria-labelledby="s12-heading">
              <h2
                id="s12-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                12) Changes to this Policy
              </h2>
              <p>
                This Privacy Policy may be modified from time to time. Updates
                will be posted on this page with the latest effective date. Your
                continued use of the Site after such update constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section aria-labelledby="s13-heading">
              <h2
                id="s13-heading"
                className={`${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`}
              >
                13) Contact Information
              </h2>
              <p className="mb-4">
                For privacy queries, data correction requests, or complaints,
                contact:
              </p>
              <address className="not-italic font-['Inter'] text-[1rem] leading-[1.8rem] text-gray-800">
                <p className="font-[600] text-black">
                  Institute of Community Forest Governance
                </p>
                <p className="mt-2">
                  2nd Floor, Simdega Bhawan, Purulia Road, Kantatoli, Ranchi
                </p>
                <p className="mt-3">
                  Email:{" "}
                  <a
                    href="mailto:icfg.ranchi@gmail.com"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    icfg.ranchi@gmail.com
                  </a>
                </p>
                <p className="mt-1">
                  Phone:{" "}
                  <a
                    href="tel:+916513502529"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    0651-3502529
                  </a>
                  ,{" "}
                  <a
                    href="tel:+919431103041"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    9431103041
                  </a>
                </p>
                <p className="mt-3">
                  Website:{" "}
                  <Link
                    href="https://icfgindia.org"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    https://icfgindia.org
                  </Link>
                </p>
              </address>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
