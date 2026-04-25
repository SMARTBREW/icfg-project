import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/header";
import ReadingProgressBar from "@/components/reading-progress-bar";
import ShareRow from "@/components/share-row";
import SiteFooter from "@/components/site-footer";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
import {
  getAllBlogSlugs,
  getAuthorBio,
  getBlogPost,
  getRelatedPosts,
  type BlogBodyBlock,
  type BlogPost,
} from "@/lib/blog-posts";

const sectionPad = "mx-[2rem] md:mx-[4.5rem] md:px-[8vw]";
const ARTICLE_HERO = "/programms/DSC04758-1-1.webp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article — ICFG" };
  return {
    title: `${post.title} — ICFG`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

function articleBodyBlocks(post: BlogPost): readonly BlogBodyBlock[] {
  if (post.bodyBlocks?.length) return post.bodyBlocks;
  return post.paragraphs.map((text) => ({ type: "paragraph" as const, text }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);
  const authorBio = getAuthorBio(post.author);

  return (
    <>
      <ReadingProgressBar />
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 text-black">
        <article>
          <header className="relative w-full min-h-[min(52vh,28rem)] overflow-hidden border-b border-gray-200">
            <Image
              src={ARTICLE_HERO}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/35 to-black/15"
              aria-hidden
            />
            <div
              className={`relative z-10 flex min-h-[min(52vh,28rem)] w-full flex-col justify-end pb-12 pt-24 ${sectionPad} md:pb-16 md:pt-28`}
            >
              <p
                className={`${instrumentSerif.className} text-[1.05rem] italic tracking-[-0.02em] text-white/90 md:text-[1.15rem]`}
              >
                Blog
              </p>
              <h1
                className={`${SatoshiBold.className} mt-3 max-w-[48rem] text-[1.85rem] leading-[1.15] tracking-[-0.04em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[2.35rem] lg:text-[2.65rem]`}
              >
                {post.title}
              </h1>
              <p className="mt-4 font-['Inter'] text-[0.85rem] text-white/85">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden> · </span>
                <span>{post.readTime}</span>
                {post.author ? (
                  <>
                    <span aria-hidden> · </span>
                    <span>{post.author}</span>
                  </>
                ) : null}
              </p>
            </div>
          </header>

          <div className={`py-12 md:py-16 ${sectionPad}`}>
            <div className="prose prose-gray mx-auto max-w-[40rem]">
              <blockquote
                className={`${playfairDisplay.className} relative border-l-2 border-[color:var(--icfg-leaf)] pb-2 pl-6 pr-2 text-[1.15rem] italic leading-[1.55] text-gray-800 md:text-[1.3rem]`}
              >
                {post.excerpt}
              </blockquote>
              <div className="mt-8 border-b border-gray-200" />
              {post.youtubeId ? (
                <div className="mt-10">
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${post.youtubeId}`}
                      title={post.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 font-['Inter'] text-[0.8rem] text-gray-500">
                    <a
                      href={`https://www.youtube.com/watch?v=${post.youtubeId}`}
                      className="text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                    </a>
                  </p>
                </div>
              ) : null}
              {post.mp4VideoUrl ? (
                <div className="mt-10">
                  <video
                    className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={post.mp4VideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="mt-3 font-['Inter'] text-[0.8rem] text-gray-500">
                    Video from{" "}
                    <a
                      href={post.sourceUrl}
                      className="text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      icfgindia.org
                    </a>
                  </p>
                </div>
              ) : null}
              <div className="mt-10 space-y-6 font-['Inter'] text-[1rem] leading-[1.85rem] text-gray-700">
                {articleBodyBlocks(post).map((block, i) =>
                  block.type === "heading" ? (
                    <h3
                      key={i}
                      className={`${SatoshiBold.className} !mt-10 mb-2 text-[1.05rem] leading-snug tracking-[-0.03em] text-black first:!mt-0 md:text-[1.1rem]`}
                    >
                      {block.text}
                    </h3>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )}
              </div>
              {post.sourceUrl ? (
                <p className="mt-10 font-['Inter'] text-[0.85rem] text-gray-500">
                  Originally published on{" "}
                  <a
                    href={post.sourceUrl}
                    className="text-[color:var(--icfg-forest)] underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    icfgindia.org
                  </a>
                  .
                </p>
              ) : null}
              <ShareRow title={post.title} path={`/blogs/${post.slug}`} />

              {post.author && authorBio ? (
                <aside
                  aria-label="About the author"
                  className="mt-10 flex items-start gap-4 border-t border-gray-200 pt-8"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--icfg-forest)] font-['Inter'] text-[0.85rem] font-[700] text-white md:h-12 md:w-12 md:text-[0.95rem]"
                  >
                    {post.author
                      .split(/\s+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0]?.toUpperCase() ?? "")
                      .join("")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-['Inter'] text-[0.95rem] font-[600] tracking-[-0.02em] text-black md:text-[1rem]">
                      {post.author}
                    </p>
                    {authorBio.role ? (
                      <p className="mt-0.5 font-['Inter'] text-[0.78rem] font-[500] text-gray-500">
                        {authorBio.role}
                      </p>
                    ) : null}
                    <p className="mt-3 font-['Inter'] text-[0.9rem] leading-[1.6rem] text-gray-700">
                      {authorBio.bio}
                    </p>
                  </div>
                </aside>
              ) : null}

              <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-['Inter'] text-[0.85rem] text-gray-600">
                    Value this work?
                  </span>
                  <Link
                    href="/donate"
                    className="icfg-btn-primary inline-flex rounded-2xl px-4 py-2 font-['Inter'] text-[0.8rem] font-[500] tracking-[-0.02em]"
                  >
                    Donate
                  </Link>
                </div>
                <Link
                  href="/blogs"
                  className="font-['Inter'] text-[0.9rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
                >
                  ← All blogs
                </Link>
              </div>
            </div>
          </div>

          {related.length > 0 ? (
            <section
              aria-labelledby="related-heading"
              className={`border-t border-gray-200 bg-white py-14 md:py-20 ${sectionPad}`}
            >
              <div className="mx-auto max-w-6xl">
                <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
                  Keep reading
                </p>
                <h2
                  id="related-heading"
                  className={`${playfairDisplay.className} mt-3 text-[1.5rem] leading-tight text-black md:text-[1.85rem]`}
                >
                  Related stories
                </h2>
                <ul className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blogs/${r.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-gray-50 p-6 transition hover:-translate-y-0.5 hover:border-[color:var(--icfg-leaf)]/40 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-7"
                      >
                        <p className="font-['Inter'] text-[0.78rem] font-[500] uppercase tracking-[0.18em] text-gray-500">
                          <time dateTime={r.date}>{formatDate(r.date)}</time>
                          <span aria-hidden> · </span>
                          <span>{r.readTime}</span>
                        </p>
                        <h3
                          className={`${playfairDisplay.className} mt-4 text-[1.1rem] leading-snug text-black transition-colors group-hover:text-[color:var(--icfg-forest)] md:text-[1.2rem]`}
                        >
                          {r.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 font-['Inter'] text-[0.9rem] leading-[1.55rem] tracking-[-0.01em] text-gray-700">
                          {r.excerpt}
                        </p>
                        <span className="mt-auto pt-5 font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] text-[color:var(--icfg-forest)]">
                          Read story →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
