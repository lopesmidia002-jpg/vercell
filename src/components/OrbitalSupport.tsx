"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Clock, ShieldCheck, Zap } from "lucide-react";

export default function OrbitalSupport() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="suporte" className="py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C0D0E] rounded-3xl p-5 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 lime-glow-dark rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 shadow-sm mb-6 text-xs sm:text-sm font-medium text-neutral-300">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
                  Versell
                </span>
                <span className="text-neutral-500">|</span>
                <span>Suporte 24h</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Um time do seu lado <br />
                <span className="text-[#D2FB07]">24 horas por dia</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-8">
                Integração, dúvidas ou demandas operacionais: nossa equipe está
                disponível 24 horas por dia para ajudar o seu time, com
                respostas rápidas sempre que sua empresa precisar.
              </p>

              {/* Status pills */}
              <div className="flex flex-wrap gap-3 mb-8 text-xs font-medium text-neutral-300">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#D2FB07]" />
                  <span>Tempo médio de resposta: &lt; 2 min</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Zap className="w-3.5 h-3.5 text-[#D2FB07]" />
                  <span>Plantão técnico 24/7/365</span>
                </div>
              </div>

              <a
                href="https://wa.me/5584992315908"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-8 py-3.5 text-sm sm:text-base font-bold text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all duration-200 shadow-[0_4px_25px_rgba(210,251,7,0.35)] flex items-center gap-2.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-black stroke-none" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Right: Orbital System */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[320px] sm:min-h-[460px] md:min-h-[540px]">
              {/* Orbital Interactive Container with Hover & Touch Pause */}
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="relative w-[230px] h-[230px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] flex items-center justify-center group cursor-pointer"
                title="Toque ou passe o mouse para pausar as órbitas"
              >
                {/* Outer Ring (suporte-fora.png) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center anim-orbit-outer pointer-events-none ${isPaused ? "paused" : ""
                    }`}
                >
                  <Image
                    src="/assets/suporte-fora.png"
                    alt="Órbita Externa de Atendimento"
                    width={568}
                    height={568}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(210,251,7,0.18)]"
                  />
                </div>

                {/* Middle Ring (suporte-meio.png - Counter Clockwise) */}
                <div
                  className={`absolute w-[78%] h-[78%] flex items-center justify-center anim-orbit-middle pointer-events-none ${isPaused ? "paused" : ""
                    }`}
                >
                  <Image
                    src="/assets/suporte-meio.png"
                    alt="Órbita Intermediária de Atendimento"
                    width={445}
                    height={436}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(210,251,7,0.22)]"
                  />
                </div>

                {/* Inner Ring (suporte-dentro.png) */}
                <div
                  className={`absolute w-[54%] h-[54%] flex items-center justify-center anim-orbit-inner pointer-events-none ${isPaused ? "paused" : ""
                    }`}
                >
                  <Image
                    src="/assets/suporte-dentro.png"
                    alt="Órbita Interna de Atendimento"
                    width={301}
                    height={300}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(210,251,7,0.28)]"
                  />
                </div>

                {/* Center Core: WhatsApp in Neon Glow */}
                <a
                  href="https://wa.me/5584992315908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#18191B] border-2 border-[#D2FB07] flex items-center justify-center shadow-[0_0_35px_rgba(210,251,7,0.45)] group-hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Abrir atendimento no WhatsApp"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-inner">
                    <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-none" />
                  </div>
                </a>
              </div>

              {/* Mobile interaction hint */}
              <p className="text-[11px] text-neutral-500 mt-4 text-center">
                {isPaused
                  ? "Órbitas pausadas (interação ativa)"
                  : "Toque ou passe o mouse nos anéis para pausar o movimento"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
