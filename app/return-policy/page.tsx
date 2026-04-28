import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { playfairDisplay, SatoshiBold } from "@/constants";
import { sectionPad } from "@/constants/layout";

export const metadata: Metadata = {
  title: "Return Policy — Institute of Community Forest Governance",
  description:
    "Returns, exchanges, and refunds for physical goods from ICFG via icfgindia.org.",
  openGraph: {
    title: "Return Policy — ICFG",
    description:
      "Return and exchange terms for Institute of Community Forest Governance materials.",
  },
};


const prose =
  "max-w-3xl font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700";

const h2 = `${playfairDisplay.className} mb-4 text-[1.35rem] leading-tight text-black md:text-[1.5rem]`;

export default function ReturnPolicyPage() {
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
            Return Policy
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
            <section aria-labelledby="rp-s1">
              <h2 id="rp-s1" className={h2}>
                1. Scope
              </h2>
              <p>
                This Return Policy applies to physical goods or materials
                supplied by ICFG through{" "}
                <Link
                  href="https://icfgindia.org"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  https://icfgindia.org
                </Link>{" "}
                or as confirmed in an order or dispatch communication (for
                example publications, kits, or event-related materials),
                excluding donations. Donations, recurring debits, and
                payment-gateway rules are covered under our Refund &amp;
                Cancellation (Donations) policy, if published on the Site.
              </p>
            </section>

            <section aria-labelledby="rp-s2">
              <h2 id="rp-s2" className={h2}>
                2. Eligibility for return or exchange
              </h2>
              <p className="mb-3">
                You may request a return, replacement, or refund only where:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  the item is faulty, damaged in transit, or not what you ordered
                  (wrong title, quantity, or specification as confirmed on your
                  order or receipt), or
                </li>
                <li>
                  the item is unused, in original packaging (where applicable),
                  and you notify us within the time limits in section 3.
                </li>
              </ul>
            </section>

            <section aria-labelledby="rp-s3">
              <h2 id="rp-s3" className={h2}>
                3. Time limits
              </h2>
              <p>
                Contact{" "}
                <a
                  href="mailto:icfg.ranchi@gmail.com"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  icfg.ranchi@gmail.com
                </a>{" "}
                within <strong className="font-[600] text-black">7 calendar days</strong>{" "}
                of delivery (or of the date you became aware of the defect, if
                hidden), with your order reference, brief description, and
                photographs of the packaging and item if damaged or wrong. Late
                requests may be declined except where required by applicable law.
              </p>
            </section>

            <section aria-labelledby="rp-s4">
              <h2 id="rp-s4" className={h2}>
                4. Items not accepted for return
              </h2>
              <p className="mb-3">
                Unless required by law, we do not accept returns for:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  donations or digital-only products (e.g. downloads once
                  supplied);
                </li>
                <li>
                  customised or personalised items produced to your specification;
                </li>
                <li>
                  items used or not in resalable condition where the issue is not
                  a manufacturing or dispatch error by ICFG;
                </li>
                <li>
                  perishable or hygiene-sensitive goods once opened, where
                  applicable.
                </li>
              </ul>
            </section>

            <section aria-labelledby="rp-s5">
              <h2 id="rp-s5" className={h2}>
                5. How to start a return
              </h2>
              <p>
                Email{" "}
                <a
                  href="mailto:icfg.ranchi@gmail.com?subject=Return%20request"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  icfg.ranchi@gmail.com
                </a>{" "}
                with the subject line “Return request”, your full name, contact
                number, delivery address, order or receipt details, and reason
                (defect / wrong item / other). We may ask for proof of purchase
                and photos. Do not return goods until we confirm the address and
                process, unless we instruct you to retain the item for inspection.
              </p>
            </section>

            <section aria-labelledby="rp-s6">
              <h2 id="rp-s6" className={h2}>
                6. Inspection and resolution
              </h2>
              <p>
                After we verify your claim, we will either: replace the item (if
                stock allows), issue a refund of the product price paid to ICFG
                (excluding any non-refundable gateway charges if disclosed at
                checkout), or offer another remedy permitted by law. If we find
                the claim is not valid under this policy, we may decline the
                return and may ask you to arrange return shipping at your cost.
              </p>
            </section>

            <section aria-labelledby="rp-s7">
              <h2 id="rp-s7" className={h2}>
                7. Shipping
              </h2>
              <p>
                For errors or defects attributable to ICFG, we will advise whether
                we provide a prepaid return label, pickup, or reimbursement of
                reasonable return postage, as appropriate. For change-of-mind
                returns only where we have expressly agreed in writing, return
                shipping is usually at your expense unless stated otherwise at
                purchase.
              </p>
            </section>

            <section aria-labelledby="rp-s8">
              <h2 id="rp-s8" className={h2}>
                8. Refunds
              </h2>
              <p>
                Approved refunds for eligible product returns will, where
                possible, be credited to the original payment method used for the
                order. Timing depends on banks and payment partners and may take
                several business days after we process the refund.
              </p>
            </section>

            <section aria-labelledby="rp-s9">
              <h2 id="rp-s9" className={h2}>
                9. Limitation
              </h2>
              <p>
                This policy does not limit any non-waivable rights you may have
                under Indian consumer law. ICFG’s overall liability for a product
                return is limited to the amount paid for that item unless the law
                requires otherwise.
              </p>
            </section>

            <section aria-labelledby="rp-s10">
              <h2 id="rp-s10" className={h2}>
                10. Contact
              </h2>
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
              </address>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
