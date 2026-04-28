"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useWindowSize } from "@/hooks/use-window-size";

const NAV_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/programmes", label: "Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-gray-50/95 backdrop-blur-md">
      <div className="mx-[2rem] flex max-w-[90rem] flex-wrap items-center justify-between gap-6 py-4 md:mx-[4.5rem] md:px-[8vw]">
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/hero/WhatsApp%20Image%202026-04-28%20at%204.20.11%20PM.jpeg"
            alt="Institute of Community Forest Governance"
            width={160}
            height={160}
            className="icfg-header-logo h-14 w-14 object-contain object-left md:h-16 md:w-16"
            preload
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex md:flex-1 md:flex-wrap md:items-center md:justify-end md:gap-5 lg:gap-8"
        >
          <ul className="flex flex-wrap items-center justify-end gap-5 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={clsx(
                    "font-['Inter'] text-[0.9rem] font-[400] tracking-[-0.01em] transition-colors",
                    pathname === link.href
                      ? "font-[600] text-[color:var(--icfg-forest)]"
                      : "text-gray-700 hover:text-[color:var(--icfg-forest)]"
                  )}
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

        {/* Mobile: Donate (hidden when menu is open to avoid duplication) + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {!open && (
            <Link
              href="/donate"
              onClick={closeMenu}
              className="icfg-btn-primary inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-['Inter'] text-[0.85rem] font-[600]"
            >
              Donate
            </Link>
          )}
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100"
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden
              >
                <path d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4l-6.29 6.3-1.42-1.42L9.17 12 2.88 5.71l1.42-1.42 6.29 6.3 6.29-6.3 1.42 1.42Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden
              >
                <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel — only rendered on non-desktop viewports */}
      {open && !isDesktop && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="border-t border-gray-100 bg-gray-50 px-[2rem] pb-6 pt-4 md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={clsx(
                      "block rounded-xl px-4 py-3 font-['Inter'] text-[0.95rem] transition",
                      pathname === link.href
                        ? "bg-[color:var(--icfg-forest)]/8 font-[600] text-[color:var(--icfg-forest)]"
                        : "text-gray-800 hover:bg-gray-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/donate"
                  onClick={closeMenu}
                  className="icfg-btn-primary block rounded-xl px-4 py-3 text-center font-['Inter'] text-[0.95rem] font-[600]"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
