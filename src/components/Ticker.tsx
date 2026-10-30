import {
  Zap,
  Code,
  QrCode,
  Users,
  Split,
  RefreshCw,
  Webhook,
  Key,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const tickerItems = [
  { icon: Zap, label: "Pix na hora, 24/7" },
  { icon: Code, label: "API de Pix" },
  { icon: QrCode, label: "QR Code e Copia e Cola" },
  { icon: Users, label: "Subcontas" },
  { icon: Split, label: "Split automático" },
  { icon: RefreshCw, label: "Pix Automático" },
  { icon: Webhook, label: "Webhooks em tempo real" },
  { icon: Key, label: "mTLS + OAuth2" },
  { icon: ShieldCheck, label: "Antifraude" },
  { icon: Headphones, label: "Suporte" },
];

export default function Ticker() {
  // Duplicating items to guarantee infinite seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="relative py-5 sm:py-6 border-y border-black/[0.06] bg-[#F6F7F2] overflow-hidden select-none">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Left Edge Shading / Gradient Fade (como na imagem original) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 md:w-60 bg-gradient-to-r from-[#F6F7F2] via-[#F6F7F2]/90 to-transparent z-20" />

      {/* Right Edge Shading / Gradient Fade (como na imagem original) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 md:w-60 bg-gradient-to-l from-[#F6F7F2] via-[#F6F7F2]/90 to-transparent z-20" />

      {/* Carousel Track */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex anim-marquee whitespace-nowrap py-1 group-hover:[animation-play-state:paused]">
          {allItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-3 sm:gap-3.5 mx-3 sm:mx-3.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white border border-black/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-sm sm:text-[15px] font-normal text-[#111111] flex-shrink-0"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0 shadow-sm">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
