interface TagBadgeProps {
  text: string;
  className?: string;
  isDark?: boolean;
}

export default function TagBadge({ text, className = "", isDark = false }: TagBadgeProps) {
  if (isDark) {
    return (
      <div
        className={`inline-flex items-center gap-3 p-1.5 pr-5 rounded-full bg-white/10 border border-white/15 shadow-sm ${className}`}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2FB07]/20 text-[#D2FB07] font-normal text-xs sm:text-[13px]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_8px_#D2FB07]" />
          Versell
        </span>
        <span className="text-neutral-300 font-normal text-xs sm:text-[13px]">
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 p-1.5 pr-5 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${className}`}
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF4D4] text-[#556F00] font-normal text-xs sm:text-[13px]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_6px_rgba(210,251,7,0.8)]" />
        Versell
      </span>
      <span className="text-[#333333] font-normal text-xs sm:text-[13px]">
        {text}
      </span>
    </div>
  );
}
