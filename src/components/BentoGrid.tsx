import Image from "next/image";
import {
  Code,
  Users2,
  GitFork,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-4 text-xs sm:text-sm font-medium text-neutral-600">
            <span className="flex items-center gap-1 font-semibold text-black">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
              Versell
            </span>
            <span className="text-neutral-300">|</span>
            <span>Produtos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Tudo o que você precisa para <br className="hidden sm:inline" />
            <span className="text-black">receber e movimentar no Pix</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Conta Digital Versell (Editorial Card) */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 mb-6">
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <Smartphone className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                Conta digital Versell
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                Receba, pague, transfira e saque via Pix com saldo e extrato em
                tempo real — no painel e na palma da mão, pelo app Versell.
              </p>
              <a
                href="#planos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-neutral-700 group-hover:translate-x-1 transition-transform"
              >
                <span>Abrir conta grátis</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>
            </div>

            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mt-2 bg-neutral-900">
              <Image
                src="/assets/Pagina-Versell-1-1-scaled.webp"
                alt="App Mobile Versell na mão do usuário"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: API de Pix */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#D2FB07]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D2FB07]/30 transition-colors" />

            <div>
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <Code className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                API de Pix
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Gere cobranças e acompanhe cada pagamento em tempo real, direto do seu sistema.
              </p>
            </div>

            <div className="mt-8 p-4 bg-[#FAFAFA] rounded-2xl border border-black/[0.05]">
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2 font-mono">
                <span>POST /v1/pix/charges</span>
                <span className="text-[#059669] font-bold">200 OK</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-600 bg-white p-2.5 rounded-lg border border-black/[0.04] overflow-x-auto">
                <code>&#123;&quot;status&quot;: &quot;CONCLUIDA&quot;, &quot;txid&quot;: &quot;vsl_9921a&quot;&#125;</code>
              </div>
            </div>
          </div>

          {/* Card 3: Subcontas */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <Users2 className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                Subcontas
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Crie contas para os sellers, parceiros e produtores que vendem com você, cada uma com o seu saldo.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
              <span>Saldos segregados</span>
              <span className="text-black font-semibold">100% BaaS Bacen</span>
            </div>
          </div>

          {/* Card 4: Split automático */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <GitFork className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                Split automático
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Divida cada Pix entre quantos recebedores precisar, no momento do pagamento e sem planilha.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
              <span>Divisão em milissegundos</span>
              <span className="text-black font-semibold">Zero retrabalho</span>
            </div>
          </div>

          {/* Card 5: Pix Automático */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <RefreshCw className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                Pix Automático
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Assinaturas e mensalidades no Pix: o cliente autoriza uma vez e as cobranças seguintes caem sozinhas a cada ciclo.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
              <span>Recorrência programada</span>
              <span className="text-[#059669] font-bold">Sem inadimplência</span>
            </div>
          </div>

          {/* Card 6: Antifraude inteligente */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                Antifraude inteligente
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Camadas de proteção e monitoramento contínuo para manter a sua operação segura em qualquer volume.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
              <span>Análise preditiva 24/7</span>
              <span className="text-black font-semibold">Baixo chargeback</span>
            </div>
          </div>

          {/* Card 7: Painel e monitoramento (Full Width 2 columns / 3 columns wide card) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-3xl p-7 sm:p-9 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col lg:flex-row items-center justify-between gap-8 group">
            <div className="max-w-xl">
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                <BarChart3 className="w-5 h-5 text-[#D2FB07]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3">
                Painel e monitoramento
              </h3>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Acompanhe saldo, recebimentos, splits e saques em tempo real e configure seus webhooks pelo Finance, o painel web da Versell.
              </p>
            </div>

            <div className="relative w-full lg:w-[540px] h-48 sm:h-64 flex items-center justify-center">
              <Image
                src="/assets/MacBook-Air-2022-3.webp"
                alt="Mockup do Painel de Monitoramento Finance Versell em MacBooks"
                fill
                className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

