import type { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";

import GalleryGrid from "@/components/gallery-grid";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { GALLERY_ITEMS } from "@/constants/gallery";
import { sectionPad } from "@/constants/layout";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";

export const metadata: Metadata = {
  title: "Gallery — Institute of Community Forest Governance",
  description:
    "Photographs from ICFG’s field work: community forest governance, women’s cooperatives, organic farming, and youth programmes across India.",
  openGraph: {
    title: "Gallery — ICFG",
    description:
      "Moments from villages, forests, and training with tribal and forest communities.",
  },
};

const GALLERY_HERO = "/all/thumbnail.jpeg";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(88vh,46rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={GALLERY_HERO}
            alt="Forest village landscape"
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
              className={`${SatoshiBold.className} mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.05em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[3.25rem] lg:text-[3.75rem]`}
            >
              Gallery
            </h1>
            <p
              className={`${playfairDisplay.className} mt-6 max-w-2xl text-[clamp(0.95rem,2.2vw,1.35rem)] leading-[1.45] tracking-[-0.02em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]`}
            >
              Scenes from the field—community institutions, restoration, and
              everyday life in forest landscapes we are privileged to work beside.
            </p>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`}>
          <div className="mx-auto max-w-[90rem]">
            <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
              Field album
            </p>
            <h2
              className={`${playfairDisplay.className} mt-3 max-w-2xl text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              People, forests, and the work between them
            </h2>
            <GalleryGrid items={GALLERY_ITEMS} />
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
              <p className="text-center font-['Inter'] text-[0.9rem] text-gray-600 sm:text-left">
                Help ICFG keep programmes going in the field.
              </p>
              <Link
                href="/donate"
                className="icfg-btn-primary inline-flex rounded-2xl px-6 py-3.5 font-['Inter'] text-[0.9rem] font-[500] tracking-[-0.02em]"
              >
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
