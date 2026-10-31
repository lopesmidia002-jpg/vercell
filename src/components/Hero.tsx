import Image from "next/image";
import { Zap, ShieldCheck, Code } from "lucide-react";
import TagBadge from "./TagBadge";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden bg-[#F6F7F2]">
      {/* Tela com quadrados em efeito leve no fundo (grid sutil como na imagem original) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000009_1px,transparent_1px),linear-gradient(to_bottom,#00000009_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge: justificado à esquerda */}
            <TagBadge text="Conta digital + API de Pix" className="mb-6" />

            {/* Main Title */}
            <h1 className="text-[34px] leading-[1.12] sm:text-5xl lg:text-[54px] text-[#111111] tracking-tight mb-5">
              <span className="font-normal">Quem vende no Pix,</span> <br />
              <span className="font-bold text-[#5B7500] inline-block">
                vende com Versell.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#555555] max-w-lg font-normal leading-relaxed mb-8">
              Conta digital, API de Pix, subcontas e split em uma só plataforma.
              Receba na hora, todos os dias, e faça a sua operação crescer sem
              travas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <CtaButton href="#como-comecar" size="lg">
                Abrir minha conta
              </CtaButton>
              <a
                href="#suporte"
                className="min-h-[56px] sm:min-h-[62px] px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-[17px] font-normal text-[#111111] bg-white border border-black/[0.12] hover:border-black/25 rounded-full transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center text-center active:scale-[0.98]"
              >
                Falar com especialista
              </a>
            </div>

            {/* Highlights List with bare green icons (idêntico à imagem original) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-normal text-[#555555]">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#5B7500] stroke-[2]" />
                <span>Pix 24/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5B7500] stroke-[2]" />
                <span>Infraestrutura completa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#5B7500] stroke-[2]" />
                <span>API e sandbox</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Acrylic Logo Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-2 lg:mt-0">
            {/* Ambient Radial Lime Glow deslocado para a direita da logo, fiel à referência original */}
            <div className="absolute top-[48%] left-[64%] sm:left-[66%] md:left-[68%] -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[540px] md:w-[660px] lg:w-[740px] h-[420px] sm:h-[540px] md:h-[660px] lg:h-[740px] rounded-full bg-[radial-gradient(circle,rgba(210,251,7,0.40)_0%,rgba(210,251,7,0.26)_38%,rgba(210,251,7,0.12)_62%,transparent_82%)] blur-3xl pointer-events-none" />

            {/* 3D Floating Element with GPU acceleration */}
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
              <Image
                src="/assets/logo_versell.webp"
                alt="Versell 3D Icon"
                width={480}
                height={480}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] anim-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
