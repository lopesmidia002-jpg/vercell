"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import TagBadge from "./TagBadge";

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
      "A Versell é uma plataforma financeira focada em Pix: conta digital, API de Pix, subcontas e split em um só lugar. Operamos com a infraestrutura da Bass Pago Instituição de Pagamento.",
  },
  {
    id: "faq-2",
    question: "Quais formas de pagamento a Versell oferece?",
    answer:
      "Nosso foco principal e especialidade é o ecossistema Pix: Pix Cobrança (QR Code dinâmico e Copia e Cola), Pix Automático (recorrências e mensalidades) e split na hora do pagamento. Para quem necessita de cartão de crédito e checkout unificado de alta conversão, disponibilizamos também o gateway complementar VersellPay.",
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
      "Sim. Com o Pix Automático, o seu cliente autoriza a cobrança uma única vez e as cobranças seguintes caem sozinhas a cada ciclo, sem fricção e reduzindo a inadimplência a quase zero.",
  },
  {
    id: "faq-5",
    question: "Posso dividir os recebimentos?",
    answer:
      "Com certeza. Nosso recurso de split divide cada recebimento automaticamente na hora do pagamento entre sellers, parceiros e coprodutores, com saldos e conciliação calculados instantaneamente sem necessidade de planilhas manuais.",
  },
  {
    id: "faq-6",
    question: "Como integro a Versell ao meu sistema?",
    answer:
      "Disponibilizamos uma API REST moderna no padrão Pix do Banco Central, webhooks em tempo real para cada evento, SDKs em Node.js, Python e PHP, autenticação mTLS + OAuth2, ambiente sandbox e coleção oficial no Postman para testes imediatos.",
  },
  {
    id: "faq-7",
    question: "Vocês atendem infoproduto e nicho hot?",
    answer:
      "Sim, atendemos operações de conteúdo adulto legal (+18) com verificação de idade, recebendo no Pix com discrição, estabilidade e total segurança bancária, além de infoprodutos, SaaS, ERPs e e-commerces.",
  },
  {
    id: "faq-8",
    question: "Quem guarda o meu dinheiro?",
    answer:
      "Os saldos ficam custodiados e segregados em contas de pagamento operadas pela Baas Pago Instituição de Pagamento (CNPJ 37.387.828/0001-08), integrada ao Sistema de Pagamentos Brasileiro (SPB) e autorizada conforme as normas do Banco Central.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Title: Badge e textos justificados à esquerda */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-28">
            <TagBadge text="Perguntas Frequentes" className="mb-4" />

            <h2 className="w-full text-left text-3xl sm:text-4xl md:text-[46px] lg:text-[48px] font-normal tracking-tight leading-tight mb-4">
              <span className="text-[#111111] font-normal">Perguntas</span>{" "}
              <span className="text-[#666666] font-normal">Frequentes</span>
            </h2>

            <p className="w-full text-left text-sm sm:text-base text-[#666666] font-normal leading-relaxed">
              Ficou com alguma dúvida? A gente responde.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-[20px] sm:rounded-[22px] transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border border-[#D2FB07] shadow-sm"
                      : "border border-black/[0.06] shadow-sm hover:border-black/10"
                  }`}
                >
                  <button
                    type="button"
                    id={`button-${faq.id}`}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D2FB07]"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${faq.id}`}
                  >
                    <span className="font-normal text-sm sm:text-base text-[#111111]">
                      {faq.question}
                    </span>
                    <Plus
                      className={`w-4 h-4 text-[#5B7500] stroke-[2] flex-shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-label={isOpen ? "Fechar pergunta" : "Abrir pergunta"}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`button-${faq.id}`}
                      onClick={() => toggleItem(idx)}
                      className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#666666] leading-relaxed animate-in fade-in-50 duration-200 cursor-pointer"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
