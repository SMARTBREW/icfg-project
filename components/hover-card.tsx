import type { ReactNode } from "react";

export type HoverCardProps = {
  title: string;
  content: ReactNode;
  extraData?: ReactNode;
  icon: ReactNode;
};

export default function HoverCard({
  title,
  content,
  extraData,
  icon,
}: HoverCardProps) {
  return (
    <div className="flex w-full max-w-[28rem] flex-1 flex-col rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.055)]">
      <div className="flex w-full shrink-0 items-center gap-3">
        <div className="flex shrink-0 items-center">{icon}</div>
        <h3 className="min-w-0 flex-1 text-left font-['Inter'] text-[1.05rem] font-[600] leading-snug tracking-[-0.02em] text-black md:text-[1.15rem]">
          {title}
        </h3>
      </div>
      <div className="pt-3 text-left font-['Inter'] text-[0.9375rem] font-normal leading-[1.65] tracking-[-0.01em] text-gray-600 md:text-[0.95rem] md:leading-[1.7]">
        {content}
      </div>
      {extraData != null && (
        <p className="mt-2.5 text-center font-['Inter'] text-[0.95rem] font-light leading-snug tracking-[0.02em] text-gray-700 md:text-[1rem]">
          {extraData}
        </p>
      )}
    </div>
  );
}
