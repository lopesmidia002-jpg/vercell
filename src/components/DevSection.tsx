"use client";

import { Code, Key, Webhook, FlaskConical, ArrowRight } from "lucide-react";
import TagBadge from "./TagBadge";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: Code,
    text: "Cash In, Cash Out e Pix Automático",
  },
  {
    icon: Key,
    text: "Autenticação mTLS + OAuth2",
  },
  {
    icon: Webhook,
    text: "Webhooks em tempo real para cada evento",
  },
  {
    icon: FlaskConical,
    text: "Ambiente sandbox e coleção Postman",
  },
];

export default function DevSection() {
  return (
    <section id="desenvolvedores" className="py-20 md:py-28 bg-[#F6F7F2] scroll-mt-12">
      <div id="docs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: API Info (Badge e textos justificados à esquerda) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <TagBadge text="Desenvolvedores" className="mb-6" />

            <h2 className="w-full text-left text-[21px] min-[375px]:text-[23px] sm:text-3xl md:text-[44px] lg:text-[46px] text-[#111111] tracking-tight leading-[1.15] mb-5 whitespace-nowrap">
              <span className="font-normal text-[#111111]">API de Pix </span>
              <span className="font-bold text-[#5B7500]">simples e robusta</span>
            </h2>

            <p className="text-base text-[#666666] font-normal leading-relaxed mb-8 max-w-lg text-left mx-0">
              API REST no padrão Pix do Banco Central, com documentação completa e exemplos em cURL, Node.js, Python e PHP. Em pouco tempo o seu time já está emitindo Pix.
            </p>

            {/* Feature List with exact icons and olive green color (justificada à esquerda e em uma linha) */}
            <div className="flex flex-col space-y-4 mb-10 w-full items-start text-left mx-0">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 text-sm sm:text-[15px] text-[#111111]">
                  <item.icon className="w-5 h-5 text-[#5B7500] stroke-[1.8] flex-shrink-0" />
                  <span className="font-normal text-[#111111] whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons (centralizados no mobile, alinhados à esquerda no desktop) */}
            <div className="w-full flex items-center justify-center lg:justify-start gap-2.5 sm:gap-6 flex-wrap sm:flex-nowrap">
              <CtaButton href="#docs" size="md" className="!px-4 sm:!px-8 !text-xs sm:!text-base !min-h-[42px] sm:!min-h-[48px] whitespace-nowrap">
                Ver documentação
              </CtaButton>
              <a
                href="#postman"
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-[15px] font-normal text-[#5B7500] hover:text-[#455900] transition-colors py-2 whitespace-nowrap"
              >
                <span>Baixar coleção Postman</span>
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#5B7500] stroke-[1.8]" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Terminal Window */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C0D0E] rounded-[28px] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#141618]">
                {/* Window Dots */}
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D2FB07]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3F590A]" />
                </div>

                {/* Window File Name */}
                <span className="text-neutral-400 text-xs font-mono">
                  criar-cobranca.sh
                </span>

                {/* Pill Cash In */}
                <div className="px-3 py-1 rounded-full bg-[#D2FB07]/10 border border-[#D2FB07]/30 text-[#D2FB07] text-xs font-mono">
                  Cash In
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 sm:p-7 overflow-x-auto text-neutral-300">
                <pre className="font-mono text-xs sm:text-[13px] leading-[1.75]">
                  <code>
                    <span className="text-[#71717A]"># Crie uma cobrança Pix com QR Code dinâmico</span>
                    {"\n"}
                    <span className="text-white">curl</span> <span className="text-[#9CA3AF]">-X</span> <span className="text-[#38BDF8]">PUT</span> <span className="text-white">https://api.pix.basspago.com.br/cob/</span><span className="text-[#D2FB07]">&#123;txid&#125;</span> <span className="text-[#9CA3AF]">\</span>
                    {"\n"}
                    <span className="text-[#9CA3AF]">  --cert</span> <span className="text-white">client.crt</span> <span className="text-[#9CA3AF]">--key</span> <span className="text-white">client.key</span> <span className="text-[#9CA3AF]">\</span>
                    {"\n"}
                    <span className="text-[#9CA3AF]">  -H</span> <span className="text-[#D2FB07]">&quot;Authorization: Bearer </span><span className="text-[#FEF08A]">&#123;access_token&#125;</span><span className="text-[#D2FB07]">&quot;</span> <span className="text-[#9CA3AF]">\</span>
                    {"\n"}
                    <span className="text-[#9CA3AF]">  -d</span> <span className="text-[#D2FB07]">&#39;&#123;</span>
                    {"\n"}
                    <span className="text-white">    </span><span className="text-[#38BDF8]">&quot;calendario&quot;</span><span className="text-neutral-400">: &#123; </span><span className="text-[#38BDF8]">&quot;expiracao&quot;</span><span className="text-neutral-400">: </span><span className="text-[#D2FB07]">3600</span><span className="text-neutral-400"> &#125;,</span>
                    {"\n"}
                    <span className="text-white">    </span><span className="text-[#38BDF8]">&quot;valor&quot;</span><span className="text-neutral-400">: &#123; </span><span className="text-[#38BDF8]">&quot;original&quot;</span><span className="text-neutral-400">: </span><span className="text-[#D2FB07]">&quot;497.00&quot;</span><span className="text-neutral-400"> &#125;,</span>
                    {"\n"}
                    <span className="text-white">    </span><span className="text-[#38BDF8]">&quot;chave&quot;</span><span className="text-neutral-400">: </span><span className="text-[#D2FB07]">&quot;sua-chave-pix&quot;</span><span className="text-neutral-400">,</span>
                    {"\n"}
                    <span className="text-white">    </span><span className="text-[#38BDF8]">&quot;solicitacaoPagador&quot;</span><span className="text-neutral-400">: </span><span className="text-[#D2FB07]">&quot;Pedido #1042&quot;</span>
                    {"\n"}
                    <span className="text-[#D2FB07]">  &#125;&#39;</span>
                    {"\n\n"}
                    <span className="text-[#71717A]"># Resposta</span>
                    {"\n"}
                    <span className="text-neutral-400">&#123; </span><span className="text-[#38BDF8]">&quot;status&quot;</span><span className="text-neutral-400">: </span><span className="text-[#D2FB07]">&quot;ATIVA&quot;</span><span className="text-neutral-400">, </span><span className="text-[#38BDF8]">&quot;pixCopiaECola&quot;</span><span className="text-neutral-400">: </span><span className="text-[#D2FB07]">&quot;00020126580014br.gov...&quot;</span><span className="text-neutral-400"> &#125;</span>
                  </code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-6 pb-6 pt-1 text-xs text-neutral-500 font-sans">
                <span>Exemplo resumido da </span>
                <a href="#docs" className="text-[#A3E635] hover:underline cursor-pointer">
                  documentação oficial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
