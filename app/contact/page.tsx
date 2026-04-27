import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { INSTITUTE_CONTACT } from "@/constants/institute-contact";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";

export const metadata: Metadata = {
  title: "Contact — Institute of Community Forest Governance",
  description:
    "Reach the ICFG team for partnerships, programme inquiries, field visits, and general questions about community forest governance in India.",
  openGraph: {
    title: "Contact — ICFG",
    description:
      "Message the Institute of Community Forest Governance—partnerships, volunteer interest, and programme questions welcome.",
  },
};

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";
const CONTACT_HERO = "/about/DSC05008-scaled.webp";

const CONTACT_ROWS = [
  {
    title: "Press & media",
    body: "Photography, interviews, or fact-checking on community forest governance, FRA implementation, or our field work.",
    note: "Subject line: “Press — [your outlet]”. We share our media kit on request.",
  },
  {
    title: "Partnerships & funders",
    body: "Programme partnerships, restricted grants, research collaborations, and CSR partnerships rooted in community consent.",
    note: "Please share a one-page concept note before we set up a call.",
  },
  {
    title: "Volunteers & internships",
    body: "Field stints, translation, documentation, design, or research support. We host a small number of placements each year.",
    note: "Tell us your availability, languages, and what you would like to learn from a village placement.",
  },
  {
    title: "Visiting a programme site",
    body: "Site visits happen by community invitation. We coordinate dates carefully to avoid disrupting Gram Sabhas and seasonal work.",
    note: "Please write at least 4–6 weeks in advance. We may decline during monsoon or harvest peaks.",
  },
] as const;

