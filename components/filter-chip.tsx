import clsx from "clsx";

type Props = {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function FilterChip({ id, label, isActive, onClick }: Props) {
  return (
    <button
      key={id}
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={clsx(
        "rounded-full px-4 py-2 font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] transition",
        isActive
          ? "border border-transparent bg-[color:var(--icfg-forest)] text-white shadow-sm"
          : "border border-gray-200 bg-white text-gray-700 hover:border-[color:var(--icfg-leaf)]/50 hover:text-[color:var(--icfg-forest)]"
      )}
    >
      {label}
    </button>
  );
}
