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
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D2FB07]/20 text-[#D2FB07] font-semibold text-xs">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#D2FB07] flex items-center justify-center shadow-[0_0_8px_#D2FB07]" />
          </span>
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
      className={`inline-flex items-center gap-2.5 p-1 pr-4 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-xs font-medium ${className}`}
    >
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF3DB] text-[#5B7500] font-semibold text-xs">
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D2FB05] flex items-center justify-center shadow-[0_0_4px_rgba(210,251,5,0.8)]">
            <span className="w-1 h-1 rounded-full bg-[#627D08]" />
          </span>
        </span>
        Versell
      </span>
      <span className="text-[#444444] font-normal">
        {text}
      </span>
    </div>
  );
}

