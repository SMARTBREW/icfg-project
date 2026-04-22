import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import HoverCard from "@/components/hover-card";
import {
  IconCommitmentTraining,
  IconLeaf,
  IconLivelihood,
  IconUsers,
} from "@/components/icfg-icons";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
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

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";

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
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(88vh,46rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={PROGRAMMES_HERO_IMAGE}
            alt="Community field programmes and forest landscapes"
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
          className={`border-t border-gray-200 bg-gray-50 pb-16 pt-14 md:pb-24 md:pt-20 ${sectionPad}`}
        >
          <div className="grid grid-cols-1 items-start gap-10 lg:items-center lg:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] xl:gap-16">
            <div className="min-w-0 lg:pr-4">
              <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                Living beings
              </p>
              <h2
                className={`${playfairDisplay.className} mt-3 max-w-[44rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
              >
                A common home for every living being
              </h2>
              <div className="mt-8 max-w-[40rem] space-y-5 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                <p>
                  Our work is rooted in the belief that every living being—human
                  or animal, small or large—has the right to survive on this
                  earth. That conviction shapes how we support forest-dwelling
                  communities, organise village institutions, and run residential
                  learning programmes.
                </p>
                <p>
                  The sections below set out{" "}
                  <strong className="font-[600] text-black">
                    our principles
                  </strong>
                  , the{" "}
                  <strong className="font-[600] text-black">
                    committees and groups
                  </strong>{" "}
                  we help communities form, and the{" "}
                  <strong className="font-[600] text-black">
                    training courses
                  </strong>{" "}
                  we offer in the field and at our centres.
                </p>
              </div>
            </div>
            <div className="relative mx-auto h-[22.5rem] w-full max-w-[36rem] overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:mx-0 lg:max-w-full lg:justify-self-end">
              <Image
                src="/programms/PCI-India_Womens-SHG.webp"
                alt="Women’s self-help group and community programme work"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover object-[center_40%]"
              />
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

        <section
          id="committees"
          className={`bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="max-w-[52rem]">
            <h2
              className={`${playfairDisplay.className} text-[1.75rem] text-black md:text-[2.1rem]`}
            >
              Our committees
            </h2>
            <div className="mt-8 space-y-10 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                <article>
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.03em] text-black md:text-[1.1rem]">
                    Community Forest Governance committee (CFG)
                  </h3>
                  <p className="mt-3">
                    It is responsible for the overall supervision of the tasks of
                    protection, regeneration and management of the forest and
                    forest biodiversity including the animal life. Usually, it
                    has{" "}
                    <strong className="font-[600] text-black">
                      20 members
                    </strong>{" "}
                    with equal number of men and women. It develops a collective
                    leadership for mobilisation of the villagers and their
                    capacity building for forest conservation. It initiates the
                    formation of all our other committees—our Women’s Cooperative,
                    our Farmer’s group &amp; our Youth Assembly (Bal Akhra).
                  </p>
                </article>
                <article>
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.03em] text-black md:text-[1.1rem]">
                    Forest dependent women’s Self Help Group (SHG)
                  </h3>
                  <p className="mt-3">
                    Our Women’s Cooperative is formed to motivate women for
                    sustainable harvesting and collective marketing of forest
                    produces. In every village several Self-Help Groups are
                    formed and together they form the cooperative. ICFG helps them
                    to be in touch with the bigger markets outside the
                    inter-village ones. Besides they are also connected to the
                    government agencies so that their products can be sold at the
                    Minimum Support Price set by the state government. Programmes
                    are also taken up for their capacity building.
                  </p>
                </article>
                <article>
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.03em] text-black md:text-[1.1rem]">
                    Organic Farmers’ Group (OFG)
                  </h3>
                  <p className="mt-3">
                    Farmers’ groups are formed to promote organic farming
                    practices, enhancing sustainability and productivity. ICFG
                    organizes village-based training and workshops to disseminate
                    knowledge and techniques. For advanced training, selected
                    farmers are brought to our training and demonstration centre
                    for comprehensive residential courses. This hands-on approach
                    ensures farmers gain practical experience and in-depth
                    understanding. Through these efforts, we aim to cultivate a
                    network of proficient organic farmers dedicated to sustainable
                    agriculture.
                  </p>
                </article>
                <article>
                  <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.03em] text-black md:text-[1.1rem]">
                    Youth Assembly (Bal Akhra)
                  </h3>
                  <p className="mt-3">
                    Bal Akhra (Youth Assembly) consists of children in the age
                    group of{" "}
                    <strong className="font-[600] text-black">14 to 17</strong>{" "}
                    years. They act as the stewards of nature. Every year they
                    prepare plant nurseries, make seed balls and plant trees in the
                    degraded parts of the forestland in the village. They are also
                    trained to fight forest fire. ICFG organises workshops for
                    their skill development. Learning classes are held to provide
                    knowledge on (i) collective leadership, (ii) education on
                    traditional dance and music—folklore and festivals, (iii)
                    knowledge of medicinal plants and (iv) tribal culture of
                    symbiotic relationship with nature. They are also motivated
                    to become future leaders of the village.
                  </p>
                </article>
            </div>
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
              awareness—aligned with how communities actually live and work in
              forest landscapes.
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
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#impact"
                className="icfg-btn-primary inline-flex rounded-2xl px-8 py-3.5 font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.02em]"
              >
                See our impact
              </Link>
              <Link
                href="/#contact"
                className="rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-8 py-3.5 font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.02em] text-black shadow-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
