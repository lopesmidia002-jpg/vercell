import TagBadge from "./TagBadge";

export default function ThreeSteps() {
  const steps = [
    {
      step: "01",
      title: "Fale com a gente",
      description:
        "Conte sobre o seu negócio para um especialista e envie os documentos da sua empresa.",
    },
    {
      step: "02",
      title: "Conta aprovada",
      description:
        "Depois da análise, sua conta digital é liberada com acesso ao painel, ao app e às credenciais de API.",
    },
    {
      step: "03",
      title: "Integre e receba",
      description:
        "Teste no sandbox, ligue no seu sistema e comece a receber no Pix — com o nosso time do seu lado.",
    },
  ];

  return (
    <section id="como-comecar" className="py-20 md:py-28 bg-[#F6F7F2] scroll-mt-12">
      <div id="planos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <TagBadge text="Como começar" className="mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Comece a receber em <span className="text-[#5B7500]">3 passos</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto mb-14">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-black/[0.06] shadow-sm relative group hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-black/[0.1] bg-[#FAFAFA] flex items-center justify-center font-mono text-base font-bold text-neutral-800 mb-6 group-hover:bg-[#D2FB07] group-hover:border-transparent transition-colors">
                {item.step}
              </div>

              <h3 className="text-xl font-bold text-black tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#planos"
            className="min-h-[48px] px-9 py-3.5 text-base font-bold text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(210,251,7,0.35)] hover:shadow-[0_6px_25px_rgba(210,251,7,0.5)] flex items-center justify-center text-center transform active:scale-[0.98]"
          >
            Abrir minha conta
          </a>
        </div>
      </div>
    </section>
  );
}

