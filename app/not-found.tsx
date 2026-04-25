import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-black sm:px-[4.5rem]">
      <h2 className="font-['Inter'] text-4xl font-bold tracking-[-0.06em] text-black">
        404 — Page not found
      </h2>
      <p className="mt-4 text-center font-['Inter'] text-[1rem] tracking-[-0.01em] text-gray-600">
        The page you requested does not exist.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/donate"
          className="icfg-btn-primary rounded-2xl px-8 py-3 text-center font-['Inter'] font-[500]"
        >
          Donate
        </Link>
        <Link
          href="/"
          className="rounded-2xl border border-[color:var(--icfg-leaf)]/35 bg-white px-8 py-3 text-center font-['Inter'] font-[500] text-black shadow-sm"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
