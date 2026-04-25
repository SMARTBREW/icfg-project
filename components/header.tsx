import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/programmes", label: "Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-gray-50/95 backdrop-blur-md">
      <div className="mx-[2rem] flex max-w-[90rem] flex-wrap items-center justify-between gap-6 py-4 md:mx-[4.5rem] md:px-[8vw]">
        <Link
          href="/"
          className="flex max-w-[min(100%,18rem)] items-center md:max-w-[22rem]"
        >
          <Image
            src="/hero/icfg-logo.webp"
            alt="Institute of Community Forest Governance"
            width={320}
            height={72}
            className="icfg-header-logo h-11 w-auto object-contain object-left md:h-[3.25rem]"
            priority
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden md:flex md:flex-1 md:flex-wrap md:items-center md:justify-end md:gap-5 lg:gap-8"
        >
          <ul className="flex flex-wrap items-center justify-end gap-5 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-['Inter'] text-[0.9rem] font-[400] tracking-[-0.01em] text-gray-700 transition-colors hover:text-[color:var(--icfg-forest)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/donate"
            className="icfg-btn-primary inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-['Inter'] text-[0.9rem] font-[600] tracking-[-0.01em] text-white"
          >
            Donate
          </Link>
        </nav>
        <Link
          href="/donate"
          className="icfg-btn-primary inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-['Inter'] text-[0.85rem] font-[600] md:hidden"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
