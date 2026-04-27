import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import BlogList from "@/components/blog-list";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blogs — Institute of Community Forest Governance",
  description:
    "Notes and reflections from ICFG on forest rights, community governance, livelihoods, and youth leadership in India’s forest regions.",
  openGraph: {
    title: "Blogs — ICFG",
    description:
      "Articles on Gram Sabha facilitation, SHGs, organic farming, and Bal Akhra.",
  },
};

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";
const BLOGS_HERO = "/about/DSC_0069-1.webp";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <section className="relative w-full min-h-[min(72vh,40rem)] overflow-hidden border-b border-gray-200">
          <Image
            src={BLOGS_HERO}
            alt="Forest hills and community landscape"
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
              Blogs
            </h1>
            <p
              className={`${playfairDisplay.className} mt-6 max-w-2xl text-[clamp(0.95rem,2.2vw,1.35rem)] leading-[1.45] tracking-[-0.02em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]`}
            >
              Field reports, short essays, and notes from Gram Sabha visits.
              Mostly written first in Hindi, then edited into English.
            </p>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`}>
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <h2
                className={`${playfairDisplay.className} text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
              >
                Stories, reports, and reflections
              </h2>
              <p className="font-['Inter'] text-[0.85rem] text-gray-600 sm:max-w-[20rem] sm:text-right">
                Pick a topic, or just scroll the latest first.
              </p>
            </div>

            <BlogList posts={BLOG_POSTS} />

            <div className="mt-16 flex flex-col items-start gap-4 border-t border-gray-200 pt-10 md:flex-row md:items-center md:justify-between md:gap-10">
              <p className="max-w-[28rem] font-['Inter'] text-[0.92rem] leading-[1.65rem] text-gray-600">
                Most of these stories were written on the back of a long bus
                ride. If they’re useful to you, the easiest way to keep them
                coming is to chip in for the bus.
              </p>
              <Link
                href="/donate"
                className="icfg-btn-primary shrink-0 inline-flex rounded-2xl px-6 py-3.5 font-['Inter'] text-[0.9rem] font-[500] tracking-[-0.02em]"
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
