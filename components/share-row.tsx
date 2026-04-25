"use client";

import { useState, useSyncExternalStore } from "react";

type Props = {
  title: string;
  /** Path on this site, e.g. `/blogs/foo`. */
  path: string;
};

function subscribeToOrigin() {
  return () => {};
}
function getOrigin() {
  return typeof window === "undefined" ? "" : window.location.origin;
}
function getServerOrigin() {
  return "";
}

export default function ShareRow({ title, path }: Props) {
  const origin = useSyncExternalStore(
    subscribeToOrigin,
    getOrigin,
    getServerOrigin
  );
  const url = origin ? `${origin}${path}` : "";
  const [copied, setCopied] = useState<boolean>(false);

  async function handleCopy() {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore — older browsers
    }
  }

  const shareTitle = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);
  const whatsapp = `https://wa.me/?text=${shareTitle}%20${shareUrl}`;
  const twitter = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`;

  const baseChip =
    "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 font-['Inter'] text-[0.8rem] font-[500] tracking-[-0.01em] text-gray-700 shadow-sm transition hover:border-[color:var(--icfg-leaf)]/50 hover:text-[color:var(--icfg-forest)]";

  return (
    <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-8">
      <span className="font-['Inter'] text-[0.78rem] font-[600] uppercase tracking-[0.2em] text-gray-500">
        Share
      </span>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={baseChip}
        aria-label="Share on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-3.5 w-3.5 fill-current"
        >
          <path d="M19.11 4.91A10 10 0 0 0 4.36 17.55L3 21.5l4.05-1.32A10 10 0 1 0 19.11 4.91Zm-7.07 15.13a8.05 8.05 0 0 1-4.1-1.13l-.29-.18-2.4.78.79-2.34-.19-.3a8.06 8.06 0 1 1 6.19 3.17Zm4.42-6.05c-.24-.12-1.43-.7-1.65-.78s-.38-.12-.55.12-.62.78-.76.94-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.2 7.3 7.3 0 0 1-1.34-1.66c-.14-.24 0-.36.1-.48s.24-.28.36-.42a1.6 1.6 0 0 0 .24-.4.45.45 0 0 0 0-.42c-.06-.12-.55-1.32-.75-1.81s-.4-.41-.55-.42h-.47a.92.92 0 0 0-.66.31 2.78 2.78 0 0 0-.86 2.07 4.83 4.83 0 0 0 1 2.55 11 11 0 0 0 4.2 3.7c.59.25 1 .4 1.4.51a3.36 3.36 0 0 0 1.55.1 2.55 2.55 0 0 0 1.67-1.18 2 2 0 0 0 .15-1.18c-.06-.1-.22-.16-.46-.28Z" />
        </svg>
        WhatsApp
      </a>
      <a
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={baseChip}
        aria-label="Share on X"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-3.5 w-3.5 fill-current"
        >
          <path d="M18.244 2H21l-6.51 7.44L22.5 22h-6.844l-5.36-7.005L4 22H1.244l6.96-7.953L1.5 2h6.96l4.84 6.395L18.244 2Zm-1.196 18.4h1.575L7.06 3.508H5.36L17.048 20.4Z" />
        </svg>
        X
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={baseChip}
        aria-label="Copy link"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-3.5 w-3.5 fill-current"
        >
          <path d="M9 17H7a5 5 0 1 1 0-10h2v2H7a3 3 0 1 0 0 6h2v2Zm6-10h2a5 5 0 1 1 0 10h-2v-2h2a3 3 0 1 0 0-6h-2V7Zm-7 4h8v2H8v-2Z" />
        </svg>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
