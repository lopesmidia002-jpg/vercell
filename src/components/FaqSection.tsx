"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "O que é a Versell?",
    answer:
      "A Versell é uma plataforma financeira focada em Pix: conta digital, API de Pix, subcontas e split em um só lugar. Operamos com a infraestrutura da Baas Pago Instituição de Pagamento, garantindo liquidação direta, tecnologia de ponta e total conformidade com o Banco Central do Brasil.",
  },
  {
    id: "faq-2",
    question: "Quais formas de pagamento a Versell oferece?",
    answer:
      "Nosso foco principal e especialidade é o ecossistema Pix: Pix Cobrança (QR Code dinâmico e Copia e Cola), Pix Automático (recorrências e assinaturas) e split automático. Para quem necessita de cartão de crédito e checkout unificado de alta conversão, disponibilizamos também o gateway complementar VersellPay.",
  },
  {
    id: "faq-3",
    question: "O Pix cai nos fins de semana e feriados?",
    answer:
      "Sim! O Pix funciona 24 horas por dia, 7 dias por semana, 365 dias por ano. As liquidações ocorrem em tempo real na sua conta digital Versell, inclusive durante as madrugadas, finais de semana e feriados nacionais.",
  },
  {
    id: "faq-4",
    question: "Dá para cobrar assinaturas e recorrências?",
    answer:
      "Sim. Com o Pix Automático, o cliente autoriza a cobrança uma única vez e as mensalidades subsequentes caem automaticamente a cada ciclo, sem fricção e reduzindo a inadimplência a quase zero.",
  },
  {
    id: "faq-5",
    question: "Posso dividir os recebimentos?",
    answer:
      "Com certeza. Nosso recurso de split automático divide cada Pix instantaneamente entre quantos sócios, coprodutores, parceiros ou afiliados você configurar, com saldos e conciliações calculados em milissegundos sem planilhas manuais.",
  },
  {
    id: "faq-6",
    question: "Como integro a Versell ao meu sistema?",
    answer:
      "Disponibilizamos uma API REST moderna nos padrões do Bacen, webhooks em tempo real, SDKs em Node.js, Python e PHP, autenticação mTLS + OAuth2, ambiente sandbox e coleção oficial no Postman para testes imediatos.",
  },
  {
    id: "faq-7",
    question: "Vocês atendem infoproduto e nicho hot?",
    answer:
      "Sim, atendemos com excelência produtores digitais, plataformas SaaS, e-commerces e também operações de conteúdo adulto legal (+18) com verificação de maioridade legal, operando com total discrição, estabilidade e conformidade bancária.",
  },
  {
    id: "faq-8",
    question: "Quem guarda o meu dinheiro?",
    answer:
      "Os saldos ficam custodiados e segregados em contas de pagamento operadas pela Baas Pago Instituição de Pagamento (CNPJ 37.387.828/0001-08), integrada ao Sistema de Pagamentos Brasileiro (SPB) e autorizada conforme as normas do Banco Central.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-4 text-xs sm:text-sm font-medium text-neutral-600">
              <span className="flex items-center gap-1 font-semibold text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D2FB07]" />
                Versell
              </span>
              <span className="text-neutral-300">|</span>
              <span>Perguntas frequentes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
              Perguntas <br />
              <span className="text-black">Frequentes</span>
            </h2>

            <p className="text-base text-[#666666] font-normal leading-relaxed">
              Ficou com alguma dúvida? A gente responde.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 flex flex-col space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    id={`button-${faq.id}`}
                    onClick={() => toggleItem(idx)}
                    className="w-full min-h-[56px] px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-neutral-900 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D2FB07]"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#D2FB07]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-black" />
                    </div>
                  </button>

                  <div
                    id={`panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`button-${faq.id}`}
                    hidden={!isOpen}
                    className={`px-6 pb-6 pt-1 text-sm sm:text-base text-[#666666] leading-relaxed border-t border-neutral-100 ${
                      isOpen ? "block animate-in fade-in-50 duration-200" : "hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
