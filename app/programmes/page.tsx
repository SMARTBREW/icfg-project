import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import ProgrammesCommitteesSection from "@/components/programmes-committees-section";
import SiteFooter from "@/components/site-footer";
import HoverCard from "@/components/hover-card";
import {
  IconCommitmentTraining,
  IconLeaf,
  IconLivelihood,
  IconUsers,
} from "@/components/icfg-icons";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
import { sectionPad } from "@/constants/layout";
import { PROGRAMMES_HERO_IMAGE } from "@/constants/icfg";

export const metadata: Metadata = {
  title: "Programmes — Institute of Community Forest Governance",
  description:
    "ICFG principles, community forest governance committees, self-help groups, organic farming, youth assemblies, and residential learning programmes.",
  openGraph: {
    title: "Programmes — ICFG",
    description:
      "How ICFG works with villages: CFG committees, women’s cooperatives, farmers’ groups, Bal Akhra, and training courses.",
  },
};


const LIVING_BEINGS_POINTS = [
  "Honour the right of every living being—human and animal—to a shared home on this earth.",
  "Stand with forest-dwelling communities through village institutions, CFG committees, and consent-led practice.",
  "Strengthen women’s cooperatives, organic farmers’ groups, and Bal Akhra youth assemblies for stewardship and livelihoods.",
] as const;

const PRINCIPLE_CARDS = [
  {
    title: "Collaboration & partnerships",
    content:
      "Engaging in collaborative efforts with local communities, government agencies, NGOs, and other stakeholders.",
    icon: (
      <IconUsers className="h-8 w-8 shrink-0 text-[color:var(--icfg-forest)]" />
    ),
  },
  {
    title: "Sustainable livelihoods",
    content:
      "Supporting income generation opportunities and sustainable economic activities that are compatible with forest conservation.",
    icon: (
      <IconLivelihood className="h-8 w-8 shrink-0 text-[color:var(--icfg-forest)]" />
    ),
  },
  {
    title: "Cultural respect & preservation",
    content:
      "Recognizing and respecting the cultural heritage, traditional practices, and spiritual connections of forest dwelling communities.",
    icon: (
      <IconLeaf className="h-8 w-8 shrink-0 text-[color:var(--icfg-forest)]" />
    ),
  },
] as const;

const COURSES = [
  {
    name: "Nature and conservation course",
    age: "14 to 17",
    days: "3 days",
    type: "Residential",
    topics: [
      "Culture: Nature–human symbiosis",
      "Education: Forest mapping and plantation techniques",
      "Health: Medicinal plant recognition and usage",
      "Leadership: Power and function of Gram Sabha – participatory democracy",
    ],
  },
  {
    name: "Trainer training course",
    age: "18 and above",
    days: "3 days",
    type: "Residential",
    topics: ["Implementation of Forest Rights Act 2006 and PESA 1996."],
  },
  {
    name: "Organic farming course",
    age: "18 and above",
    days: "7 days",
    type: "Residential course",
    topics: [
      "Basic learning for tribal farmers whose farm inside the forest is recognised under the Forest Rights Act 2006.",
    ],
  },
  {
    name: "Introduction to marketing of non-timber forest products",
    age: "18 and above",
    days: "3 days",
    type: "Residential course",
    topics: [
      "Sustainable harvesting and collective marketing by forest dependent women’s groups.",
    ],
  },
  {
    name: "Climate change and global warming (introductory)",
    age: "14 and above",
    days: "3 days",
    type: "Residential course",
    topics: [] as string[],
  },
  {
    name: "Climate change and global warming (advance)",
    age: "14 and above",
    days: "3 days",
    type: "Residential course",
    topics: [] as string[],
  },
] as const;

const FIELD_YEAR = [
  {
    months: "Mar – May",
    title: "Tendu & mahua",
    body: "Peak NTFP collection. Coordinators support sustainable harvesting, grading, and the first round of collective marketing through women’s SHGs.",
  },
  {
    months: "Jun – Sep",
    title: "Monsoon & patrols",
    body: "Forest patrol routes are revised, fire-line work pauses, and Gram Sabhas review boundaries after rains. Plantation drives in degraded patches.",
  },
  {
    months: "Oct",
    title: "Mahua flowering & festivals",
    body: "Cultural calendar peaks. Programme work slows around Sarhul/Karma rhythms; documentation and community planning take centre stage.",
  },
  {
    months: "Nov – Feb",
    title: "Trainings & claim drives",
    body: "Residential courses (FRA, organic farming, NTFP marketing), Bal Akhra youth assemblies, and SDLC/DLC follow-up for pending CFR claims.",
  },
] as const;

