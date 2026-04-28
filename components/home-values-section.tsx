"use client";

import { motion } from "framer-motion";

import {
  IconCapacityBuilding,
  IconCommunityEmpowerment,
  IconLeaf,
  IconScale,
} from "@/components/icfg-icons";
import SectionHeading from "@/components/section-heading";
import { playfairDisplay } from "@/constants";
import { VALUE_PILLARS } from "@/constants/icfg";

const PILLAR_ICONS = {
  community: IconCommunityEmpowerment,
  leaf: IconLeaf,
  scale: IconScale,
  capacity: IconCapacityBuilding,
} as const;

export default function HomeValuesSection() {
  return (
    <section id="values" className="w-full bg-gray-50 py-12 text-black md:py-16">
      <SectionHeading title="Our values" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-20">
        {VALUE_PILLARS.map((pillar, idx) => {
          const Icon = PILLAR_ICONS[pillar.icon];
          const toneClass =
            pillar.iconTone === "gold" ? "text-[#b8973a]" : "text-[#6b2a32]";
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
              <motion.h3
                className={`${playfairDisplay.className} text-[1.2rem] leading-snug text-black md:text-[1.35rem]`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                {pillar.title}
              </motion.h3>
              <motion.p
                className="font-['Inter'] text-[0.92rem] leading-[1.65rem] tracking-[-0.01em] text-gray-700 md:text-[0.95rem]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.08 + 0.06 }}
              >
                {pillar.body}
              </motion.p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
