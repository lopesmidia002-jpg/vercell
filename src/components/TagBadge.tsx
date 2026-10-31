interface TagBadgeProps {
  text: string;
  className?: string;
  isDark?: boolean;
}

export default function TagBadge({ text, className = "", isDark = false }: TagBadgeProps) {
  if (isDark) {
    return (
      <div
        className={`inline-flex items-center gap-2.5 sm:gap-4 p-1 sm:p-1.5 sm:p-2 pr-4 sm:pr-7 rounded-full bg-[#18191B] border border-white/10 shadow-sm text-xs sm:text-[15px] whitespace-nowrap max-w-full ${className}`}
      >
        <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#242528] text-[#D2FB07] font-normal text-xs sm:text-[15px] whitespace-nowrap flex-shrink-0">
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#526017] flex items-center justify-center flex-shrink-0">
            <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#D2FB07]" />
          </span>
          Versell
        </span>
        <span className="text-[#D8D8D8] font-normal text-xs sm:text-[15px] whitespace-nowrap">
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-4.5 p-1 sm:p-1.5 sm:p-2 pr-4 sm:pr-7 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-xs sm:text-[15px] whitespace-nowrap max-w-full ${className}`}
    >
      <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#EDF4D4] text-[#556F00] font-normal text-xs sm:text-[15px] whitespace-nowrap flex-shrink-0">
        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D2FB07] flex-shrink-0 shadow-[0_0_8px_rgba(210,251,7,0.9)]" />
        Versell
      </span>
      <span className="text-[#333333] font-normal text-xs sm:text-[15px] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
