import Image from "next/image";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F6F7F2] via-white to-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-5 text-xs sm:text-sm font-medium text-[#444444]">
              <span className="flex items-center gap-1.5 font-semibold text-black">
                <span className="w-2 h-2 rounded-full bg-[#D2FB07] animate-pulse" />
                Versell
              </span>
              <span className="text-neutral-300">|</span>
              <span>Conta digital + API de Pix</span>
            </div>

            {/* Main Title */}
            <h1 className="text-[32px] leading-[1.12] sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight mb-5 sm:mb-6">
              Quem vende no Pix, <br />
              <span className="text-[#5B7500] inline-block relative">
                vende com Versell.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#555555] max-w-xl font-normal leading-relaxed mb-7 sm:mb-8">
              Conta digital, API de Pix, subcontas e split em uma só plataforma.
              Receba na hora, todos os dias, e faça a sua operação crescer sem
              travas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#como-comecar"
                className="min-h-[48px] px-8 py-3.5 text-base font-bold text-black bg-[#D2FB07] hover:bg-[#c4ed00] rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(210,251,7,0.35)] hover:shadow-[0_6px_25px_rgba(210,251,7,0.5)] flex items-center justify-center text-center transform active:scale-[0.98]"
              >
                Abrir minha conta
              </a>
              <a
                href="#suporte"
                className="min-h-[48px] px-8 py-3.5 text-base font-semibold text-[#222222] bg-white border border-neutral-200 hover:bg-neutral-50 rounded-full transition-all duration-200 shadow-sm flex items-center justify-center text-center active:scale-[0.98]"
              >
                Falar com especialista
              </a>
            </div>

            {/* Highlights List */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 sm:gap-x-6 text-xs sm:text-sm font-medium text-[#666666]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D2FB07]/40 flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Pix 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D2FB07]/40 flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Infraestrutura completa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D2FB07]/40 flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>API e sandbox</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Acrylic Logo Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0">
            {/* Ambient Radial Lime Glow */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full lime-glow-hero blur-3xl pointer-events-none" />

            {/* 3D Floating Element with GPU acceleration */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center">
              <Image
                src="/assets/logo_versell.webp"
                alt="Versell 3D Icon"
                width={420}
                height={420}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] anim-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