const FAQS = [
  {
    q: "Can I write to you in Hindi?",
    a: "Yes, please do. We don’t have a Hindi version of the website yet — write to us in Hindi if it is easier, and we will reply in Hindi. Replies in Hindi can take a few days longer because they get drafted in the field, not the office.",
  },
  {
    q: "Are donations to ICFG eligible for 80G tax benefits?",
    a: "Yes. ICFG is registered under sections 12A and 80G of the Income Tax Act. Indian taxpayers receive an 80G receipt against PAN, name, and address. The donate and certificates pages have the details.",
  },
  {
    q: "Do you accept foreign donations?",
    a: "Only as permitted by Indian law and our governing documents. Please write to us before sending anything; we will tell you what is currently possible and what isn’t.",
  },
  {
    q: "Why do replies sometimes take weeks?",
    a: "From late June through August the team is in the villages for monsoon-season patrols and Sabha visits, and the office runs on a skeleton crew. We catch up by mid-September. Anything urgent — please mark it so in the subject line.",
  },
  {
    q: "Can I volunteer with ICFG?",
    a: "We host a small number of placements each year. Field stints, translation, documentation, and research support are the most useful. Stays of three weeks or longer work better — anything shorter rarely gives you enough of the village rhythm.",
  },
  {
    q: "Do you work outside Jharkhand?",
    a: "Most field work is in Jharkhand. We also support and learn from communities in Chhattisgarh, Odisha, and Maharashtra on FRA implementation and CFR claims.",
  },
  {
    q: "Can students or researchers visit a village?",
    a: "Possibly, by community invitation and never as observers. Plan with us at least 4–6 weeks ahead, and expect a clear scope and a language plan before the visit.",
  },
  {
    q: "How can my organisation partner with ICFG?",
    a: "Start with a short concept note describing the programme idea, the communities involved, and the consent and reporting expectations. Partnerships that compromise community consent — even unintentionally — are something we step back from.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(56vh,32rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={CONTACT_HERO}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/30 to-black/10"
            aria-hidden
          />
          <div
            className={`relative z-10 flex min-h-[min(56vh,32rem)] w-full flex-col justify-end pb-12 pt-28 ${sectionPad} md:pb-16 md:pt-32`}
          >
            <p
              className={`${instrumentSerif.className} text-[1.2rem] italic tracking-[-0.02em] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] md:text-[1.35rem]`}
            >
              Institute of Community Forest Governance
            </p>
            <h1
              className={`${SatoshiBold.className} mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.05em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[3.25rem] lg:text-[3.5rem]`}
            >
              Contact
            </h1>
            <p
              className={`${playfairDisplay.className} mt-6 max-w-2xl text-[clamp(0.95rem,2.2vw,1.2rem)] leading-[1.5] tracking-[-0.02em] text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`}
            >
              Partnerships, programme questions, or field visit requests—we reply
              when we are back from the villages.
            </p>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`} id="contact">
          <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2
                className={`${playfairDisplay.className} text-[1.5rem] text-black md:text-[1.85rem]`}
              >
                How to reach us
              </h2>
              <p className="mt-3 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-600">
                We coordinate programmes from {INSTITUTE_CONTACT.region}. The
                form is the most reliable way to reach the team; we also list
                email and expectations below.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <p className="font-['Inter'] text-[0.7rem] font-[600] uppercase tracking-[0.18em] text-gray-500">
                    Email
                  </p>
                  <a
                    href={INSTITUTE_CONTACT.emailMailto}
                    className="mt-2 inline-block font-['Inter'] text-[0.95rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                  >
                    {INSTITUTE_CONTACT.emailDisplay}
                  </a>
                  <p className="mt-2 font-['Inter'] text-[0.85rem] leading-[1.5rem] text-gray-600">
                    For general inquiries and institutional correspondence.
                    Please avoid sharing sensitive personal data unrelated to
                    your request.
                  </p>
                </li>
                <li className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <p className="font-['Inter'] text-[0.7rem] font-[600] uppercase tracking-[0.18em] text-gray-500">
                    Where to find us
                  </p>
                  <p className="mt-2 font-['Inter'] text-[0.95rem] leading-[1.6rem] text-gray-800">
                    Office hours and the region we work from are mapped out{" "}
                    <a
                      href="#where-we-coordinate-from"
                      className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                    >
                      below
                    </a>
                    .
                  </p>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-[color:var(--icfg-forest)]/20 bg-[color:var(--icfg-forest)]/[0.06] p-5 md:p-6">
                <p className="font-['Inter'] text-[0.85rem] font-[600] uppercase tracking-[0.12em] text-[color:var(--icfg-forest)]">
                  Want to fund the work?
                </p>
                <p className="mt-2 font-['Inter'] text-[0.9rem] leading-[1.55rem] text-gray-800">
                  Online giving is being set up. Meanwhile you can start a donation
                  conversation from the donate page.
                </p>
                <div className="mt-4">
                  <Link
                    href="/donate"
                    className="icfg-btn-primary inline-flex rounded-2xl px-5 py-3 font-['Inter'] text-[0.9rem] font-[500] tracking-[-0.02em]"
                  >
                    Donate
                  </Link>
                </div>
                <p className="mt-3 font-['Inter'] text-[0.8rem] text-gray-600">
                  <Link
                    href="/certificates"
                    className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                  >
                    12A / 80G and reporting
                  </Link>{" "}
                  — summary for donors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-center lg:text-left">
                <h2
                  className={`${playfairDisplay.className} text-[1.5rem] text-black md:text-[1.85rem]`}
                >
                  Send a message
                </h2>
                <p className="mt-3 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-600">
                  All fields marked * are required. We read every note; response
                  times depend on field travel schedules.
                </p>
                <p className="mt-2 font-['Inter'] text-[0.85rem] text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                  >
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms-of-use"
                    className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                  >
                    terms of use
                  </a>
                  .
                </p>
              </div>
              <ContactForm
                variant="light"
                className="!mt-10"
                formId="contact-form-page"
              />
            </div>
          </div>
        </section>

        <section
          id="where-we-coordinate-from"
          className={`border-t border-gray-200 bg-white py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="relative aspect-[4/3] w-full md:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[24rem]">
                <iframe
                  title="Region of work — Jharkhand and neighbouring states"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=83.5%2C22.0%2C88.0%2C25.5&amp;layer=mapnik&amp;marker=23.36%2C85.33"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="px-4 py-3 font-['Inter'] text-[0.78rem] leading-[1.4rem] text-gray-600 md:px-5 md:py-4">
                Map data ©{" "}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  className="text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenStreetMap contributors
                </a>
                . Marker shows the broader region; specific village locations
                are not published for community privacy.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                Where we coordinate from
              </p>
              <h2
                className={`${playfairDisplay.className} mt-3 max-w-[34rem] text-[1.6rem] leading-tight text-black md:text-[1.95rem]`}
              >
                {INSTITUTE_CONTACT.region}
              </h2>
              <p className="mt-4 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                Most field work is in and around Jharkhand. Coordinators travel
                to hearings, trainings, and Gram Sabhas across roughly{" "}
                <strong className="font-[600] text-black">10 districts</strong>
                ; the office handles documentation, partnerships, and donor
                correspondence in between trips.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="rounded-2xl border border-gray-200/80 bg-gray-50 p-5">
                  <p className="font-['Inter'] text-[0.7rem] font-[600] uppercase tracking-[0.18em] text-gray-500">
                    Office hours
                  </p>
                  <p className="mt-2 font-['Inter'] text-[0.95rem] leading-[1.6rem] text-gray-800">
                    {INSTITUTE_CONTACT.officeHours}
                  </p>
                </li>
                <li className="rounded-2xl border border-gray-200/80 bg-gray-50 p-5">
                  <p className="font-['Inter'] text-[0.7rem] font-[600] uppercase tracking-[0.18em] text-gray-500">
                    Response time
                  </p>
                  <p className="mt-2 font-['Inter'] text-[0.95rem] leading-[1.6rem] text-gray-800">
                    {INSTITUTE_CONTACT.responseTime}
                  </p>
                </li>
              </ul>
              <p className="mt-6 font-['Inter'] text-[0.85rem] leading-[1.55rem] text-gray-500">
                Need an exact address for courier or in-person visits? Please
                ask via the form—we share it on a per-visit basis.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact-rows"
          className={`border-t border-gray-200 bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className={`${playfairDisplay.className} max-w-[42rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Writing about something specific
            </h2>
            <p className="mt-5 max-w-[44rem] font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
              All of these still land in the same inbox (
              <a
                href={INSTITUTE_CONTACT.emailMailto}
                className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
              >
                {INSTITUTE_CONTACT.emailDisplay}
              </a>
              ). A clearer subject line just helps the right person open it
              first.
            </p>

            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {CONTACT_ROWS.map((r) => (
                <li
                  key={r.title}
                  className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:p-7"
                >
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.02em] text-black md:text-[1.1rem]">
                    {r.title}
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                    {r.body}
                  </p>
                  <p className="mt-4 font-['Inter'] text-[0.85rem] leading-[1.55rem] text-gray-500">
                    {r.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="faq"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className={`${playfairDisplay.className} text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Questions we get often
            </h2>
            <ul className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              {FAQS.map((item, i) => (
                <li key={i}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 transition hover:bg-gray-50 md:px-7">
                      <span className="font-['Inter'] text-[0.98rem] font-[600] tracking-[-0.01em] text-black md:text-[1rem]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[0.85rem] text-gray-600 transition group-open:rotate-45 group-open:border-[color:var(--icfg-forest)] group-open:text-[color:var(--icfg-forest)]"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-1 font-['Inter'] text-[0.95rem] leading-[1.75rem] text-gray-700 md:px-7">
                      {item.a}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center font-['Inter'] text-[0.9rem] text-gray-600">
              Didn’t see your question?{" "}
              <Link
                href="/contact#contact"
                className="font-[500] text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
              >
                Send us a note
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
