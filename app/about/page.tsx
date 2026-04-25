import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  IconCommitmentResidential,
  IconCommitmentShg,
  IconCommitmentTraining,
  IconCommitmentYouth,
  IconLeaf,
  IconSprout,
  IconUsers,
} from "@/components/icfg-icons";
import HoverCard from "@/components/hover-card";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
import { HERO_IMAGE } from "@/constants/icfg";

export const metadata: Metadata = {
  title: "About us — Institute of Community Forest Governance",
  description:
    "Learn about ICFG: our origins, how we work with forest communities in India, and our commitment to rights, ecology, and transparent field practice.",
  openGraph: {
    title: "About us — ICFG",
    description:
      "Who we are and how we support tribal and forest communities across India.",
  },
};

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";

const MILESTONES = [
  {
    year: "2006",
    title: "ICFG founded as a trust",
    body: "Set up by leaders of the Jharkhand Jangal Bachao Andolan (JJBA) to give the forest rights movement an institutional anchor.",
  },
  {
    year: "2006",
    title: "Forest Rights Act enacted",
    body: "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act becomes law—central to ICFG’s field work.",
  },
  {
    year: "2008",
    title: "FRA Rules notified",
    body: "Rules under the Act open the door for Gram Sabha-led claims; ICFG begins facilitation in early districts.",
  },
  {
    year: "2012",
    title: "FRA Rules amended",
    body: "Amendments strengthen Gram Sabha primacy and CFR procedures—ICFG re-trains field coordinators on the new processes.",
  },
  {
    year: "Today",
    title: "Roughly 10 districts, give or take",
    body: "About 36 field coordinators on the road in any given quarter, working alongside JJBA’s ~20,000 members across an estimated 2,500 villages reached since 2008.",
  },
] as const;

const CFR_STEPS = [
  {
    n: "1",
    title: "Gram Sabha resolution",
    body: "The village assembly meets, resolves to claim Community Forest Rights, and forms a Forest Rights Committee with women and youth represented.",
  },
  {
    n: "2",
    title: "Boundary mapping & evidence",
    body: "Traditional boundaries are walked, sketched, and documented—oral histories, old records, and photographs gathered with elders.",
  },
  {
    n: "3",
    title: "Claim form & filing",
    body: "Form B (Community Rights) is prepared with the FRC, approved by the Gram Sabha, and submitted to the Sub-Divisional Level Committee (SDLC).",
  },
  {
    n: "4",
    title: "SDLC & DLC review",
    body: "Officials verify the claim. ICFG accompanies villagers to hearings and helps respond to queries; many claims need persistent follow-up.",
  },
  {
    n: "5",
    title: "Title and management plan",
    body: "Once the title is granted, the Gram Sabha drafts forest management rules—patrols, harvesting calendars, dispute resolution—and registers a CFG committee.",
  },
] as const;

type Founder = {
  name: string;
  role: string;
  body: string;
  initials: string;
  honorific?: string;
};

const FOUNDERS: readonly Founder[] = [
  {
    name: "Dr. Ram Dayal Munda",
    honorific: "Padmashri",
    role: "Founder trustee · 1939–2011",
    body: "Linguist and scholar of Adivasi society, former Vice-Chancellor of Ranchi University, and a steady voice in the long argument for Adivasi cultural and political rights in Jharkhand.",
    initials: "RDM",
  },
  {
    name: "Mr. Prem Prakash Verma",
    role: "Founder trustee",
    body: "Came in from decades of social work in central India. Did the unglamorous work of turning the JJBA’s field demands into a registered trust that could file claims, sign agreements, and hold an audit.",
    initials: "PPV",
  },
  {
    name: "Dr. Alex Ekka",
    role: "Founder trustee",
    body: "Sociologist who has researched Adivasi land and forest tenure for years. Keeps the trust honest about evidence — where data exists, where it doesn’t, and what we can fairly claim.",
    initials: "AE",
  },
  {
    name: "Samar (Sanjay) Bosu Mullick",
    role: "Founder trustee",
    body: "Long-time activist and writer with the Jharkhand Jangal Bachao Andolan. The reason ICFG’s office and the movement’s villages still talk to each other in the same language.",
    initials: "SBM",
  },
];

