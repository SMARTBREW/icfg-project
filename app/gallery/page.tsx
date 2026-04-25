import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { GALLERY_ITEMS } from "@/constants/gallery";
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

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";
const GALLERY_HERO = "/about/DSC05008-scaled.webp";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(72vh,40rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={GALLERY_HERO}
            alt="Forest village landscape"
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
            className={`relative z-10 flex min-h-[min(72vh,40rem)] w-full flex-col justify-end pb-14 pt-28 ${sectionPad} md:pb-20 md:pt-32`}
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
            <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {GALLERY_ITEMS.map((item) => (
                <li key={item.src}>
                  <figure className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="px-4 py-3 font-['Inter'] text-[0.85rem] font-[500] tracking-[-0.02em] text-gray-800">
                      {item.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
