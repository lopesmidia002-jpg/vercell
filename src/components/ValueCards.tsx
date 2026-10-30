import { ArrowRight, Check } from "lucide-react";

export default function ValueCards() {
  const cards = [
    {
      badge: "Receba",
      badgeClass: "bg-neutral-100 text-neutral-800",
      title: "Pix que cai na hora",
      description:
        "Gere cobranças por API, QR Code ou Copia e Cola e receba em segundos — inclusive à noite, nos fins de semana e nos feriados.",
      features: [
        "Cobranças Pix por API",
        "QR Code e Copia e Cola",
        "Confirmação instantânea",
      ],
    },
    {
      badge: "Divida",
      badgeClass: "bg-[#D2FB07] text-black font-semibold",
      title: "Cada real no lugar certo",
      description:
        "Subcontas e split dividem cada recebimento entre sellers, parceiros e coprodutores, automaticamente.",
      features: [
        "Subcontas para quem vende com você",
        "Split na hora do pagamento",
        "Conciliação automática",
      ],
    },
    {
      badge: "Movimente",
      badgeClass: "bg-neutral-100 text-neutral-800",
      title: "Sua conta, sem burocracia",
      description:
        "Pague, transfira e saque via Pix direto da sua conta digital, com tudo acompanhado no painel e no app.",
      features: [
        "Pagamentos e transferências Pix",
        "Saldo e extrato em tempo real",
        "App Versell para iOS e Android",
      ],
    },
  ];

  return (
    <section id="pix" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-4 text-xs sm:text-sm font-medium text-neutral-600">
            <span className="flex items-center gap-1 font-semibold text-black">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
              Versell
            </span>
            <span className="text-neutral-300">|</span>
            <span>Pix sem limites</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            O Pix do jeito que <br className="hidden sm:inline" />
            <span className="text-black">o seu negócio precisa</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed">
            Rápido para o seu cliente, simples para o seu time e pronto para o volume que a sua operação tiver.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span
                  className={`inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${card.badgeClass}`}
                >
                  {card.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex flex-col space-y-3">
                {card.features.map((item, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444]">
                    <div className="w-4 h-4 rounded-full bg-[#D2FB07]/40 flex items-center justify-center text-black flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

