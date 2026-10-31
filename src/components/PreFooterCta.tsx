import Image from "next/image";
import { Zap, ShieldCheck, Code } from "lucide-react";
import TagBadge from "./TagBadge";
import CtaButton from "./CtaButton";

export default function PreFooterCta() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F1012] rounded-[32px] sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          {/* Ambient Glows focused at the bottom half and right corner */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] h-[250px] bg-[#D2FB07]/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-[380px] h-[280px] bg-[#D2FB07]/12 rounded-full blur-[80px] pointer-events-none" />

          {/* 3D Visual Accent (vibrant acrylic logo rising from bottom-right corner) */}
          <div className="absolute -bottom-12 -right-8 sm:-bottom-16 sm:-right-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-75 sm:opacity-85 pointer-events-none hidden sm:block">
            <Image
              src="/assets/logo_versell.webp"
              alt="Versell 3D Visual"
              width={384}
              height={384}
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            {/* Tag Badge */}
            <TagBadge text="Vamos crescer juntos?" isDark className="mb-6" />

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              <span className="font-normal text-white">Quem vende no Pix,</span> <br />
              <span className="font-bold text-[#D2FB07]">vende com Versell.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Abra sua conta e comece a receber na hora, todos os dias, com a
              segurança e o suporte que a sua operação merece.
            </p>

            {/* Primary Action Button */}
            <CtaButton
              href="#como-comecar"
              size="md"
              className="mb-8"
            >
              Abrir minha conta
            </CtaButton>

            {/* Highlights List with bare neon icons (fiel ao mockup original) */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-normal text-neutral-400">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-4 h-4 text-[#D2FB07] stroke-[1.8]" />
                <span>Pix 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D2FB07] stroke-[1.8]" />
                <span>Infraestrutura completa</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Code className="w-4 h-4 text-[#D2FB07] stroke-[1.8]" />
                <span>API e sandbox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

