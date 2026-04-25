import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { instrumentSerif, playfairDisplay, SatoshiBold } from "@/constants";
import {
  getAllBlogSlugs,
  getBlogPost,
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

  return (
    <>
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
              <div
                className={`${playfairDisplay.className} border-b border-gray-200 pb-10 text-[1.15rem] leading-[1.55] text-gray-800 md:text-[1.25rem]`}
              >
                {post.excerpt}
              </div>
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
              <p className="mt-12">
                <Link
                  href="/blogs"
                  className="font-['Inter'] text-[0.9rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
                >
                  ← All blogs
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
