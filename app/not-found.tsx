import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-[4.5rem] text-black">
      <h2 className="font-['Inter'] text-4xl font-bold tracking-[-0.06em] text-black">
        404 — Page not found
      </h2>
      <p className="mt-4 font-['Inter'] text-[1rem] tracking-[-0.01em] text-gray-600">
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="icfg-btn-primary mt-10 rounded-2xl px-8 py-3 font-['Inter'] font-[500]"
      >
        Return home
      </Link>
    </div>
  );
}
