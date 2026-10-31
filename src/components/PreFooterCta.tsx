import Image from "next/image";
import { Zap, ShieldCheck, Code } from "lucide-react";
import TagBadge from "./TagBadge";
import CtaButton from "./CtaButton";

export default function PreFooterCta() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F1012] rounded-[32px] sm:rounded-[36px] px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24 min-h-[500px] sm:min-h-[560px] lg:min-h-[590px] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
          {/* Neon glow effect covering the bottom half of the card background (idêntico à referência) */}
          <div
            className="absolute inset-x-0 bottom-0 h-[62%] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 95% 80% at 50% 100%, rgba(210, 251, 7, 0.22) 0%, rgba(210, 251, 7, 0.1) 45%, rgba(210, 251, 7, 0.03) 75%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#D2FB07]/14 via-[#D2FB07]/6 to-transparent pointer-events-none" />

          {/* 3D Visual Accent (deep metallic olive acrylic logo rising from bottom-right corner) */}
          <div className="absolute -bottom-[190px] sm:-bottom-[210px] md:-bottom-[230px] -right-[90px] sm:-right-[100px] md:-right-[110px] w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[560px] pointer-events-none hidden sm:block z-0">
            <Image
              src="/assets/logo_versell.webp"
              alt="Versell 3D Visual"
              width={560}
              height={560}
              className="w-full h-full object-contain filter brightness-[0.52] contrast-[1.1] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="relative z-10 max-w-2xl lg:max-w-[700px] flex flex-col items-center">
            {/* Tag Badge */}
            <TagBadge text="Vamos crescer juntos?" isDark className="mb-6 sm:mb-8" />

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4 sm:mb-5">
              <span className="font-normal text-white">Quem vende no Pix,</span> <br />
              <span className="font-bold text-[#D2FB07]">vende com Versell.</span>
            </h2>

            {/* Subtitle (refinado para corresponder exatamente à quebra de linha e estilo do original) */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#D8D8D8] font-normal leading-[1.65] mb-8 sm:mb-9 max-w-[620px]">
              Abra sua conta e comece a receber na hora, todos os dias, com a segurança e o{" "}
              <br className="hidden sm:inline" />
              suporte que a sua operação merece.
            </p>

            {/* Primary Action Button (proporção fiel ao mockup original) */}
            <CtaButton
              href="#como-comecar"
              size="lg"
              className="mb-8 sm:mb-9 min-w-[210px] sm:min-w-[230px] md:min-w-[240px] px-8 sm:px-9"
            >
              Abrir minha conta
            </CtaButton>

            {/* Highlights List with bare neon icons (fiel ao mockup original) */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 sm:gap-x-7 text-xs sm:text-[13px] font-normal text-neutral-400">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D2FB07] stroke-[1.8]" />
                <span>Pix 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D2FB07] stroke-[1.8]" />
                <span>Infraestrutura completa</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D2FB07] stroke-[1.8]" />
                <span>API e sandbox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

