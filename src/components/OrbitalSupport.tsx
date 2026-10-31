"use client";

import { useState } from "react";
import Image from "next/image";
import TagBadge from "./TagBadge";

export default function OrbitalSupport() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="suporte" className="py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C0D0E] rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Content (Badge e textos justificados à esquerda) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <TagBadge text="Suporte 24h" isDark className="mb-6" />

              <h2 className="w-full text-left text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] text-white tracking-tight leading-tight mb-6">
                <span className="font-normal text-white">Um time do seu lado </span>
                <span className="font-bold text-[#D2FB07]">24</span>
                <br />
                <span className="font-bold text-[#D2FB07]">horas por dia</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-lg text-left mx-0">
                Integração, dúvidas ou demandas operacionais: nossa equipe está
                disponível 24 horas por dia para ajudar o seu time, com
                respostas rápidas sempre que sua empresa precisar.
              </p>
            </div>

            {/* Right: Orbital System */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[460px] md:min-h-[540px]">
              {/* Orbital Interactive Container with Hover & Touch Pause */}
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="relative w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] flex items-center justify-center group cursor-pointer"
              >
                {/* Outer Ring (suporte-fora.png) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center anim-orbit-outer pointer-events-none ${
                    isPaused ? "paused" : ""
                  }`}
                >
                  <Image
                    src="/assets/suporte-fora.png"
                    alt="Órbita Externa de Atendimento"
                    width={568}
                    height={568}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Middle Ring (suporte-meio.png - Counter Clockwise, SEM iluminação neon) */}
                <div
                  className={`absolute w-[78%] h-[78%] flex items-center justify-center anim-orbit-middle pointer-events-none ${
                    isPaused ? "paused" : ""
                  }`}
                >
                  <Image
                    src="/assets/suporte-meio.png"
                    alt="Órbita Intermediária de Atendimento"
                    width={445}
                    height={436}
                    priority
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>

                {/* Inner Ring (suporte-dentro.png) */}
                <div
                  className={`absolute w-[54%] h-[54%] flex items-center justify-center anim-orbit-inner pointer-events-none ${
                    isPaused ? "paused" : ""
                  }`}
                >
                  <Image
                    src="/assets/suporte-dentro.png"
                    alt="Órbita Interna de Atendimento"
                    width={301}
                    height={300}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Ambient Neon Glow Aura behind WhatsApp button (sombreamento neon fiel ao original) */}
                <div className="absolute z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#D2FB07]/20 blur-2xl pointer-events-none" />

                {/* Center Core: Círculo menor ampliado, neon sólido com ícone oficial WhatsApp preto */}
                <a
                  href="https://wa.me/5584992315908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#D2FB07] flex items-center justify-center shadow-[0_0_30px_rgba(210,251,7,0.5),0_0_65px_rgba(210,251,7,0.28),0_0_100px_rgba(210,251,7,0.15)] group-hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Abrir atendimento no WhatsApp"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-black"
                    fill="currentColor"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.99C16.32 13.86 15.12 13.27 14.9 13.19C14.67 13.1 14.51 13.06 14.35 13.31C14.18 13.55 13.71 14.11 13.56 14.27C13.42 14.44 13.27 14.46 13.03 14.34C12.78 14.21 12 13.96 11.03 13.1C10.28 12.43 9.77 11.61 9.63 11.36C9.48 11.11 9.61 10.98 9.74 10.85C9.85 10.74 10 10.54 10.12 10.4C10.25 10.26 10.29 10.16 10.37 10C10.45 9.83 10.41 9.69 10.35 9.56C10.29 9.44 9.79 8.22 9.59 7.72C9.39 7.24 9.18 7.3 9.03 7.29C8.88 7.29 8.72 7.29 8.56 7.29L8.53 7.33Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
