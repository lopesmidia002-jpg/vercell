import {
  CloudLightning,
  ShoppingCart,
  GraduationCap,
  Layers,
  Network,
  Flame,
} from "lucide-react";

const solutions = [
  {
    icon: CloudLightning,
    title: "SaaS",
    description:
      "Cobre mensalidades com Pix Automático: o cliente autoriza uma vez e as cobranças seguintes caem sozinhas a cada ciclo.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Pix no checkout com confirmação instantânea: o pedido é liberado no mesmo segundo de pagamento.",
  },
  {
    icon: GraduationCap,
    title: "Infoproduto",
    description:
      "Venda cursos, mentorias e comunidades no Pix e divida cada venda com coprodutores e afiliados.",
  },
  {
    icon: Layers,
    title: "ERP",
    description:
      "Ofereça Pix integrado aos seus clientes e transforme o seu sistema de gestão em uma central de recebimentos.",
  },
  {
    icon: Network,
    title: "Gateways e plataformas",
    description:
      "Use subcontas e split para operar Pix em escala para todos os seus sellers.",
  },
  {
    icon: Flame,
    title: "Nicho hot",
    description:
      "Operações de conteúdo adulto legal (+18), com verificação de idade, recebendo no Pix com discrição e segurança.",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="para-quem" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-4 text-xs sm:text-sm font-medium text-neutral-600">
            <span className="flex items-center gap-1 font-semibold text-black">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
              Versell
            </span>
            <span className="text-neutral-300">|</span>
            <span>Para quem é</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Feita para quem <span className="text-black">vende online</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed">
            Do SaaS ao infoproduto, o Pix da Versell se encaixa na sua operação.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white mb-6 shadow-sm">
                  <Icon className="w-5 h-5 text-[#D2FB07]" />
                </div>

                <h3 className="text-xl font-bold text-black tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