const COMMITMENT_BLOCKS = [
  {
    title: "Training & collaboration",
    icon: IconCommitmentTraining,
    body: "Helping the Gram Sabha to form Community Forest Governance Committee and organize training of its members for successful completion of forest management.",
  },
  {
    title: "SHGs & sustainability",
    icon: IconCommitmentShg,
    body: "Supporting the Gram Sabha for the formation of SHGs and Producers Groups for women and men with a view to empower them for sustainable harvesting and marketing of minor forest produce as well as produce of organic farming on forest land.",
  },
  {
    title: "Youth guardians",
    icon: IconCommitmentYouth,
    body: "Formation of youth groups as the defenders of forest biodiversity and regenerators of plant species, and providing them with theoretical and technical knowledge through a regular and organized curriculum.",
  },
  {
    title: "Residential training centers",
    icon: IconCommitmentResidential,
    body: "Through the establishment of these residential training centers, we aim to create a transformative impact by fostering community empowerment, promoting sustainable practices, and nurturing the next generation of environmental stewards. Together, we can build a future where communities thrive, forests flourish, and biodiversity thrives.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(88vh,46rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={HERO_IMAGE}
            alt="Forest landscape central to community life and culture"
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
              About us
            </h1>
            <div className="mt-8 w-full min-w-0 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
              <p
                className={`${playfairDisplay.className} w-max max-w-none whitespace-nowrap text-[clamp(0.95rem,2.8vw,1.85rem)] leading-[1.35] tracking-[-0.02em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]`}
              >
                “Forest is our culture; nobody can be her proprietor.”
              </p>
            </div>
          </div>
        </section>

        <section
          id="history"
          className={`border-t border-gray-200 bg-gray-50 pb-16 pt-14 md:pb-24 md:pt-20 ${sectionPad}`}
        >
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:gap-16">
            <div className="min-w-0">
              <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                Our history
              </p>
              <h2
                className={`${playfairDisplay.className} mt-3 max-w-[44rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
              >
                Founded as a trust in 2006, rooted in Jharkhand’s forest rights
                movement
              </h2>
              <div className="mt-8 max-w-[52rem] space-y-5 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700 lg:max-w-none">
                <p>
                  The Institute of Community Forest Governance was formed as a
                  trust by some eminent personalities of Jharkhand, such as late
                  Padmashri{" "}
                  <strong className="font-[600] text-black">
                    Dr. Ram Dayal Munda
                  </strong>
                  , eminent social worker{" "}
                  <strong className="font-[600] text-black">
                    Mr. Prem Prakash Verma
                  </strong>
                  , <strong className="font-[600] text-black">Dr. Alex Ekka</strong>{" "}
                  and{" "}
                  <strong className="font-[600] text-black">
                    Samar (Sanjay) Bosu Mullick
                  </strong>{" "}
                  in <strong className="font-[600] text-black">2006</strong> in
                  response to the demand of providing an alternative to the
                  prevailing self-destructive forest policy of the government.
                  These individuals were leading the forest rights movement in
                  Jharkhand under the banner of the{" "}
                  <strong className="font-[600] text-black">
                    Jharkhand Jangal Bachao Andolan
                  </strong>
                  , which is a mass organization.
                </p>
                <p>
                  The ICFG has emerged as a response to the realization that with
                  the growth of the movement an institution would be required to
                  support the movement ideologically, intellectually and
                  technically, which would be focusing exclusively on the best
                  interests of the forest dwelling peoples. ICFG has been formed on
                  the basis of the collective decision of the{" "}
                  <strong className="font-[600] text-black">JJBA</strong>{" "}
                  members.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:mx-0 lg:max-w-none lg:sticky lg:top-28 aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/about/DSC_0069-1.webp"
                alt="Forest community landscape reflecting ICFG’s roots in Jharkhand"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col items-stretch gap-6 md:mt-14 md:flex-row md:items-start md:justify-center md:gap-5 lg:mt-16 lg:gap-6">
            <HoverCard
              title="Early years"
              content="Closing the gap between forest rights law and life on the ground."
              icon={
                <IconLeaf className="h-8 w-8 shrink-0 text-[color:var(--icfg-forest)]" />
              }
            />
            <HoverCard
              title="Deepening practice"
              content="Lasting ties with communities and allies—with consent at the centre."
              icon={
                <IconUsers className="h-8 w-8 shrink-0 text-[color:var(--icfg-forest)]" />
              }
            />
            <HoverCard
              title="Today"
              content="Field programmes and advocacy shaped by what communities prioritise."
              icon={
                <IconSprout className="h-8 w-8 shrink-0 text-[color:var(--icfg-forest)]" />
              }
            />
          </div>
        </section>

        <section
          id="people-movement"
          className={`bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <h2
                className={`${playfairDisplay.className} text-[1.75rem] text-black md:text-[2.1rem]`}
              >
                Who we are
              </h2>
              <div className="mt-5 space-y-4 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                <p>
                  Presently, ICFG has{" "}
                  <strong className="font-[600] text-black">
                    36 Field Coordinators
                  </strong>{" "}
                  and{" "}
                  <strong className="font-[600] text-black">
                    16 office staff
                  </strong>
                  . The number keeps changing according to the availability of
                  funds. Besides, it has a large number of volunteers in all the{" "}
                  <strong className="font-[600] text-black">
                    10 districts
                  </strong>{" "}
                  where ICFG is currently active. The team is a mix of forest
                  community members, paralegals, researchers, and former
                  movement organisers — most of them based in the districts
                  they work in.
                </p>
              </div>
            </div>
            <div>
              <h2
                className={`${playfairDisplay.className} text-[1.75rem] text-black md:text-[2.1rem]`}
              >
                ICFG and JJBA
              </h2>
              <p className="mt-5 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                ICFG is the intellectual wing of the Jharkhand Save the Forest
                Movement (
                <strong className="font-[600] text-black">
                  Jharkhand Jangal Bachao Andolan
                </strong>
                ). JJBA covered the whole of Jharkhand to mobilize the forest
                dwelling people of the state for the framing of the{" "}
                <strong className="font-[600] text-black">
                  Forest Rights Act 2006
                </strong>{" "}
                and its{" "}
                <strong className="font-[600] text-black">
                  Rules of 2008
                </strong>{" "}
                and the{" "}
                <strong className="font-[600] text-black">
                  Amended Rules of 2012
                </strong>
                . Realizing the need of further mobilization of the people to
                prepare and submit their forest rights claims, it formed ICFG in{" "}
                <strong className="font-[600] text-black">2006</strong>. Since
                then JJBA has been active in the districts and potential villages
                for claiming{" "}
                <strong className="font-[600] text-black">
                  Community Rights
                </strong>{" "}
                over the forests.
              </p>
            </div>
            <div className="border-t border-gray-200/90 pt-10 lg:col-span-2">
              <h2
                className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] text-black md:text-[2.1rem]`}
              >
                Claims, communities, and scale
              </h2>
              <div className="mt-5 max-w-[52rem] space-y-4 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                <p>
                  ICFG has been holding hands of the villagers to prepare and
                  submit their claims, both{" "}
                  <strong className="font-[600] text-black">
                    Community Forest Rights (CFR)
                  </strong>{" "}
                  as well as individual family rights of farming forest land
                  called{" "}
                  <strong className="font-[600] text-black">
                    Individual Forest Rights (IFR)
                  </strong>
                  . Thus, the area of intervention keeps changing. Presently,
                  JJBA has more than{" "}
                  <strong className="font-[600] text-black">
                    20,000 active members
                  </strong>{" "}
                  and ICFG is active in{" "}
                  <strong className="font-[600] text-black">
                    2,500 odd villages
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="commitments"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <h2
            className={`${playfairDisplay.className} text-center text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
          >
            Our commitment
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
            <p>
              The immediate objective of the organization is to make forest
              dwelling communities aware of their rights and duties as enshrined
              in the{" "}
              <strong className="font-[600] text-black">
                Forest Rights Act, 2006
              </strong>{" "}
              and its{" "}
              <strong className="font-[600] text-black">Rules of 2008</strong>{" "}
              and the{" "}
              <strong className="font-[600] text-black">
                Amended Rules of 2012
              </strong>
              , as well as the{" "}
              <strong className="font-[600] text-black">PESA Act of 1996</strong>{" "}
              and the{" "}
              <strong className="font-[600] text-black">
                Biodiversity Act of 2002
              </strong>
              .
            </p>
            <p>
              Besides, the objective of the organization is to engage with the
              State as well as Central Governments for the smooth and unhindered
              implementation of these Acts and Rules at the earliest of their
              convenience.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:gap-x-20">
            {COMMITMENT_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="flex items-start gap-5 md:gap-6"
                >
                  <div className="shrink-0 text-[color:var(--icfg-forest)]">
                    <Icon className="h-10 w-10 md:h-11 md:w-11" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.03em] text-black md:text-[1.1rem]">
                      {block.title}
                    </h3>
                    <p className="mt-3 font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                      {block.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="where-we-work"
          className={`border-t border-gray-200 bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <h2
            className={`${playfairDisplay.className} text-center text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
          >
            Where we work
          </h2>
          <div className="mx-auto w-full max-w-6xl">
            <div className="mt-8 space-y-5 text-center font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
              <p>
                <strong className="font-[600] text-black">
                  India’s forest landscapes—and the communities who steward
                  them.
                </strong>{" "}
                Our programmes focus on regions where scheduled tribes and other
                traditional forest dwellers hold customary ties to land and
                resources—often at the edges of protected areas, production
                forests, and contested boundaries. We travel to hearings, train
                facilitators in multiple languages, and adapt tools to local
                institutions rather than imposing a single blueprint.
              </p>
              <p>
                Specific districts and partners evolve with community invitation;
                what stays constant is{" "}
                <strong className="font-[600] text-black">
                  respect for the forest as culture and home
                </strong>
                , not only as carbon or timber on a balance sheet.
              </p>
              <p className="font-['Inter'] text-[0.95rem] text-gray-600">
                See programme highlights and numbers on our{" "}
                <Link
                  href="/#impact"
                  className="font-[500] text-[color:var(--icfg-forest)] underline decoration-[color:var(--icfg-leaf)]/40 underline-offset-4 hover:decoration-[color:var(--icfg-leaf)]"
                >
                  Impact
                </Link>{" "}
                section.
              </p>
            </div>
            <div className="relative mt-14 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:mt-16 md:aspect-[5/2]">
              <Image
                src="/about/DSC05008-scaled.webp"
                alt="Field context in the forest landscapes where ICFG works with communities"
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section
          id="founders"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className={`${playfairDisplay.className} max-w-[44rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Founder trustees
            </h2>
            <p className="mt-5 max-w-[44rem] font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
              ICFG was set up in 2006 by people who had already spent two
              decades inside the Jharkhand forest rights movement. Some are no
              longer with us; the trust still works in their direction.
            </p>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FOUNDERS.map((p) => (
                <li
                  key={p.name}
                  className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:p-7"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--icfg-forest)] font-['Inter'] text-[0.95rem] font-[600] tracking-[0.02em] text-white"
                  >
                    {p.initials}
                  </span>
                  {p.honorific ? (
                    <p className="mt-4 font-['Inter'] text-[0.72rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                      {p.honorific}
                    </p>
                  ) : null}
                  <h3
                    className={`${p.honorific ? "mt-1" : "mt-4"} font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.02em] text-black md:text-[1.1rem]`}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-1 font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] text-gray-500">
                    {p.role}
                  </p>
                  <p className="mt-4 font-['Inter'] text-[0.92rem] leading-[1.65rem] text-gray-700">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-['Inter'] text-[0.85rem] leading-[1.6rem] text-gray-500">
              The current board includes new members from across the field
              network. The first rule, then and now, is that the Gram Sabha
              decides — not Ranchi.
            </p>
          </div>
        </section>

        <section
          id="milestones"
          className={`border-t border-gray-200 bg-gray-50 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-5xl">
            <h2
              className={`${playfairDisplay.className} max-w-[40rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Milestones along the way
            </h2>
            <p className="mt-4 max-w-[40rem] font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-600">
              The dates that matter to ICFG are mostly statutory — when the law
              changed, when a rule was rewritten, when a registration came
              through. The villages have their own calendar.
            </p>
            <ol className="relative mt-12 border-l-2 border-[color:var(--icfg-leaf)]/35 pl-6 md:pl-10">
              {MILESTONES.map((m) => (
                <li
                  key={`${m.year}-${m.title}`}
                  className="relative mb-10 last:mb-0"
                >
                  <span
                    className="absolute -left-[2.05rem] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[color:var(--icfg-forest)] shadow-[0_0_0_3px_rgba(46,90,49,0.18)] md:-left-[2.55rem]"
                    aria-hidden
                  />
                  <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                    {m.year}
                  </p>
                  <h3 className="mt-2 font-['Inter'] text-[1.05rem] font-[600] tracking-[-0.02em] text-black md:text-[1.15rem]">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-[40rem] font-['Inter'] text-[0.95rem] leading-[1.7rem] text-gray-700">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="how-cfr-works"
          className={`border-t border-gray-200 bg-gray-100 py-14 md:py-20 ${sectionPad}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className={`${playfairDisplay.className} mx-auto max-w-[44rem] text-center text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              Filing a CFR claim, step by step
            </h2>
            <p className="mx-auto mt-5 max-w-[40rem] text-center font-['Inter'] text-[0.98rem] leading-[1.75rem] text-gray-700">
              The Forest Rights Act lays out the procedure. The reality is more
              meetings, more paperwork, and more waiting than any flowchart
              suggests. This is the path we walk alongside a village.
            </p>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {CFR_STEPS.map((s) => (
                <li
                  key={s.n}
                  className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--icfg-forest)] font-['Inter'] text-[0.95rem] font-[600] text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-['Inter'] text-[1rem] font-[600] tracking-[-0.02em] text-black md:text-[1.05rem]">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[0.92rem] leading-[1.65rem] text-gray-700">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50 py-14 md:py-20">
          <div className={sectionPad}>
            <div className="mx-auto max-w-3xl">
              <h2
                className={`${playfairDisplay.className} text-[1.6rem] leading-tight text-black md:text-[1.95rem]`}
              >
                Why this exists
              </h2>
              <div className="mt-6 space-y-5 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                <p>
                  Forest land in India sits inside a tangle of laws, agencies,
                  and competing claims. The communities who have lived in those
                  forests for generations end up arguing for what was already
                  theirs — usually with the lightest paperwork in the room.
                </p>
                <p>
                  ICFG exists to even out that paperwork: file claims, train
                  the people who file them, document the cases that fall apart
                  so the next ones don’t. None of this is fast work.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/donate"
                  className="icfg-btn-primary inline-flex rounded-2xl px-7 py-3.5 font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.02em]"
                >
                  Donate
                </Link>
                <Link
                  href="/blogs"
                  className="font-['Inter'] text-[0.95rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
                >
                  Read the field stories →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