const INDICATORS = [
  {
    value: "~2,500",
    label: "Villages worked with",
    note: "Across roughly 10 districts in Jharkhand and a few in Chhattisgarh & Odisha. Counts since 2008.",
  },
  {
    value: "≈20,000",
    label: "JJBA members on the roll",
    note: "Mass-organisation base. The roster shifts each year; this is the rough count from the last all-state meet.",
  },
  {
    value: "36",
    label: "Field coordinators",
    note: "Plus 16 office staff. We hire and let go in step with grant cycles, so this number moves quarterly.",
  },
  {
    value: "6",
    label: "Residential courses a year",
    note: "Cohort sizes vary 8–22, depending on village availability and harvest dates.",
  },
] as const;

function courseBody(course: (typeof COURSES)[number]): string {
  const meta = `Age group: ${course.age}. ${course.days}. ${course.type}.`;
  if (course.topics.length === 0) {
    return `${meta} Curriculum details are shared with participants on enrolment.`;
  }
  return `${meta} Topics: ${course.topics.join(" ")}`;
}

export default function ProgrammesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(88vh,46rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={PROGRAMMES_HERO_IMAGE}
            alt="Community field programmes and forest landscapes"
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
            className={`relative z-10 flex min-h-[min(88vh,46rem)] w-full flex-col justify-end pb-16 pt-28 ${sectionPad} md:pb-24 md:pt-36`}
          >
            <p
              className={`${instrumentSerif.className} text-[1.2rem] italic tracking-[-0.02em] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] md:text-[1.35rem]`}
            >
              Institute of Community Forest Governance
            </p>
            <h1
              className={`${SatoshiBold.className} mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.05em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[3.5rem] lg:text-[4rem]`}
            >
              Programmes
            </h1>
            <div className="mt-8 max-w-3xl">
              <p
                className={`${playfairDisplay.className} text-[clamp(0.95rem,2.2vw,1.5rem)] leading-[1.45] tracking-[-0.02em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]`}
              >
                “Every living being, be it small or big, animal or human has the
                right to survive on this earth for it is our common home.”
              </p>
            </div>
          </div>
        </section>

        <section
          id="living-beings"
          className={`border-t border-gray-200 bg-gray-100 pb-16 pt-14 md:pb-24 md:pt-20 ${sectionPad}`}
        >
          <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/programms/PCI-India_Womens-SHG.webp"
                alt="Women’s self-help group and community programme work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div className="min-w-0 lg:pl-2">
              <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                Living beings
              </p>
              <h2
                className={`${SatoshiBold.className} mt-3 max-w-xl text-[1.85rem] leading-[1.15] tracking-[-0.04em] text-black md:text-[2.25rem] lg:text-[2.5rem]`}
              >
                A common home for every living being
              </h2>
              <p className="mt-4 max-w-xl font-['Inter'] text-[0.95rem] leading-[1.65rem] text-gray-700">
                Our work is rooted in the belief that every living being—human or
                animal, small or large—has the right to survive on this earth. We
                support forest-dwelling communities, village institutions, and
                residential learning that reflect that conviction.
              </p>
              <ul className="mt-5 max-w-xl list-outside list-disc space-y-1 pl-4 font-['Inter'] text-[0.8125rem] leading-[1.45] text-gray-700 marker:text-black md:text-[0.85rem] md:leading-[1.5]">
                {LIVING_BEINGS_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link
                href="#committees"
                className="icfg-btn-primary mt-8 flex w-full items-center justify-center rounded-2xl px-8 py-3.5 text-center font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.02em]"
              >
                Explore committees &amp; training
              </Link>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-stretch gap-6 md:mt-14 md:flex-row md:items-start md:justify-center md:gap-5 lg:mt-16 lg:gap-6">
            {PRINCIPLE_CARDS.map((card) => (
              <HoverCard
                key={card.title}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        <ProgrammesCommitteesSection
          sectionClassName={`bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        />

        <section
          id="year-in-the-field"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              A year in the field
            </h2>
            <p className="mt-5 max-w-[44rem] font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
              The forest sets the rhythm. Trainings cluster in the cold months,
              boundary walks happen after rains, and a lot of the calendar
              quietly bends around tendu, mahua, and Sarhul.
            </p>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {FIELD_YEAR.map((row) => (
                <li
                  key={row.months}
                  className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:p-7"
                >
                  <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                    {row.months}
                  </p>
                  <h3 className="mt-3 font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.02em] text-black md:text-[1.1rem]">
                    {row.title}
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[0.92rem] leading-[1.65rem] text-gray-700">
                    {row.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="what-we-measure"
          className={`border-t border-gray-200 bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div>
              <h2
                className={`${playfairDisplay.className} text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
              >
                The numbers we are willing to be held to
              </h2>
              <p className="mt-5 font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
                We try to count things a Gram Sabha can also count: claims
                filed, titles received, women in committees, hectares under CFR.
                The rest of the indicators below are honest approximations and
                we revise them when the field disagrees.
              </p>
              <p
                className={`${SatoshiBold.className} mt-10 text-[3.25rem] leading-none tracking-[-0.04em] text-black md:text-[4.25rem]`}
              >
                {INDICATORS[0].value}
              </p>
              <p className="mt-3 font-['Inter'] text-[1rem] font-[600] tracking-[-0.02em] text-black">
                {INDICATORS[0].label}
              </p>
              <p className="mt-2 max-w-[28rem] font-['Inter'] text-[0.9rem] leading-[1.6rem] text-gray-600">
                {INDICATORS[0].note}
              </p>
            </div>
            <dl className="divide-y divide-gray-300/70 border-t border-gray-300/70">
              {INDICATORS.slice(1).map((m) => (
                <div
                  key={m.label}
                  className="grid gap-3 py-6 md:grid-cols-[minmax(8.5rem,10rem)_minmax(0,1fr)] md:gap-10"
                >
                  <dt
                    className={`${SatoshiBold.className} tabular-nums text-[2rem] leading-none tracking-[-0.03em] text-black md:text-[2.4rem]`}
                  >
                    {m.value}
                  </dt>
                  <dd className="md:pt-1">
                    <p className="font-['Inter'] text-[0.95rem] font-[600] tracking-[-0.02em] text-black">
                      {m.label}
                    </p>
                    <p className="mt-1 font-['Inter'] text-[0.88rem] leading-[1.6rem] text-gray-600">
                      {m.note}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="learning-programs"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <h2
            className={`${playfairDisplay.className} text-center text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
          >
            Learning programmes
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
            <p>
              Residential and village-based courses build skills across
              conservation, rights, organic farming, marketing, and climate
              awareness, in the rhythm of village life rather than against it.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:gap-x-20">
            {COURSES.map((course) => (
              <div
                key={course.name}
                className="flex items-start gap-5 md:gap-6"
              >
                <div className="shrink-0 text-[color:var(--icfg-forest)]">
                  <IconCommitmentTraining className="h-10 w-10 md:h-11 md:w-11" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.03em] text-black md:text-[1.1rem]">
                    {course.name}
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                    {courseBody(course)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50 py-14 md:py-20">
          <div className={sectionPad}>
            <h2
              className={`${playfairDisplay.className} text-center text-[1.75rem] text-black md:text-[2.1rem]`}
            >
              Why it matters
            </h2>
            <p className="mx-auto mt-6 max-w-[48rem] text-center font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
              Strong village institutions and grounded training help communities
              defend rights, restore forests, and pass knowledge to the next
              generation—without separating culture from conservation.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href="/donate"
                className="icfg-btn-primary inline-flex rounded-2xl px-8 py-3.5 font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.02em]"
              >
                Donate
              </Link>
              <Link
                href="/#impact"
                className="rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-8 py-3.5 font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.02em] text-black shadow-sm"
              >
                See our impact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
