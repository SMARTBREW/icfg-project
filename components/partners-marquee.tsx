import Image from "next/image";

import { PARTNER_LOGOS } from "@/constants/icfg";

export default function PartnersMarquee() {
  return (
    <div
      className="relative overflow-hidden py-2"
      role="region"
      aria-label="Organisations we work with"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-gray-100 to-transparent md:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-gray-100 to-transparent md:w-20"
        aria-hidden
      />
      <div className="icfg-partners-marquee-track">
        {PARTNER_LOGOS.map((partner) => (
          <div
            key={partner.src}
            className="relative h-[4.25rem] w-[11rem] shrink-0 md:h-[5.5rem] md:w-[14rem]"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-contain object-center grayscale contrast-[1.06]"
            />
          </div>
        ))}
        {PARTNER_LOGOS.map((partner) => (
          <div
            key={`${partner.src}-loop`}
            className="relative h-[4.25rem] w-[11rem] shrink-0 md:h-[5.5rem] md:w-[14rem]"
            aria-hidden
          >
            <Image
              src={partner.src}
              alt=""
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-contain object-center grayscale contrast-[1.06]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
