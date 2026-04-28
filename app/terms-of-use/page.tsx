import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { playfairDisplay, SatoshiBold } from "@/constants";
import { sectionPad } from "@/constants/layout";

export const metadata: Metadata = {
  title: "Terms of Use — Institute of Community Forest Governance",
  description:
    "Terms and conditions for using icfgindia.org and ICFG services.",
  openGraph: {
    title: "Terms of Use — ICFG",
    description:
      "Terms of use for the Institute of Community Forest Governance website.",
  },
};


const prose =
  "max-w-3xl font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700";

const h2 = `${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`;

const mail = "icfg.ranchi@gmail.com";

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col bg-gray-50 text-black">
        <header
          className={`border-b border-gray-200 bg-white py-12 md:py-16 ${sectionPad}`}
        >
          <h1
            className={`${SatoshiBold.className} text-[2rem] leading-tight tracking-[-0.04em] text-black md:text-[2.5rem]`}
          >
            Terms of Use
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
            <section className="space-y-4" aria-labelledby="tou-intro">
              <h2
                id="tou-intro"
                className={`${playfairDisplay.className} text-[1.5rem] leading-tight text-black md:text-[1.75rem]`}
              >
                Introduction
              </h2>
              <p>
                These are the Terms and Conditions of Use for the Institute of
                Community Forest Governance online website.
              </p>
              <p>
                The Institute of Community Forest Governance (“ICFG”, “we”,
                “us”, or “our”) is a non-profit organisation in India, with its
                office at 2nd Floor, Simdega Bhawan, Purulia Road, Kantatoli,
                Ranchi, operating its online portal at{" "}
                <Link
                  href="https://icfgindia.org"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  https://icfgindia.org
                </Link>{" "}
                (the “Site”). By using (including browsing, donating, registering
                for events, downloading resources, or using any features) the
                Site or by subscribing to or using any of our services
                (“Services”), you agree to comply with and be bound by the
                following terms of use (collectively, the “Terms of Use”).
              </p>
              <p>
                Please read these terms carefully. If you do not agree to any of
                them, please do not use the Site. These Terms of Use and other
                policies referenced here are intended to be consistent with
                applicable law, including the Information Technology Act, 2000
                and the Information Technology (Intermediary Guidelines and
                Digital Media Ethics Code) Rules, 2021, as amended from time to
                time.
              </p>
              <p>
                “ICFG” or “we” / “our” / “us” means the Institute of Community
                Forest Governance as the operator of the Site. “You” means the
                user or visitor of the Site or any of the Services.
              </p>
            </section>

            <section aria-labelledby="tou-s1">
              <h2 id="tou-s1" className={h2}>
                1) Changes to the Terms of Use
              </h2>
              <div className="space-y-4">
                <p>
                  ICFG may change any of the terms in these Terms of Use or any
                  policies or guidelines governing the Site or Services at any
                  time, at its sole discretion. Changes may be posted on the
                  Site without individual notice to you.
                </p>
                <p>
                  Your continued use of the Site and Services after changes are
                  posted will constitute your acceptance of those changes. If
                  you do not agree, you must stop using the Site and Services.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s2">
              <h2 id="tou-s2" className={h2}>
                2) Privacy
              </h2>
              <p>
                Please see our{" "}
                <Link
                  href="/privacy"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and share information about
                you.
              </p>
            </section>

            <section aria-labelledby="tou-s3">
              <h2 id="tou-s3" className={h2}>
                3) Using the Site and Services
              </h2>
              <div className="space-y-4">
                <p>
                  <strong className="font-[600] text-black">Age:</strong> The
                  Site and Services are intended for users who are 18 years or
                  older and able to enter binding contracts under applicable law.
                  If you are under 18, you may use the Site and Services only
                  with the involvement and consent of a parent or legal
                  guardian, who is responsible for your activity.
                </p>
                <p>
                  <strong className="font-[600] text-black">
                    Your representations:
                  </strong>{" "}
                  You represent that information you provide is accurate and
                  that you will not use the Site or Services for any unlawful
                  purpose or in any way that could harm ICFG, other users, or
                  third parties.
                </p>
                <p>
                  <strong className="font-[600] text-black">
                    Donations and transactions:
                  </strong>{" "}
                  If you make donations or other payments through the Site, you
                  agree to provide accurate payment and contact information and
                  to comply with any additional terms shown at the time of
                  donation or checkout.
                </p>
                <p>
                  <strong className="font-[600] text-black">
                    Passwords and accounts:
                  </strong>{" "}
                  If ICFG assigns or allows you to choose a username and
                  password, you must keep your credentials confidential. You are
                  responsible for all activity under your account. Notify us
                  promptly at{" "}
                  <a
                    href={`mailto:${mail}`}
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    {mail}
                  </a>{" "}
                  of any unauthorised use or security breach. ICFG is not
                  liable for loss or damage arising from your failure to keep
                  your account secure or from unauthorised use where you have
                  not taken reasonable steps to protect your credentials.
                </p>
                <p>
                  <strong className="font-[600] text-black">
                    Suspension and limits:
                  </strong>{" "}
                  ICFG may refuse service, suspend or terminate accounts, remove
                  or edit content, or limit or cancel transactions or
                  disbursements where reasonably required for legal, security,
                  operational, or risk reasons, including applying limits on
                  transaction value or frequency. ICFG will not be liable if it
                  does not complete a transaction that would exceed such limits or
                  if it exits a transaction for security or compliance reasons.
                </p>
                <p>
                  <strong className="font-[600] text-black">
                    Delivery (if applicable):
                  </strong>{" "}
                  If ICFG provides physical materials or goods, estimated
                  timelines may be communicated by email or on the Site; actual
                  dispatch dates may be confirmed when your order or shipment is
                  ready. Any tracking or status tools made available will apply
                  as described on the Site.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s4">
              <h2 id="tou-s4" className={h2}>
                4) Licence and site access
              </h2>
              <div className="space-y-4">
                <p>
                  Subject to these Terms of Use, ICFG grants you a limited,
                  revocable, non-exclusive, non-transferable licence to access
                  and view the Site in a standard web browser for personal,
                  non-commercial use, including browsing content, making
                  permitted donations or purchases, and using interactive
                  features we expressly provide.
                </p>
                <p>
                  You may not reproduce, distribute, publicly display, sell,
                  lease, transmit, create derivative works from, translate,
                  modify, reverse engineer, decompile, or otherwise exploit the
                  Site or its content except as allowed by law or with ICFG’s
                  prior written consent. You may not use content from the Site to
                  build a commercial database or similar offering, or “mirror”
                  or “frame” the Site on another server without permission.
                </p>
                <p>
                  You may not use manual or automated means (including scraping,
                  crawling, or harvesting) to collect content from the Site in
                  bulk, monitor or copy our pages in a way that burdens our
                  systems, or attempt unauthorised access, spam, or distribution
                  of malware.
                </p>
                <p>
                  You must not upload or publish content that: (a) infringes
                  others’ intellectual property or privacy rights without
                  authority; (b) is unlawful, defamatory, obscene, harassing,
                  hateful, or encourages crime or civil wrong; (c) contains
                  malware or harmful code; (d) constitutes unauthorised
                  advertising or solicitation; or (e) impersonates any person or
                  entity.
                </p>
                <p>
                  Any breach may result in immediate termination of the licence
                  above, without notice.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s5">
              <h2 id="tou-s5" className={h2}>
                5) Links to third-party sites
              </h2>
              <p>
                The Site may link to third-party websites. ICFG does not control
                and is not responsible for third-party content, accuracy, or
                availability. Your use of third-party sites is at your own risk
                and subject to their terms.
              </p>
            </section>

            <section aria-labelledby="tou-s6">
              <h2 id="tou-s6" className={h2}>
                6) Intellectual property
              </h2>
              <div className="space-y-4">
                <p>
                  The name Institute of Community Forest Governance, ICFG, and
                  related logos, graphics, campaigns, designs, text, and other
                  materials on the Site are protected by applicable trade mark
                  and copyright laws in India and elsewhere, unless otherwise
                  stated. You may not use ICFG’s marks or trade dress in a way
                  that causes confusion or disparages ICFG.
                </p>
                <p>
                  Except for content you lawfully upload, content on the Site
                  belongs to ICFG or its licensors and may not be copied or
                  reused except as permitted by these Terms or by law.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s7">
              <h2 id="tou-s7" className={h2}>
                7) Reviews, comments, and feedback
              </h2>
              <div className="space-y-4">
                <p>
                  If the Site allows submissions (“Submissions”), you grant ICFG
                  a royalty-free, worldwide, perpetual, irrevocable licence to
                  use, host, store, reproduce, modify, publish, and display
                  Submissions in connection with operating and promoting the
                  Site and Services, subject to our{" "}
                  <Link
                    href="/privacy"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    Privacy Policy
                  </Link>
                  . You represent you have the rights to grant this licence. You
                  may edit or delete your Submissions where the Site provides
                  tools to do so.
                </p>
                <p>
                  You must not submit false, misleading, or defamatory content,
                  violate others’ rights, harass users, use the Site for
                  unauthorised commercial promotion, send bulk unsolicited
                  messages, or break applicable law. ICFG may remove or moderate
                  Submissions at its discretion.
                </p>
                <p>
                  If you send unsolicited ideas or proposals (“Feedback”), you
                  agree they are non-confidential and ICFG may use them without
                  obligation to you, except where mandatory law provides
                  otherwise.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s8">
              <h2 id="tou-s8" className={h2}>
                8) Donations, refunds, and returns
              </h2>
              <div className="space-y-4">
                <p>
                  <strong className="font-[600] text-black">Donations:</strong>{" "}
                  Please follow the{" "}
                  <Link
                    href="https://icfgindia.org/refund-cancellation/"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    Refund &amp; Cancellation Policy
                  </Link>{" "}
                  (if published on the Site) for donations. Many donations may be
                  non-refundable once processed; any exceptions will be as
                  stated in that policy.
                </p>
                <p>
                  <strong className="font-[600] text-black">
                    Goods or materials:
                  </strong>{" "}
                  If ICFG offers physical products, returns or refunds for
                  faulty, damaged, or incorrect items will be as described in
                  the{" "}
                  <Link
                    href="/return-policy"
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    Return Policy
                  </Link>{" "}
                  on the Site, if and when published.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s9">
              <h2 id="tou-s9" className={h2}>
                9) Disclaimer and warranties
              </h2>
              <div className="space-y-4">
                <p>
                  The Site, Services, and any information or materials are
                  provided “as is” and “as available”. To the fullest extent
                  permitted by law, ICFG disclaims warranties of merchantability,
                  fitness for a particular purpose, accuracy, and
                  non-infringement, and disclaims liability for errors or
                  omissions in Site content.
                </p>
                <p>
                  To the fullest extent permitted by law, ICFG is not liable for
                  any indirect, incidental, special, consequential, or punitive
                  damages, or for loss of profits, data, or goodwill, arising
                  from your use of the Site or Services, third-party sites, or
                  unauthorised access to your data—except where liability cannot
                  be excluded under Indian law.
                </p>
                <p>
                  You download or use materials from the Site at your own risk.
                  ICFG does not guarantee uninterrupted or error-free operation
                  of the Site.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s10">
              <h2 id="tou-s10" className={h2}>
                10) Indemnity
              </h2>
              <div className="space-y-4">
                <p>
                  You agree to indemnify and hold harmless ICFG and its trustees,
                  officers, employees, and partners from claims, damages, losses,
                  and reasonable legal fees arising out of: (i) your breach of
                  these Terms; (ii) your use of the Site or Services; (iii) your
                  Submissions; (iv) infringement by you or someone using your
                  account of third-party rights; or (v) your violation of law or
                  third-party rights.
                </p>
                <p>
                  ICFG may assume the defence of any matter subject to
                  indemnification, and you agree to cooperate. You may not settle
                  any claim that imposes obligations on ICFG without ICFG’s prior
                  written consent.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s11">
              <h2 id="tou-s11" className={h2}>
                11) Termination
              </h2>
              <div className="space-y-4">
                <p>
                  ICFG may suspend or terminate your access or account at any
                  time, with or without cause or notice, including for breach of
                  these Terms, legal requests, technical issues, or risk
                  management. Termination may include removing access and
                  revoking credentials.
                </p>
                <p>
                  You may stop using the Site at any time. You may request
                  account closure or send termination-related notices to{" "}
                  <a
                    href={`mailto:${mail}`}
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    {mail}
                  </a>{" "}
                  or by post to the Ranchi address above.
                </p>
                <p>
                  Provisions that by nature should survive (including
                  intellectual property, disclaimers, indemnity, and governing
                  law) will survive termination.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s12">
              <h2 id="tou-s12" className={h2}>
                12) Governing law and jurisdiction
              </h2>
              <p>
                These Terms are governed by the laws of India, without regard to
                conflict-of-law principles that would apply another jurisdiction’s
                laws. Subject to mandatory provisions of Indian law, courts at
                Ranchi, Jharkhand shall have exclusive jurisdiction over disputes
                arising from these Terms or your use of the Site and Services.
              </p>
            </section>

            <section aria-labelledby="tou-s13">
              <h2 id="tou-s13" className={h2}>
                13) Copyright complaints
              </h2>
              <div className="space-y-4">
                <p>
                  ICFG respects intellectual property rights. If you believe
                  content on the Site infringes your copyright, please send a
                  notice with: (i) your signature; (ii) identification of the
                  copyrighted work; (iii) identification of the allegedly
                  infringing material and its location on the Site; (iv) your
                  contact details; (v) a good-faith statement that the use is not
                  authorised; and (vi) a statement of accuracy under penalty of
                  perjury where applicable.
                </p>
                <p>
                  Send notices to: Institute of Community Forest Governance, 2nd
                  Floor, Simdega Bhawan, Purulia Road, Kantatoli, Ranchi, and{" "}
                  <a
                    href={`mailto:${mail}`}
                    className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                  >
                    {mail}
                  </a>
                  . ICFG may remove or disable access to allegedly infringing
                  material in accordance with applicable law.
                </p>
              </div>
            </section>

            <section aria-labelledby="tou-s14">
              <h2 id="tou-s14" className={h2}>
                14) Repeat infringer policy
              </h2>
              <p>
                ICFG may limit or terminate access for users who repeatedly
                infringe intellectual property or other legal rights of others.
              </p>
            </section>

            <section aria-labelledby="tou-s15">
              <h2 id="tou-s15" className={h2}>
                15) Disputes and release
              </h2>
              <p>
                If a dispute arises between you and ICFG, please contact{" "}
                <a
                  href={`mailto:${mail}`}
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  {mail}
                </a>{" "}
                first. To the extent permitted by law, you release ICFG and its
                personnel from claims arising from disputes between you and other
                users or third parties connected with your use of the Site.
              </p>
            </section>

            <section aria-labelledby="tou-s16">
              <h2 id="tou-s16" className={h2}>
                16) Severability
              </h2>
              <p>
                If any provision is held invalid or unenforceable, the remaining
                provisions remain in effect to the maximum extent permitted.
              </p>
            </section>

            <section aria-labelledby="tou-s17">
              <h2 id="tou-s17" className={h2}>
                17) Notices
              </h2>
              <p>
                Notices to you may be sent by email to the address associated
                with your account or posted on the Site. Notices to ICFG should
                be sent to{" "}
                <a
                  href={`mailto:${mail}`}
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  {mail}
                </a>{" "}
                or the postal address above.
              </p>
            </section>

            <section aria-labelledby="tou-s18">
              <h2 id="tou-s18" className={h2}>
                18) Contact
              </h2>
              <p>
                For questions about these Terms:{" "}
                <a
                  href={`mailto:${mail}`}
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  {mail}
                </a>{" "}
                ·{" "}
                <a
                  href="tel:+916513502529"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  0651-3502529
                </a>{" "}
                ·{" "}
                <a
                  href="tel:+919431103041"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  9431103041
                </a>
              </p>
            </section>

            <p className="border-t border-gray-200 pt-8 text-[0.9rem] leading-relaxed text-gray-600">
              Section headings are for convenience only and do not limit the
              meaning of any provision.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
