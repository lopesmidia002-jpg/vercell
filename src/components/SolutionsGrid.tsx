import {
  Layers,
  ShoppingCart,
  MonitorPlay,
  Building,
  Landmark,
  Eye,
} from "lucide-react";
import TagBadge from "./TagBadge";

const solutions = [
  {
    icon: Layers,
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
    icon: MonitorPlay,
    title: "Infoproduto",
    description:
      "Venda cursos, mentorias e comunidades no Pix e divida cada venda com coprodutores e afiliados.",
  },
  {
    icon: Building,
    title: "ERP",
    description:
      "Ofereça Pix integrado aos seus clientes e transforme o seu sistema de gestão em uma central de recebimentos.",
  },
  {
    icon: Landmark,
    title: "Gateways e plataformas",
    description:
      "Use subcontas e split para operar Pix em escala para todos os seus sellers.",
  },
  {
    icon: Eye,
    title: "Nicho hot",
    description:
      "Operações de conteúdo adulto legal (+18), com verificação de idade, recebendo no Pix com discrição e segurança.",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="para-quem" className="py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <TagBadge text="Para quem é" className="mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-tight mb-4">
            <span className="font-normal text-[#111111]">Feita para quem </span>
            <span className="font-bold text-[#5B7500]">vende online</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed">
            Do SaaS ao infoproduto, o Pix da Versell se encaixa na sua operação.
          </p>
        </div>

        {/* 6 Cards Grid - Proporções e Ícones fiéis ao original */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-8 sm:p-9 md:p-10 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start min-h-[260px] sm:min-h-[280px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 sm:mb-8 shadow-sm">
                  <Icon className="w-6 h-6 text-[#D2FB07] stroke-[1.8]" />
                </div>

                <h3 className="text-xl sm:text-[22px] font-normal text-[#111111] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#666666] leading-relaxed">
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

