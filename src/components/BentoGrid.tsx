import Image from "next/image";
import {
  Wallet,
  Code,
  Users,
  Split,
  Calendar,
  Eye,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import TagBadge from "./TagBadge";

export default function BentoGrid() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <TagBadge text="Produtos" className="mb-4" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15]">
            <span className="font-normal">Tudo o que você precisa para</span> <br />
            <span className="font-bold text-[#5B7500]">receber e movimentar no Pix</span>
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="space-y-6">
          {/* Row 1: 2 Columns (Card 1: 2 cols, Card 2: 1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Conta Digital Versell (spans 2 columns) */}
            <div className="lg:col-span-2 bg-white rounded-[32px] border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col sm:flex-row justify-between relative group hover:shadow-md transition-all duration-300 min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between max-w-md z-10 flex-1">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                    <Wallet className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
                  </div>

                  <h3 className="text-2xl sm:text-[28px] tracking-tight mb-3">
                    <span className="font-normal text-[#111111]">Conta digital </span>
                    <span className="font-bold text-[#5B7500]">Versell</span>
                  </h3>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6">
                    Receba, pague, transfira e saque via Pix com saldo e extrato em tempo real — no painel e na palma da mão, pelo app Versell.
                  </p>
                </div>

                <a
                  href="#como-comecar"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5B7500] hover:text-[#485d00] transition-colors mt-auto"
                >
                  <span>Abrir conta grátis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Woman with smartphone photo framed with smooth left fade */}
              <div className="relative w-full sm:w-[320px] md:w-[380px] lg:w-[440px] min-h-[340px] sm:min-h-full flex-shrink-0 bg-neutral-900 overflow-hidden">
                <Image
                  src="/assets/Pagina-Versell-1-1-scaled.webp"
                  alt="Modelo usando o app mobile da Versell"
                  fill
                  style={{ objectPosition: "74% top" }}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Soft left gradient fade into card background */}
                <div className="hidden sm:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="sm:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              </div>
            </div>

            {/* Card 2: API de Pix (1 column) */}
            <div className="lg:col-span-1 bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-start group hover:shadow-md transition-all duration-300 min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]">
              {/* Subtle ambient lime glow in bottom-right corner */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D2FB07]/30 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D2FB07]/40 transition-colors" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                  <Code className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
                </div>

                <h3 className="text-2xl sm:text-[28px] tracking-tight mb-3">
                  <span className="font-normal text-[#111111]">API de </span>
                  <span className="font-bold text-[#5B7500]">Pix</span>
                </h3>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Gere cobranças e acompanhe cada pagamento em tempo real, direto do seu sistema.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Columns (Subcontas, Split automático, Pix Automático) - Banners maiores idênticos ao original */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 3: Subcontas */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start min-h-[350px] sm:min-h-[380px] group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <Users className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-[#5B7500] tracking-tight mb-3">
                Subcontas
              </h3>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Crie contas para os sellers, parceiros e produtores que vendem com você, cada uma com o seu saldo.
              </p>
            </div>

            {/* Card 4: Split automático */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start min-h-[350px] sm:min-h-[380px] group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <Split className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] tracking-tight mb-3">
                <span className="font-bold text-[#5B7500]">Split</span>{" "}
                <span className="font-normal text-[#111111]">automático</span>
              </h3>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Divida cada Pix entre quantos recebedores precisar, no momento do pagamento e sem planilha.
              </p>
            </div>

            {/* Card 5: Pix Automático */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start min-h-[350px] sm:min-h-[380px] group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <Calendar className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] tracking-tight mb-3">
                <span className="font-normal text-[#111111]">Pix </span>
                <span className="font-bold text-[#5B7500]">Automático</span>
              </h3>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Assinaturas e mensalidades no Pix: o cliente autoriza uma vez e as cobranças seguintes caem sozinhas a cada ciclo.
              </p>
            </div>
          </div>

          {/* Row 3: 2 Columns (Card 6: 2 cols, Card 7: 1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 6: Painel e monitoramento (spans 2 columns) */}
            <div className="lg:col-span-2 bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] group hover:shadow-md transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                  <Eye className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
                </div>

                <h3 className="text-2xl sm:text-[28px] tracking-tight mb-3">
                  <span className="font-normal text-[#111111]">Painel e </span>
                  <span className="font-bold text-[#5B7500]">monitoramento</span>
                </h3>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl mb-6">
                  Acompanhe saldo, recebimentos, splits e saques em tempo real e configure seus webhooks pelo Finance, o painel web da Versell.
                </p>
              </div>

              {/* MacBooks Mockup positioned centered at bottom */}
              <div className="relative w-full max-w-[540px] sm:max-w-[620px] h-60 sm:h-72 mx-auto -mb-8 sm:-mb-10">
                <Image
                  src="/assets/MacBook-Air-2022-3.webp"
                  alt="Dashboard de Extrato, Home Banking e Gráficos analíticos Versell"
                  fill
                  className="object-contain object-bottom group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 7: Antifraude inteligente (1 column) */}
            <div className="lg:col-span-1 bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#D2FB07] stroke-[2]" />
              </div>

              <h3 className="text-2xl sm:text-[28px] tracking-tight mb-3">
                <span className="font-normal text-[#111111]">Antifraude </span>
                <span className="font-bold text-[#5B7500]">inteligente</span>
              </h3>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Camadas de proteção e monitoramento contínuo para manter a sua operação segura em qualquer volume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
