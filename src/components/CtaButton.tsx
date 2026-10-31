import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CtaButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

/**
 * Reusable CTA Pill Button with original Versell hover animation:
 * - Default: Solid #D2FB07 background, black centered text.
 * - Hover: Expansive diffuse neon lime glow (#D2FB07) + floating white circular
 *          badge on the right containing the black ArrowUpRight icon.
 */
export default function CtaButton({
  href = "#",
  onClick,
  children,
  className = "",
  size = "lg",
  target,
  rel,
  ariaLabel,
}: CtaButtonProps) {
  // Size-specific dimensions
  const sizeStyles = {
    sm: "min-h-[44px] px-8 sm:px-10 text-xs sm:text-sm",
    md: "min-h-[48px] sm:min-h-[52px] px-9 sm:px-12 text-sm sm:text-base",
    lg: "min-h-[56px] sm:min-h-[62px] px-12 sm:px-16 text-base sm:text-[17px]",
  }[size];

  const circleStyles = {
    sm: "w-7 h-7 right-2",
    md: "w-8 h-8 sm:w-9 sm:h-9 right-2 sm:right-2.5",
    lg: "w-9 h-9 sm:w-10 sm:h-10 right-2.5 sm:right-3.5",
  }[size];

  const iconStyles = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-4.5 h-4.5 sm:w-5 sm:h-5",
  }[size];

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`group relative inline-flex items-center justify-center font-light text-black bg-[#D2FB07] hover:bg-[#cbf502] rounded-full transition-all duration-300 ease-out shadow-[0_2px_12px_rgba(210,251,7,0.35)] hover:shadow-[0_0_32px_rgba(210,251,7,0.75),0_0_55px_rgba(210,251,7,0.35)] active:scale-[0.98] select-none text-center ${sizeStyles} ${className}`}
    >
      {/* Centered Label */}
      <span className="relative z-10 transition-transform duration-200">
        {children}
      </span>

      {/* Floating White Arrow Badge on Hover (exatamente como na referência) */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 scale-75 translate-x-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none z-10 ${circleStyles}`}
      >
        <ArrowUpRight
          className={`text-black stroke-[2.2] ${iconStyles}`}
        />
      </span>
    </a>
  );
}

