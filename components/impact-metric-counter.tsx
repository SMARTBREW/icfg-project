"use client";

import { useEffect, useRef, useState } from "react";

import { SatoshiBold } from "@/constants/fonts";
import { IMPACT_METRICS } from "@/constants/icfg";

function easeOutQuart(t: number) {
  return 1 - (1 - t) ** 4;
}

type Metric = (typeof IMPACT_METRICS)[number];

export default function ImpactMetricCounter({ metric }: { metric: Metric }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runCountUp = () => {
      if (started.current) return;
      started.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(metric.endValue);
        return;
      }

      const duration = 2000;
      const start = performance.now();
      const end = metric.endValue;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(easeOutQuart(t) * end);
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(end);
        }
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runCountUp();
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [metric.endValue]);

  const display =
    metric.decimals === 0
      ? `${Math.round(value)}${metric.suffix}`
      : `${value.toFixed(1)}${metric.suffix}`;

  return (
    <div
      ref={ref}
      className="mx-auto flex flex-col items-center text-center"
    >
      <p
        className={`${SatoshiBold.className} text-[3.25rem] leading-none tracking-[-0.06em] text-black tabular-nums md:text-[4.5rem]`}
      >
        {display}
      </p>
      <p className="mt-4 max-w-[14rem] font-['Inter'] text-[1.05rem] font-[500] leading-[1.5rem] tracking-[-0.02em] text-gray-700">
        {metric.label}
      </p>
    </div>
  );
}
