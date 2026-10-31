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
        "Depois da análise, sua conta digital é liberada com acesso ao painel, ao app e às credenciais da API.",
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <TagBadge text="Como começar" className="mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-tight">
            <span className="font-normal text-[#111111]">Comece a receber em </span>
            <span className="font-bold text-[#5B7500]">3 passos</span>
          </h2>
        </div>

        {/* Steps Timeline Container (Sem cards brancos, com linha contínua neon idêntica ao original) */}
        <div className="relative max-w-6xl mx-auto mb-16 sm:mb-20">
          {/* Linha horizontal conectiva em verde neon no desktop */}
          <div className="hidden md:block absolute top-7 sm:top-8 left-8 right-8 h-[2px] bg-[#D2FB07] z-0" />

          {/* Grid dos 3 Passos (alinhamento à esquerda, sem caixas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                {/* Círculo numerado com borda neon e fundo branco cobrindo a linha */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D2FB07] flex items-center justify-center font-normal text-base sm:text-lg text-[#111111] shadow-[0_2px_8px_rgba(210,251,7,0.2)] mb-6 sm:mb-8 flex-shrink-0">
                  {item.step}
                </div>

                <h3 className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#666666] font-normal leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button Ampliado idêntico ao original */}
        <div className="flex justify-center">
          <a
            href="#planos"
            className="min-h-[56px] sm:min-h-[60px] px-12 sm:px-16 py-3.5 sm:py-4 text-base sm:text-[17px] font-normal text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(210,251,7,0.35)] hover:shadow-[0_6px_25px_rgba(210,251,7,0.5)] flex items-center justify-center text-center transform active:scale-[0.98]"
          >
            Abrir minha conta
          </a>
        </div>
      </div>
    </section>
  );
}

