import { ChevronRight, CheckCircle2 } from "lucide-react";
import TagBadge from "./TagBadge";

export default function ValueCards() {
  const cards = [
    {
      badge: "Receba",
      badgeClass: "bg-[#EEF3DB] text-[#425405] font-medium",
      cardClass:
        "bg-white border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)]",
      title: "Pix que cai na hora",
      description:
        "Gere cobranças por API, QR Code ou Copia e Cola e receba em segundos — inclusive à noite, nos fins de semana e nos feriados.",
      features: [
        "Cobranças Pix por API",
        "QR Code e Copia e Cola",
        "Confirmação instantânea",
      ],
      showChevron: true,
    },
    {
      badge: "Distribua",
      badgeClass: "bg-[#D2FB07] text-[#111111] font-semibold",
      cardClass:
        "bg-gradient-to-b from-[#F2FCD0]/90 via-[#F9FCE9]/50 to-white border-[#D2FB07]/50 shadow-[0_12px_40px_rgba(210,251,7,0.12),0_4px_20px_rgba(0,0,0,0.03)]",
      title: "Cada real no lugar certo",
      description:
        "Subcontas e split dividem cada recebimento entre sellers, parceiros e coprodutores, automaticamente.",
      features: [
        "Subcontas para quem vende com você",
        "Split na hora do pagamento",
        "Conciliação automática",
      ],
      showChevron: true,
    },
    {
      badge: "Movimente",
      badgeClass: "bg-[#EEF3DB] text-[#425405] font-medium",
      cardClass:
        "bg-white border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)]",
      title: "Sua conta, sem burocracia",
      description:
        "Pague, transfira e saque via Pix direto da sua conta digital, com tudo acompanhado no painel e no app.",
      features: [
        "Pagamentos e transferências Pix",
        "Saldo e extrato em tempo real",
        "App Versell para iOS e Android",
      ],
      showChevron: false,
    },
  ];

  return (
    <section id="pix" className="relative py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <TagBadge text="Pix sem limites" className="mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            O Pix do jeito que <br className="hidden sm:inline" />
            <span className="text-[#5B7500]">o seu negócio precisa</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed">
            Rápido para o seu cliente, simples para o seu time e pronto para o volume que a sua operação tiver.
          </p>
        </div>

        {/* 3 Cards Container with Ambient Glow and Chevrons */}
        <div className="relative">
          {/* Subtle Ambient Radial Glow behind Center Card */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-[#D2FB07]/20 rounded-full blur-[80px] -z-0" />

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 sm:p-8 border hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${card.cardClass}`}
              >
                <div>
                  <span
                    className={`inline-block text-xs px-3.5 py-1 rounded-full mb-6 ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-2xl sm:text-[26px] font-normal sm:font-medium text-[#111111] tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Features List without divider line */}
                <div className="flex flex-col space-y-3.5">
                  {card.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444]">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7500] stroke-[1.8] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Desktop Chevron connector */}
                {card.showChevron && (
                  <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#D2FB07]">
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

