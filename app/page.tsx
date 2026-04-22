import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/contact-form";
import FadeInSection from "@/components/fade-in-section";
import Header from "@/components/header";
import {
  IconCapacityBuilding,
  IconCommunityEmpowerment,
  IconLeaf,
  IconScale,
} from "@/components/icfg-icons";
import ImpactMetricCounter from "@/components/impact-metric-counter";
import PartnersMarquee from "@/components/partners-marquee";
import SectionHeading from "@/components/section-heading";
import SiteFooter from "@/components/site-footer";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
import {
  CASE_STORY,
  HERO_IMAGE,
  IMPACT_METRICS,
  PARTNER_PLACEHOLDERS,
  STORY_IMAGE,
  TRUST_IMAGE_ALTS,
  TRUST_IMAGES,
  TRUST_POINTS,
  VALUE_PILLARS,
} from "@/constants/icfg";

const PILLAR_ICONS = {
  community: IconCommunityEmpowerment,
  leaf: IconLeaf,
  scale: IconScale,
  capacity: IconCapacityBuilding,
} as const;

const sectionPad =
  "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <FadeInSection className="relative w-full min-h-[min(92vh,52rem)] overflow-hidden bg-gray-100">
          <Image
            src={HERO_IMAGE}
            alt="Forest and community landscape in India"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Left-weighted scrim so the photo stays visible on the right; not a full-screen wash */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-gray-50 from-[0%] via-gray-50/88 via-[38%] to-transparent to-[74%]"
            aria-hidden
          />
          <div
            className={`relative z-10 flex min-h-[min(88vh,48rem)] max-w-[52rem] flex-col justify-end pb-20 pt-28 ${sectionPad} md:pb-28 md:pt-36`}
          >
            <p
              className={`${instrumentSerif.className} text-[1.35rem] italic tracking-[-1px] text-black md:text-[1.6rem]`}
            >
              Institute of Community Forest Governance
            </p>
            <h1
              className={`${SatoshiBold.className} mt-5 text-[2.75rem] leading-[1.08] tracking-[-0.06em] text-black md:text-[4.25rem] lg:text-[5rem]`}
            >
              Power belongs with people who live in the forest.
            </h1>
            <p className="mt-8 max-w-[38rem] font-['Inter'] text-[1.05rem] font-[400] leading-[1.85rem] tracking-[-0.03em] text-black md:text-[1.125rem]">
              We walk alongside tribal communities in India securing rights,
              protecting ecosystems, and building livelihoods that keep forests
              standing.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/#contact">
                <button
                  type="button"
                  className="icfg-btn-primary w-full rounded-2xl px-[2.75rem] py-[1.125rem] font-['Inter'] font-[500] tracking-[-0.02em] sm:w-auto"
                >
                  Support the work
                </button>
              </Link>
              <Link href="/#impact">
                <button
                  type="button"
                  className="w-full rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white/95 px-[2.75rem] py-[1.125rem] font-['Inter'] font-[500] tracking-[-0.02em] text-black shadow-sm backdrop-blur-[2px] sm:w-auto"
                >
                  See our impact
                </button>
              </Link>
            </div>
          </div>
        </FadeInSection>

        <section id="values" className="w-full bg-gray-50 py-12 text-black md:py-16">
          <div className={sectionPad}>
            <SectionHeading title="Our values" />
            <FadeInSection className="mt-14 md:mt-20">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {VALUE_PILLARS.map((pillar) => {
                  const Icon = PILLAR_ICONS[pillar.icon];
                  const toneClass =
                    pillar.iconTone === "gold"
                      ? "text-[#b8973a]"
                      : "text-[#6b2a32]";
                  return (
                    <article
                      key={pillar.id}
                      className="flex flex-col items-center gap-4 rounded-2xl bg-white px-5 py-8 text-center shadow-[0_14px_44px_-14px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.06] md:px-6"
                    >
                      <span
                        className={`inline-flex shrink-0 items-center justify-center ${toneClass}`}
                      >
                        <Icon className="h-9 w-9 md:h-10 md:w-10" />
                      </span>
                      <h3
                        className={`${playfairDisplay.className} text-[1.2rem] leading-snug text-black md:text-[1.35rem]`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="font-['Inter'] text-[0.92rem] leading-[1.65rem] tracking-[-0.01em] text-gray-700 md:text-[0.95rem]">
                        {pillar.body}
                      </p>
                    </article>
                  );
                })}
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="w-full bg-gray-100 py-12 md:py-16">
          <div className={sectionPad}>
            <FadeInSection id="impact">
              <h2 className="text-center font-['Inter'] text-[0.85rem] font-[600] uppercase tracking-[0.28em] text-[color:var(--icfg-forest)]">
                Impact at a glance
              </h2>
              <div className="mt-12 grid gap-10 md:grid-cols-3">
                {IMPACT_METRICS.map((m) => (
                  <ImpactMetricCounter key={m.id} metric={m} />
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="w-full bg-gray-50 py-12 md:py-16">
          <div className={sectionPad}>
            <FadeInSection id="story">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-gray-200 shadow-lg">
                  <Image
                    src={STORY_IMAGE}
                    alt="Forest trail with morning light through the trees"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-100/95 via-transparent to-transparent"
                    aria-hidden
                  />
                  <p className="absolute bottom-6 left-6 font-['Inter'] text-[0.8rem] tracking-[0.12em] text-black">
                    {CASE_STORY.location}
                  </p>
                </div>
                <div>
                  <h2 className="font-['Inter'] text-[0.85rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                    Field note
                  </h2>
                  <h3
                    className={`${SatoshiBold.className} mt-4 text-[2rem] tracking-[-0.05em] text-black md:text-[2.5rem]`}
                  >
                    {CASE_STORY.title}
                  </h3>
                  <p className="mt-6 font-['Inter'] text-[1.05rem] leading-[1.9rem] tracking-[-0.02em] text-gray-700">
                    {CASE_STORY.narrative}
                  </p>
                  <blockquote className="mt-10 border-l-2 border-[color:var(--icfg-leaf)] pl-6">
                    <p className="font-['Inter'] text-[1.1rem] italic leading-[1.85rem] tracking-[-0.02em] text-gray-900">
                      “{CASE_STORY.quote}”
                    </p>
                    <footer className="mt-4 font-['Inter'] text-[0.95rem] tracking-[-0.01em] text-gray-500">
                      {CASE_STORY.attribution}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section
          id="partners"
          className="w-full bg-gray-100 py-12 text-black md:py-16"
        >
          <div className={sectionPad}>
            <SectionHeading title="Our partners" />
            <FadeInSection className="mt-14 md:mt-20">
              <PartnersMarquee />
            </FadeInSection>
          </div>
        </section>

        <section className="w-full bg-gray-50 py-12 md:py-16">
          <div className={sectionPad}>
            <FadeInSection id="trust">
              <h2 className="text-center font-['Inter'] text-[0.85rem] font-[600] uppercase tracking-[0.26em] text-[color:var(--icfg-forest)]">
                Trust &amp; accountability
              </h2>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {TRUST_IMAGES.map((src, index) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200 shadow-md"
                  >
                    <Image
                      src={src}
                      alt={
                        TRUST_IMAGE_ALTS[index] ??
                        "Forest stewardship photography"
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {PARTNER_PLACEHOLDERS.map((name) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 font-['Inter'] text-[0.9rem] font-[500] tracking-[-0.02em] text-gray-800 shadow-sm"
                  >
                    {name}
                  </div>
                ))}
              </div>
              <ul className="mx-auto mt-12 flex max-w-[48rem] flex-col gap-4 md:mt-14">
                {TRUST_POINTS.map((point) => (
                  <li
                    key={point.id}
                    className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                  >
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--icfg-leaf)]"
                      aria-hidden
                    />
                    <span className="font-['Inter'] text-[0.98rem] leading-[1.6rem] tracking-[-0.01em] text-gray-800">
                      {point.label}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="w-full bg-gray-50 py-12 md:py-20">
          <FadeInSection
            id="contact"
            className={`light-container-bottom ${sectionPad} py-16 md:py-20`}
          >
            <div className="mx-auto max-w-[48rem] text-center">
              <h2 className="font-['Inter'] text-[1.85rem] font-[600] tracking-[-0.05em] text-black md:text-[2.25rem]">
                Reach the ICFG team
              </h2>
              <p className="mt-4 font-['Inter'] text-[1rem] leading-[1.8rem] tracking-[-0.01em] text-gray-600">
                Share a partnership idea, volunteer inquiry, or question about
                our programmes. We respond as soon as we are back from the
                field.
              </p>
            </div>
            <ContactForm variant="light" />
          </FadeInSection>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
