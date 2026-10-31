import Image from "next/image";
import { Zap, ShieldCheck, Code } from "lucide-react";
import TagBadge from "./TagBadge";
import CtaButton from "./CtaButton";

export default function PreFooterCta() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F1012] rounded-[32px] sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          {/* Ambient Glow focused at the bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] h-[250px] bg-[#D2FB07]/12 rounded-full blur-[90px] pointer-events-none" />

          {/* 3D Visual Accent (deep metallic olive acrylic logo rising from bottom-right corner) */}
          <div className="absolute -bottom-[200px] sm:-bottom-[230px] md:-bottom-[260px] -right-[95px] sm:-right-[105px] md:-right-[115px] w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] md:w-[520px] md:h-[520px] pointer-events-none hidden sm:block z-0">
            <Image
              src="/assets/logo_versell.webp"
              alt="Versell 3D Visual"
              width={520}
              height={520}
              className="w-full h-full object-contain filter brightness-[0.52] contrast-[1.1] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="relative z-10 max-w-xl flex flex-col items-center">
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

            {/* Primary Action Button (Wide & generous matching original) */}
            <CtaButton
              href="#como-comecar"
              size="lg"
              className="mb-8 min-w-[280px] sm:min-w-[320px] md:min-w-[340px]"
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

