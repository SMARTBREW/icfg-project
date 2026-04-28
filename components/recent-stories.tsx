import Link from "next/link";

import { playfairDisplay } from "@/constants";
import { sectionPad } from "@/constants/layout";
import { getSortedBlogPosts } from "@/lib/blog-posts";

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function RecentStories() {
  const posts = getSortedBlogPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      id="recent-stories"
      className="w-full bg-gray-50 py-12 text-black md:py-16"
    >
        <div className={sectionPad}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h2
            className={`${playfairDisplay.className} max-w-[34rem] text-[1.75rem] leading-tight text-black md:text-[2.1rem]`}
          >
            Recent stories
          </h2>
          <Link
            href="/blogs"
            className="font-['Inter'] text-[0.9rem] font-[500] text-[color:var(--icfg-forest)] underline-offset-4 hover:underline"
          >
            All stories →
          </Link>
        </div>

        <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200 md:mt-10">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blogs/${p.slug}`}
                className="group flex flex-col gap-3 py-6 transition md:flex-row md:items-baseline md:gap-10 md:py-7"
              >
                <p className="shrink-0 font-['Inter'] text-[0.78rem] font-[500] uppercase tracking-[0.16em] text-gray-500 md:w-[10rem]">
                  <time dateTime={p.date}>{dateFmt.format(new Date(p.date))}</time>
                  <span aria-hidden> · </span>
                  <span>{p.readTime}</span>
                </p>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`${playfairDisplay.className} text-[1.2rem] leading-snug text-black transition-colors group-hover:text-[color:var(--icfg-forest)] md:text-[1.35rem]`}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-['Inter'] text-[0.92rem] leading-[1.6rem] text-gray-600 md:line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>
                <span className="shrink-0 self-start font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] text-[color:var(--icfg-forest)] md:self-baseline">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
