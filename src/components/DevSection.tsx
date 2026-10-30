"use client";

import { useState } from "react";
import { Check, Copy, ArrowUpRight, Terminal } from "lucide-react";

export default function DevSection() {
  const [activeTab, setActiveTab] = useState<"curl" | "node" | "python">("curl");
  const [copied, setCopied] = useState(false);

  const snippets = {
    curl: `curl -X POST https://api.versell.com.br/v1/pix/cob \\
  --cert client.crt --key client.key \\
  -H "Authorization: Bearer {access_token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "calendario": { "expiracao": 3600 },
    "valor": { "original": "149.90" },
    "chave": "sua-chave-pix",
    "solicitacaoPagador": "Pedido #2941"
  }'`,
    node: `import { VersellClient } from '@versell/sdk';

const versell = new VersellClient({
  clientId: process.env.VERSELL_CLIENT_ID,
  certificate: './certs/client.p12',
});

const charge = await versell.pix.createImmediateCharge({
  valor: '149.90',
  chave: 'sua-chave-pix',
  solicitacaoPagador: 'Pedido #2941',
  split: [
    { subconta: 'sub_seller_01', percentual: 80.0 },
    { subconta: 'sub_afiliado_02', percentual: 20.0 }
  ]
});`,
    python: `from versell import VersellClient

client = VersellClient(
    client_id="seu_client_id",
    cert_path="./certs/client.pem"
)

response = client.pix.create_charge(
    valor="149.90",
    chave="sua-chave-pix",
    solicitacao_pagador="Pedido #2941"
)
print("QR Code Copia e Cola:", response.copia_e_cola)`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="desenvolvedores" className="py-20 md:py-28 bg-[#F6F7F2] scroll-mt-12">
      <div id="docs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: API Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-4 text-xs sm:text-sm font-medium text-neutral-600">
              <span className="flex items-center gap-1 font-semibold text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
                Versell
              </span>
              <span className="text-neutral-300">|</span>
              <span>Desenvolvedores</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
              API de Pix <br />
              <span className="text-[#5B7500]">simples e robusta</span>
            </h2>

            <p className="text-base text-[#666666] font-normal leading-relaxed mb-8">
              API REST no padrão Pix do Banco Central, com documentação completa e exemplos em cURL, Node.js, Python e PHP. Em pouco tempo o seu time já está emitindo Pix.
            </p>

            {/* List */}
            <div className="flex flex-col space-y-3.5 mb-10 w-full">
              <div className="flex items-center gap-3 text-sm text-[#333333]">
                <div className="w-5 h-5 rounded-full bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Cash-In, Cash-Out e Pix Automático</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#333333]">
                <div className="w-5 h-5 rounded-full bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Autenticação mTLS + OAuth2</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#333333]">
                <div className="w-5 h-5 rounded-full bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Webhooks em tempo real para cada evento</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#333333]">
                <div className="w-5 h-5 rounded-full bg-[#D2FB07] flex items-center justify-center text-black flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Ambiente sandbox e coleção Postman</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#docs"
                className="px-6 py-3 text-sm font-bold text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all shadow-sm"
              >
                Ver documentação
              </a>
              <a
                href="#postman"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800 hover:text-black transition-colors"
              >
                <span>Baixar coleção Postman</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Terminal Window */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C0D0E] rounded-3xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#141517]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="text-neutral-400 text-xs ml-2 hidden sm:inline">
                    POST /v1/pix/charges
                  </span>
                </div>

                <div className="flex items-center space-x-1 sm:space-x-2 bg-black/40 p-1 rounded-xl border border-white/5">
                  <button
                    onClick={() => setActiveTab("curl")}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                      activeTab === "curl"
                        ? "bg-white/15 text-white font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setActiveTab("node")}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                      activeTab === "node"
                        ? "bg-white/15 text-white font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Node.js
                  </button>
                  <button
                    onClick={() => setActiveTab("python")}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                      activeTab === "python"
                        ? "bg-white/15 text-white font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Python
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Copiar código"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D2FB07]" />
                      <span className="text-[#D2FB07]">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 sm:p-6 overflow-x-auto text-neutral-300 leading-relaxed max-h-[380px]">
                <pre>
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>

              {/* Mock Response Bar */}
              <div className="px-5 py-3 bg-[#111214] border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-neutral-400">Status:</span>
                  <span className="text-[#10B981] font-semibold">201 Created</span>
                </div>
                <span className="text-neutral-500">Tempo de resposta: 184ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

