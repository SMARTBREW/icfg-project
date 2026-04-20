import FadeInSection from "@/components/fade-in-section";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <FadeInSection className="mt-16 flex flex-row items-center justify-center gap-8 md:mt-24">
      <div className="flex w-[6.875rem] items-center">
        <div className="h-px w-[6.25rem] bg-gradient-to-r from-transparent to-[color:var(--icfg-leaf)]" />
        <div className="h-1 w-1 rounded-full bg-[color:var(--icfg-lime)] ring-2 ring-[color:var(--icfg-leaf)]/35" />
      </div>
      <h2 className="font-['Inter'] text-5xl font-bold tracking-[-0.06em] text-black">
        {title}
      </h2>
      <div className="flex w-[6.875rem] items-center">
        <div className="h-1 w-1 rounded-full bg-[color:var(--icfg-lime)] ring-2 ring-[color:var(--icfg-leaf)]/35" />
        <div className="h-px w-[6.25rem] bg-gradient-to-l from-transparent to-[color:var(--icfg-leaf)]" />
      </div>
    </FadeInSection>
  );
}
