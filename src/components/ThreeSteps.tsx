import TagBadge from "./TagBadge";
import CtaButton from "./CtaButton";

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
        {/* Header (Badge e textos justificados à esquerda no mobile) */}
        <div className="flex flex-col items-start text-left sm:items-center sm:text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <TagBadge text="Como começar" className="mb-4" />

          <h2 className="w-full text-left sm:text-center text-[21px] min-[375px]:text-[23px] sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-tight whitespace-nowrap">
            <span className="font-normal text-[#111111]">Comece a receber em </span>
            <span className="font-bold text-[#5B7500]">3 passos</span>
          </h2>
        </div>

        {/* Steps Timeline Container (Sem cards brancos, com linha contínua neon idêntica ao original) */}
        <div className="relative max-w-6xl mx-auto mb-16 sm:mb-20">
          {/* Linha horizontal conectiva em verde neon suave no desktop */}
          <div className="hidden md:block absolute top-7 sm:top-8 left-7 sm:left-8 right-0 h-[1px] bg-gradient-to-r from-[#DFFA5A] via-[#DFFA5A]/80 to-transparent z-0" />

          {/* Grid dos 3 Passos (alinhamento à esquerda, sem caixas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                {/* Círculo numerado com borda neon fina, número verde e fundo branco */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#D2FB07] flex items-center justify-center font-bold text-base sm:text-lg text-[#557008] shadow-[0_2px_10px_rgba(210,251,7,0.18)] mb-6 sm:mb-8 flex-shrink-0">
                  {item.step}
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#111111] tracking-tight mb-3">
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
          <CtaButton href="#planos" size="lg">
            Abrir minha conta
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

