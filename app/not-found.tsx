import Link from "next/link";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center bg-gray-50 px-6 py-24 text-black sm:px-[4.5rem]"
      >
        <p className="font-['Inter'] text-[0.85rem] font-[600] uppercase tracking-[0.22em] text-[color:var(--icfg-forest)]">
          404
        </p>
        <h1 className="mt-4 font-['Inter'] text-3xl font-bold tracking-[-0.05em] text-black md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-center font-['Inter'] text-[1rem] leading-[1.7rem] tracking-[-0.01em] text-gray-600">
          The page you requested does not exist. It may have been moved or the
          link may be mistyped.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="icfg-btn-primary rounded-2xl px-8 py-3 text-center font-['Inter'] font-[500]"
          >
            Return home
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-8 py-3 text-center font-['Inter'] font-[500] text-black shadow-sm transition hover:border-[color:var(--icfg-leaf)]/60"
          >
            Contact us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
