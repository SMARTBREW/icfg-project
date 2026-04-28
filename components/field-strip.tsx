import Image from "next/image";

import { playfairDisplay } from "@/constants";

const FIELD_PHOTOS = [
  {
    src: "/all/Firefly.webp",
    alt: "Community forest governance committee at work",
    location: "Kuchai, Seraikela-Kharsawan",
    when: "Mar 2024",
  },
  {
    src: "/all/IMG_20230924_093059-scaled.webp",
    alt: "Women’s self-help group meeting",
    location: "Raisinghdiri",
    when: "May 2024",
  },
  {
    src: "/all/IMG_20230924_100427-scaled.webp",
    alt: "Bal Akhra youth assembly",
    location: "Budmu, Ranchi",
    when: "Nov 2024",
  },
  {
    src: "/all/IMG_20230925_113936-scaled.webp",
    alt: "Gram Sabha consultation in a forest village",
    location: "Gola, Ramgarh",
    when: "Feb 2024",
  },
] as const;

export default function FieldStrip() {
  const [feature, ...rest] = FIELD_PHOTOS;

  return (
    <section
      id="in-the-field"
      className="w-full bg-gray-100 py-12 text-black md:py-16"
    >
      <div className="mx-[2rem] md:mx-[4.5rem] md:px-[8vw]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h2
            className={`${playfairDisplay.className} max-w-[34rem] text-[1.6rem] leading-tight text-black md:text-[1.95rem]`}
          >
            Recent visits
          </h2>
          <p className="max-w-[26rem] font-['Inter'] text-[0.9rem] leading-[1.55rem] text-gray-600 sm:text-right">
            From our field log. Locations stay at block / district level so
            specific houses are not pinned online.
          </p>
        </div>

        <figure className="mt-8 overflow-hidden rounded-2xl bg-white md:mt-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/7]">
            <Image
              src={feature.src}
              alt={feature.alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-4 py-4 md:px-6 md:py-5">
            <p className="font-['Inter'] text-[0.95rem] font-[600] tracking-[-0.01em] text-black md:text-[1rem]">
              {feature.location}
            </p>
            <p className="mt-1 font-['Inter'] text-[0.78rem] font-[500] text-gray-500">
              {feature.when}
            </p>
          </figcaption>
        </figure>

        <ul className="mt-3 grid grid-cols-3 gap-3 md:mt-4 md:gap-4">
          {rest.map((p) => (
            <li key={p.src}>
              <figure className="overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-3 py-3 md:px-4 md:py-3">
                  <p className="font-['Inter'] text-[0.8rem] font-[600] tracking-[-0.01em] text-black md:text-[0.85rem]">
                    {p.location}
                  </p>
                  <p className="mt-0.5 font-['Inter'] text-[0.72rem] font-[500] text-gray-500">
                    {p.when}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
