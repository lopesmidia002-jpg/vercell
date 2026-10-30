import { CheckCircle2, ChevronRight } from "lucide-react";
import TagBadge from "./TagBadge";

export default function ValueCards() {
  const cards = [
    {
      badge: "Receba",
      badgeClass: "bg-[#EEF3DB] text-[#425405] font-normal",
      title: "Pix que cai na hora",
      description:
        "Gere cobranças por API, QR Code ou Copia e Cola e receba em segundos — inclusive à noite, nos fins de semana e nos feriados.",
      features: [
        "Cobranças Pix por API",
        "QR Code e Copia e Cola",
        "Confirmação instantânea",
      ],
      isHighlighted: false,
    },
    {
      badge: "Distribua",
      badgeClass: "bg-[#D2FB07] text-[#111111] font-normal shadow-[0_2px_8px_rgba(210,251,7,0.35)]",
      title: "Cada real no lugar certo",
      description:
        "Subcontas e split dividem cada recebimento entre sellers, parceiros e coprodutores, automaticamente.",
      features: [
        "Subcontas para quem vende com você",
        "Split na hora do pagamento",
        "Conciliação automática",
      ],
      isHighlighted: true,
    },
    {
      badge: "Movimente",
      badgeClass: "bg-[#EEF3DB] text-[#425405] font-normal",
      title: "Sua conta, sem burocracia",
      description:
        "Pague, transfira e saque via Pix direto da sua conta digital, com tudo acompanhado no painel e no app.",
      features: [
        "Pagamentos e transferências Pix",
        "Saldo e extrato em tempo real",
        "App Versell para iOS e Android",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section id="pix" className="relative py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <TagBadge text="Pix sem limites" className="mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-tight mb-4">
            <span className="font-normal">O Pix do jeito que</span> <br className="hidden sm:inline" />
            <span className="font-bold text-[#5B7500]">o seu negócio precisa</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed">
            Rápido para o seu cliente, simples para o seu time e pronto para o volume que a sua operação tiver.
          </p>
        </div>

        {/* 3 Cards Container with flow arrows between them */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`rounded-[32px] p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] relative overflow-hidden ${
                  card.isHighlighted
                    ? "bg-[linear-gradient(180deg,#F1FBC4_0%,#F8FDE2_42%,#FFFFFF_68%)] border border-[#D2FB07]/70 shadow-[0_10px_35px_rgba(210,251,7,0.2)] hover:shadow-xl"
                    : "bg-white border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md"
                }`}
              >
                <div className="relative z-10">
                  <span
                    className={`inline-block text-sm sm:text-[14px] font-normal px-5 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-7 ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-2xl sm:text-[26px] font-normal text-[#111111] tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Features List with circled checkmark icons */}
                <div className="flex flex-col space-y-3.5 relative z-10">
                  {card.features.map((item, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#5B7500] stroke-[1.75] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Setas conectivas discretas entre os cards no desktop (como na imagem original) */}
          <div className="hidden md:flex absolute left-[33.333%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
            <ChevronRight className="w-5 h-5 text-[#D2FB07] stroke-[2.5]" />
          </div>
          <div className="hidden md:flex absolute left-[66.666%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
            <ChevronRight className="w-5 h-5 text-[#D2FB07] stroke-[2.5]" />
          </div>
        </div>
      </div>
    </section>
  );
}

