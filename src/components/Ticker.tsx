import {
  Zap,
  Code,
  QrCode,
  Users,
  Split,
  RefreshCw,
  Webhook,
  Lock,
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
  { icon: Lock, label: "mTLS + OAuth2" },
  { icon: ShieldCheck, label: "Antifraude inteligente" },
  { icon: Headphones, label: "Suporte" },
];

export default function Ticker() {
  // Duplicating items to guarantee infinite seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="relative py-4 border-y border-black/[0.06] bg-[#F6F7F2] overflow-hidden select-none">
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
                className="inline-flex items-center gap-2.5 mx-2.5 sm:mx-3 px-4 py-2 rounded-full bg-white border border-black/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-xs sm:text-sm font-semibold text-[#111111] flex-shrink-0"
              >
                <div className="w-6 h-6 rounded-lg bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0 shadow-sm">
                  <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
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
