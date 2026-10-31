interface TagBadgeProps {
  text: string;
  className?: string;
  isDark?: boolean;
}

export default function TagBadge({ text, className = "", isDark = false }: TagBadgeProps) {
  if (isDark) {
    return (
      <div
        className={`inline-flex items-center gap-4 sm:gap-4.5 p-1.5 sm:p-2 pr-6 sm:pr-7 rounded-full bg-white/10 border border-white/15 shadow-sm text-sm sm:text-[15px] ${className}`}
      >
        <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#D2FB07]/20 text-[#D2FB07] font-normal text-sm sm:text-[15px]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_8px_#D2FB07]" />
          Versell
        </span>
        <span className="text-neutral-300 font-normal text-sm sm:text-[15px]">
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-4 sm:gap-4.5 p-1.5 sm:p-2 pr-6 sm:pr-7 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-sm sm:text-[15px] ${className}`}
    >
      <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EDF4D4] text-[#556F00] font-normal text-sm sm:text-[15px]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_8px_rgba(210,251,7,0.9)]" />
        Versell
      </span>
      <span className="text-[#333333] font-normal text-sm sm:text-[15px]">
        {text}
      </span>
    </div>
  );
}
