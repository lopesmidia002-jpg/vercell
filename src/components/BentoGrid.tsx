import Image from "next/image";
import {
  Wallet,
  Code2,
  Users2,
  GitFork,
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.15]">
            Tudo o que você precisa para <br />
            <span className="text-[#5B7500]">receber e movimentar no Pix</span>
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="space-y-6">
          {/* Row 1: 2 Columns (Card 1: 2 cols, Card 2: 1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Conta Digital Versell (spans 2 columns) */}
            <div className="lg:col-span-2 bg-white rounded-[32px] border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col sm:flex-row justify-between relative group hover:shadow-md transition-all duration-300">
              <div className="p-7 sm:p-9 flex flex-col justify-between max-w-md z-10 flex-1">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                    <Wallet className="w-5 h-5 text-[#D2FB07]" />
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight mb-3">
                    Conta digital <span className="text-[#5B7500]">Versell</span>
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed mb-6">
                    Receba, pague, transfira e saque via Pix com saldo e extrato em tempo real — no painel e na palma da mão, pelo app Versell.
                  </p>
                </div>

                <a
                  href="#como-comecar"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5B7500] hover:text-[#485d00] transition-colors"
                >
                  <span>Abrir conta grátis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Woman with smartphone photo framed with smooth left fade */}
              <div className="relative w-full sm:w-[310px] md:w-[350px] lg:w-[380px] h-64 sm:h-auto min-h-[280px] sm:min-h-full flex-shrink-0 bg-neutral-900 overflow-hidden">
                <Image
                  src="/assets/Pagina-Versell-1-1-scaled.webp"
                  alt="Modelo usando o app mobile da Versell"
                  fill
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Soft left gradient fade into card background */}
                <div className="hidden sm:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="sm:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              </div>
            </div>

            {/* Card 2: API de Pix (1 column) */}
            <div className="lg:col-span-1 bg-white rounded-[32px] p-7 sm:p-9 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-start group hover:shadow-md transition-all duration-300">
              {/* Subtle ambient lime glow in bottom-right corner */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#D2FB07]/25 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D2FB07]/35 transition-colors" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                  <Code2 className="w-5 h-5 text-[#D2FB07]" />
                </div>

                <h3 className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight mb-3">
                  API de <span className="text-[#5B7500]">Pix</span>
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed">
                  Gere cobranças e acompanhe cada pagamento em tempo real, direto do seu sistema.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Columns (Subcontas, Split automático, Pix Automático) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 3: Subcontas */}
            <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <Users2 className="w-5 h-5 text-[#D2FB07]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight mb-3">
                Subcontas
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Crie contas para os sellers, parceiros e produtores que vendem com você, cada uma com o seu saldo.
              </p>
            </div>

            {/* Card 4: Split automático */}
            <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <GitFork className="w-5 h-5 text-[#D2FB07]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight mb-3">
                <span className="text-[#5B7500]">Split</span> <span className="text-[#111111]">automático</span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Divida cada Pix entre quantos recebedores precisar, no momento do pagamento e sem planilha.
              </p>
            </div>

            {/* Card 5: Pix Automático */}
            <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <Calendar className="w-5 h-5 text-[#D2FB07]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight mb-3">
                <span className="text-[#111111]">Pix </span>
                <span className="text-[#5B7500]">Automático</span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Assinaturas e mensalidades no Pix: o cliente autoriza uma vez e as cobranças seguintes caem sozinhas a cada ciclo.
              </p>
            </div>
          </div>

          {/* Row 3: 2 Columns (Card 6: 2 cols, Card 7: 1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 6: Painel e monitoramento (spans 2 columns) */}
            <div className="lg:col-span-2 bg-white rounded-[32px] p-7 sm:p-9 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                  <Eye className="w-5 h-5 text-[#D2FB07]" />
                </div>

                <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight mb-3">
                  <span className="text-[#111111]">Painel e </span>
                  <span className="text-[#5B7500]">monitoramento</span>
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed max-w-xl mb-6">
                  Acompanhe saldo, recebimentos, splits e saques em tempo real e configure seus webhooks pelo Finance, o painel web da Versell.
                </p>
              </div>

              {/* MacBooks Mockup positioned centered at bottom */}
              <div className="relative w-full max-w-[480px] sm:max-w-[520px] h-48 sm:h-56 mx-auto -mb-7 sm:-mb-9">
                <Image
                  src="/assets/MacBook-Air-2022-3.webp"
                  alt="Dashboard de Extrato, Home Banking e Gráficos analíticos Versell"
                  fill
                  className="object-contain object-bottom group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 7: Antifraude inteligente (1 column) */}
            <div className="lg:col-span-1 bg-white rounded-[32px] p-7 sm:p-9 border border-black/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-start group hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#D2FB07]" />
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight mb-3">
                <span className="text-[#111111]">Antifraude </span>
                <span className="text-[#5B7500]">inteligente</span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                Camadas de proteção e monitoramento contínuo para manter a sua operação segura em qualquer volume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
