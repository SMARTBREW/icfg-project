"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { playfairDisplay } from "@/constants";
import {
  COMMITTEE_BLOCKS,
  committeeHeadingClass,
} from "@/lib/programmes-committees-data";

type Props = {
  sectionClassName: string;
};

export default function ProgrammesCommitteesSection({
  sectionClassName,
}: Props) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      imageRefs.current.forEach((img, index) => {
        const text = textRefs.current[index];
        if (!img || !text) return;

        const imageProps =
          index % 2 === 0
            ? { x: "-400%", opacity: 0 }
            : { x: "400%", opacity: 0 };

        const textProps =
          index % 2 === 0
            ? { x: "400%", opacity: 0 }
            : { x: "-400%", opacity: 0 };

        gsap.fromTo(img, imageProps, {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 100%",
            once: true,
          },
        });

        gsap.fromTo(text, textProps, {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 100%",
            once: true,
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="committees"
      className={`overflow-x-hidden ${sectionClassName}`}
    >
      <div className="mx-auto max-w-[90rem]">
        <h2
          className={`${playfairDisplay.className} text-center text-[1.75rem] text-black md:text-[2.1rem]`}
        >
          Our committees
        </h2>
        <div className="mt-14 space-y-20 md:mt-16 md:space-y-24 lg:mt-20 lg:space-y-28">
          {COMMITTEE_BLOCKS.map((block, index) => {
            const imageCol = (
              <div
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:flex-1"
              >
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            );
            const textCol = (
              <div
                ref={(el) => {
                  textRefs.current[index] = el;
                }}
                className="flex min-w-0 flex-col justify-center lg:flex-1 lg:px-2"
              >
                <h3 className={committeeHeadingClass}>{block.title}</h3>
                <div className="mt-4 md:mt-5">{block.body}</div>
              </div>
            );
            return (
              <article
                key={block.title}
                className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-16"
              >
                {index % 2 === 0 ? (
                  <>
                    {imageCol}
                    {textCol}
                  </>
                ) : (
                  <>
                    {textCol}
                    {imageCol}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
