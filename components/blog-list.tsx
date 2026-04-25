"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { playfairDisplay, SatoshiBold } from "@/constants";
import {
  BLOG_TOPICS,
  type BlogPost,
  type BlogTopic,
} from "@/lib/blog-posts";

type Filter = "all" | BlogTopic;

type Props = {
  posts: readonly BlogPost[];
};

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function topicLabel(id: BlogTopic): string {
  return BLOG_TOPICS.find((t) => t.id === id)?.label ?? id;
}

export default function BlogList({ posts }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const sorted = useMemo(
    () =>
      [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [posts]
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const visibleTopics = useMemo(() => {
    const present = new Set<BlogTopic>();
    sorted.forEach((p) => p.topics?.forEach((t) => present.add(t)));
    return BLOG_TOPICS.filter((t) => present.has(t.id));
  }, [sorted]);

  const filteredRest = useMemo(() => {
    if (filter === "all") return rest;
    return rest.filter((p) => p.topics?.includes(filter));
  }, [rest, filter]);

  const featuredMatchesFilter =
    filter === "all" || featured?.topics?.includes(filter);

  const chip = (id: Filter, label: string) => {
    const isActive = filter === id;
    return (
      <button
        key={id}
        type="button"
        onClick={() => setFilter(id)}
        aria-pressed={isActive}
        className={`rounded-full px-4 py-2 font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] transition ${
          isActive
            ? "border border-transparent bg-[color:var(--icfg-forest)] text-white shadow-sm"
            : "border border-gray-200 bg-white text-gray-700 hover:border-[color:var(--icfg-leaf)]/50 hover:text-[color:var(--icfg-forest)]"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      {featured && featuredMatchesFilter ? (
        <article className="mt-8 overflow-hidden rounded-[1.5rem] border border-gray-200/80 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          <Link
            href={`/blogs/${featured.slug}`}
            className="group flex h-full flex-col p-7 md:p-10"
          >
            <p className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
              Featured
            </p>
            <h3
              className={`${playfairDisplay.className} mt-3 max-w-3xl text-[1.65rem] leading-tight text-black transition-colors group-hover:text-[color:var(--icfg-forest)] md:text-[2rem] lg:text-[2.25rem]`}
            >
              {featured.title}
            </h3>
            <p className="mt-4 max-w-3xl font-['Inter'] text-[1rem] leading-[1.75rem] tracking-[-0.01em] text-gray-700 md:text-[1.05rem]">
              {featured.excerpt}
            </p>
            <p className="mt-6 font-['Inter'] text-[0.85rem] text-gray-500">
              <time dateTime={featured.date}>
                {dateFmt.format(new Date(featured.date))}
              </time>
              <span aria-hidden> · </span>
              <span>{featured.readTime}</span>
              {featured.author ? (
                <>
                  <span aria-hidden> · </span>
                  <span>{featured.author}</span>
                </>
              ) : null}
            </p>
            {featured.topics?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-['Inter'] text-[0.72rem] font-[500] tracking-[-0.01em] text-gray-700"
                  >
                    {topicLabel(t)}
                  </span>
                ))}
              </div>
            ) : null}
            <span className="mt-7 font-['Inter'] text-[0.9rem] font-[500] tracking-[-0.01em] text-[color:var(--icfg-forest)]">
              Read featured story →
            </span>
          </Link>
        </article>
      ) : null}

      <div
        className="mt-12 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter by topic"
      >
        {chip("all", "All")}
        {visibleTopics.map((t) => chip(t.id, t.label))}
      </div>

      {filteredRest.length === 0 && !featuredMatchesFilter ? (
        <p className="mt-12 font-['Inter'] text-[0.95rem] text-gray-600">
          No stories under this topic yet—try another.
        </p>
      ) : null}

      <ul className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
        {filteredRest.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:border-[color:var(--icfg-leaf)]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:p-7"
            >
              <p className="font-['Inter'] text-[0.78rem] font-[500] uppercase tracking-[0.18em] text-gray-500">
                <time dateTime={post.date}>
                  {dateFmt.format(new Date(post.date))}
                </time>
                <span aria-hidden> · </span>
                <span>{post.readTime}</span>
              </p>
              <h3
                className={`${SatoshiBold.className} mt-3 text-[1.2rem] leading-snug tracking-[-0.03em] text-black transition-colors group-hover:text-[color:var(--icfg-forest)] md:text-[1.3rem]`}
              >
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-4 font-['Inter'] text-[0.92rem] leading-[1.6rem] tracking-[-0.01em] text-gray-700">
                {post.excerpt}
              </p>
              {post.topics?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.topics.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 font-['Inter'] text-[0.7rem] font-[500] tracking-[-0.01em] text-gray-600"
                    >
                      {topicLabel(t)}
                    </span>
                  ))}
                </div>
              ) : null}
              <span className="mt-auto pt-5 font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] text-[color:var(--icfg-forest)]">
                Read article →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
