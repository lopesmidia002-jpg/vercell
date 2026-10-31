interface TagBadgeProps {
  text: string;
  className?: string;
  isDark?: boolean;
}

export default function TagBadge({ text, className = "", isDark = false }: TagBadgeProps) {
  if (isDark) {
    return (
      <div
        className={`inline-flex items-center gap-2.5 p-1 pr-4 rounded-full bg-white/10 border border-white/15 shadow-sm text-xs ${className}`}
      >
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D2FB07]/20 text-[#D2FB07] font-normal text-xs">
          <span className="w-2 h-2 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_8px_#D2FB07]" />
          Versell
        </span>
        <span className="text-neutral-300 font-normal">
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 p-1 pr-4 rounded-full bg-white/80 border border-black/[0.06] shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-xs ${className}`}
    >
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F0F5DD] text-[#556F00] font-normal text-xs">
        <span className="w-2 h-2 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_6px_rgba(210,251,7,0.7)]" />
        Versell
      </span>
      <span className="text-[#555555] font-normal">
        {text}
      </span>
    </div>
  );
}

