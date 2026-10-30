import {
  Zap,
  Code2,
  QrCode,
  Users2,
  GitFork,
  RefreshCw,
  BellRing,
  ShieldCheck,
  Headphones,
  Lock,
} from "lucide-react";

const tickerItems = [
  { icon: Zap, label: "Pix real time 24/7" },
  { icon: Code2, label: "API de Pix" },
  { icon: QrCode, label: "QR Code e Copia e Cola" },
  { icon: Users2, label: "Subcontas" },
  { icon: GitFork, label: "Split automático" },
  { icon: RefreshCw, label: "Pix Automático" },
  { icon: BellRing, label: "Webhooks em tempo real" },
  { icon: Lock, label: "mTLS + OAuth2" },
  { icon: ShieldCheck, label: "Antifraude inteligente" },
  { icon: Headphones, label: "Suporte humano 24/7" },
];

export default function Ticker() {
  return (
    <section className="py-4 border-y border-neutral-200/80 bg-white overflow-hidden select-none">
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-1 group-hover:[animation-play-state:paused]">
          {tickerItems.concat(tickerItems).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 mx-5 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-black/[0.05] text-xs sm:text-sm font-medium text-neutral-700"
              >
                <div className="w-5 h-5 rounded-full bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0">
                  <Icon className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-1 group-hover:[animation-play-state:paused]"
        >
          {tickerItems.concat(tickerItems).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`clone-${index}`}
                className="inline-flex items-center gap-2.5 mx-5 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-black/[0.05] text-xs sm:text-sm font-medium text-neutral-700"
              >
                <div className="w-5 h-5 rounded-full bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0">
                  <Icon className="w-3 h-3 stroke-[2.5]" />
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

