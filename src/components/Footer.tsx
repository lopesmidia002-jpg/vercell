"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Instagram, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Action Buttons */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <Image
                src="/assets/logo-versell3.svg"
                alt="Versell"
                width={140}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-sm">
              Conta digital, API de Pix, subcontas e split para quem vende online.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#suporte"
                className="min-h-[44px] px-6 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all text-center flex items-center justify-center shadow-sm"
              >
                Falar com especialista
              </a>
              <a
                href="#como-comecar"
                className="min-h-[44px] px-6 py-2.5 text-xs sm:text-sm font-medium text-white bg-white/5 border border-white/15 hover:bg-white/10 rounded-full transition-all text-center flex items-center justify-center"
              >
                Abrir conta grátis
              </a>
            </div>
          </div>

          {/* Column: Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Menu
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#pix" className="hover:text-white transition-colors">
                  Pix
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#para-quem" className="hover:text-white transition-colors">
                  Para quem
                </Link>
              </li>
              <li>
                <Link href="#desenvolvedores" className="hover:text-white transition-colors">
                  Desenvolvedores
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="#desenvolvedores"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Documentação da API</span>
                </a>
              </li>
              <li>
                <a
                  href="https://finance.versell.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Finance (painel)
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Políticas e Termos */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Políticas e Termos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#termos-api" className="hover:text-white transition-colors">
                  Termos de Uso da API
                </a>
              </li>
              <li>
                <a href="#privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#pld" className="hover:text-white transition-colors">
                  Prevenção à Lavagem de Dinheiro (PLD-FT)
                </a>
              </li>
              <li>
                <a href="#atividades" className="hover:text-white transition-colors">
                  Atividades Proibidas e Restritas
                </a>
              </li>
              <li>
                <a href="#etica" className="hover:text-white transition-colors">
                  Código de Ética e Conduta
                </a>
              </li>
              <li>
                <a href="#seguranca" className="hover:text-white transition-colors">
                  Segurança da Informação
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#politicas"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D2FB07] hover:underline"
                >
                  <span>Central de políticas</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Fale Conosco */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Fale Conosco
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-400">
                <p>
                  <a
                    href="mailto:contato@versell.com.br"
                    className="hover:text-white transition-colors"
                  >
                    contato@versell.com.br
                  </a>
                </p>
                <p>
                  Compliance:{" "}
                  <a
                    href="mailto:compliance@versell.com.br"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    compliance@versell.com.br
                  </a>
                </p>
                <p>
                  Denúncias:{" "}
                  <a
                    href="mailto:denuncias@versell.com.br"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    denuncias@versell.com.br
                  </a>
                </p>
                <p className="pt-1">
                  <a
                    href="https://wa.me/5584992315908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-[#D2FB07] transition-colors"
                  >
                    +55 84 9 9231-5908
                  </a>
                </p>
                <p className="pt-2 text-neutral-500 font-mono text-xs">
                  CNPJ: 56.522.426/0001-23
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 transition-all"
                aria-label="Voltar para o Topo"
              >
                <span>Voltar para o Topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer */}
        <div className="py-8 border-b border-white/5 text-xs text-neutral-500 leading-relaxed max-w-5xl">
          <p>
            A Versell Tecnologia LTDA (CNPJ 56.522.426/0001-23) é uma empresa de
            tecnologia e não é instituição financeira nem instituição de
            pagamento credenciada pelo Banco Central do Brasil. As contas de
            pagamento, as transações Pix e a liquidação de recursos são operadas
            pela Baas Pago Instituição de Pagamento (CNPJ 37.387.828/0001-08).
          </p>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Versell. Todos os direitos reservados.</p>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Versell"
              className="min-w-[44px] min-h-[44px] rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5584992315908"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Versell"
              className="min-w-[44px] min-h-[44px] rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-400 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

