import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/#values", label: "Our values" },
  { href: "/programmes", label: "Programmes" },
  { href: "/#impact", label: "Impact" },
  { href: "/#contact", label: "Contact" },
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
        <nav aria-label="Main navigation" className="hidden md:block">
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
        </nav>
        <Link
          href="/#contact"
          className="icfg-btn-primary rounded-2xl px-5 py-2.5 font-['Inter'] text-[0.85rem] font-[500] md:hidden"
        >
          Support
        </Link>
      </div>
    </header>
  );
}
