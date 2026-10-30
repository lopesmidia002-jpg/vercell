import Image from "next/image";
import { Check } from "lucide-react";

export default function PreFooterCta() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C0D0E] rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] lime-glow-dark rounded-full blur-3xl pointer-events-none" />

          {/* 3D Visual Accent (floating subtly on background corner) */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-25 pointer-events-none hidden md:block">
            <Image
              src="/assets/logo_versell.webp"
              alt="Versell 3D Glow"
              width={260}
              height={260}
              className="w-full h-full object-contain filter blur-[1px]"
            />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 shadow-sm mb-6 text-xs sm:text-sm font-medium text-neutral-300">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
                Versell
              </span>
              <span className="text-neutral-500">|</span>
              <span>Vamos crescer juntos?</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Quem vende no Pix, <br />
              <span className="text-[#D2FB07]">vende com Versell.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Abra sua conta e comece a receber na hora, todos os dias, com a
              segurança e o suporte que a sua operação merece.
            </p>

            {/* Primary Action Button */}
            <a
              href="#como-comecar"
              className="min-h-[48px] px-9 py-3.5 text-base font-bold text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all duration-200 shadow-[0_4px_25px_rgba(210,251,7,0.4)] flex items-center justify-center text-center mb-8 transform active:scale-[0.98]"
            >
              Abrir minha conta
            </a>

            {/* Micro Badges */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D2FB07]/30 flex items-center justify-center text-[#D2FB07]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Pix 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D2FB07]/30 flex items-center justify-center text-[#D2FB07]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Infraestrutura completa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D2FB07]/30 flex items-center justify-center text-[#D2FB07]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>API e sandbox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

