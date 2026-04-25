import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

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
              Blogs
            </h1>
            <p
              className={`${playfairDisplay.className} mt-6 max-w-2xl text-[clamp(0.95rem,2.2vw,1.35rem)] leading-[1.45] tracking-[-0.02em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]`}
            >
              Short essays from our practice—rights, institutions, and the slow
              work of building trust in forest villages.
            </p>
          </div>
        </section>

        <section className={`py-14 md:py-20 ${sectionPad}`}>
          <div className="mx-auto max-w-[52rem]">
            <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
              Latest
            </p>
            <h2
              className={`${playfairDisplay.className} mt-3 text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
            >
              From the field desk
            </h2>
            <ul className="mt-12 space-y-12">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <article className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
                    <p className="font-['Inter'] text-[0.8rem] text-gray-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden> · </span>
                      <span>{post.readTime}</span>
                    </p>
                    <h3
                      className={`${SatoshiBold.className} mt-3 text-[1.35rem] leading-snug tracking-[-0.03em] text-black md:text-[1.5rem]`}
                    >
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="transition-colors hover:text-[color:var(--icfg-forest)]"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 font-['Inter'] text-[1rem] leading-[1.75rem] text-gray-700">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="mt-4 inline-flex font-['Inter'] text-[0.9rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
                    >
                      Read article
                    </Link>
                  </article>
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
