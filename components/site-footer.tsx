import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/programmes", label: "Stories" },
  { href: "/blogs", label: "Blogs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/return-policy", label: "Return policy" },
  {
    href: "https://icfgindia.org/refund-cancellation/",
    label: "Refund & cancellation",
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-black text-white">
      <div className="mx-[2rem] max-w-[90rem] py-14 md:mx-auto md:px-[4.5rem] md:py-16 lg:px-[8vw]">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12 lg:pb-16">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex w-fit max-w-full flex-col gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--icfg-lime)]"
            >
              <span className="footer-logo-panel">
                <Image
                  src="/hero/icfg-logo.webp"
                  alt="Institute of Community Forest Governance"
                  width={400}
                  height={90}
                  className="h-14 w-auto object-contain object-left md:h-[4.75rem] lg:h-[5.5rem]"
                />
              </span>
            </Link>
            <p className="max-w-[22rem] font-['Inter'] text-[0.95rem] leading-[1.7rem] tracking-[-0.01em] text-gray-400">
              Standing with tribal and forest communities across India for
              rights, ecology, and dignified livelihoods.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-6">
            <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.2em] text-gray-500">
              Explore
            </p>
            <nav aria-label="Footer">
              <ul className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Inter'] text-[0.95rem] tracking-[-0.01em] text-gray-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col justify-start gap-4 border-t border-white/10 pt-10 lg:col-span-3 lg:col-start-10 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-10">
            <p className="font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.2em] text-gray-500">
              This quarter
            </p>
            <p className="font-['Inter'] text-[0.9rem] leading-[1.6rem] text-gray-400">
              Donations are going towards travel and printing for pending CFR
              hearings in Saraikela-Kharsawan, and stipends for two new
              paralegals being trained this season.
            </p>
            <Link
              href="/donate"
              className="icfg-btn-primary mt-1 inline-flex w-fit items-center justify-center rounded-2xl px-6 py-3 font-['Inter'] text-[0.9rem] font-[600] tracking-[-0.01em] text-white"
            >
              Donate
            </Link>
            <p className="mt-2 font-['Inter'] text-[0.75rem] leading-[1.4rem] text-gray-500">
              Office runs lighter from late June to August. Email replies may
              take a couple of weeks during monsoon.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-['Inter'] text-[0.8rem] tracking-[-0.01em] text-gray-500 underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-['Inter'] text-[0.8rem] tracking-[-0.01em] text-gray-500">
              © {new Date().getFullYear()} Institute of Community Forest
              Governance. All rights reserved.
            </p>
            <p className="font-['Inter'] text-[0.8rem] tracking-[-0.01em] text-gray-500">
              Registered non-profit · India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
