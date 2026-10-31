"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#F6F7F2]/95 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3"
        : "bg-[#F6F7F2]/80 backdrop-blur-md py-4 sm:py-5 border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 relative z-50 focus:outline-none focus:ring-2 focus:ring-[#D2FB07] rounded-lg p-1"
            aria-label="Página Inicial Versell"
          >
            <Image
              src="/assets/logo-versell4.svg"
              alt="Versell"
              width={130}
              height={28}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links (bare and minimal on page background) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-normal"
          >
            <Link
              href="#pix"
              className="text-[#5B7500] hover:text-[#455900] transition-colors"
            >
              Pix
            </Link>
            <Link
              href="#produtos"
              className="text-[#222222] hover:text-black transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="#para-quem"
              className="text-[#222222] hover:text-black transition-colors"
            >
              Para quem
            </Link>
            <Link
              href="#desenvolvedores"
              className="text-[#222222] hover:text-black transition-colors"
            >
              Desenvolvedores
            </Link>
            <Link
              href="#faq"
              className="text-[#222222] hover:text-black transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#desenvolvedores"
              className="inline-flex items-center gap-1 text-[#222222] hover:text-black transition-colors"
            >
              <span>Documentação</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-3.5">
            <a
              href="https://finance.versell.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-normal text-[#111111] bg-white border border-black/15 hover:border-black/30 rounded-full transition-all shadow-sm"
            >
              Entrar
            </a>
            <CtaButton href="#suporte" size="sm">
              Falar com especialista
            </CtaButton>
          </div>

          {/* Mobile Hamburger Button (min 44x44px touch target) */}
          <div className="flex md:hidden items-center space-x-2 relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-2xl bg-white border border-black/[0.08] text-black shadow-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D2FB07] active:scale-95 transition-transform"
              aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Backdrop */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden">
          {/* Backdrop overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Slide-out Menu Panel */}
          <nav
            aria-label="Menu móvel"
            className="fixed inset-x-0 top-0 pt-20 pb-8 px-6 bg-white border-b border-black/[0.08] shadow-2xl z-40 flex flex-col space-y-2 animate-in slide-in-from-top-4 duration-300 max-h-[90vh] overflow-y-auto"
          >
            <Link
              href="#pix"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-normal text-[#5B7500] hover:text-[#455900] px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Pix
            </Link>
            <Link
              href="#produtos"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-normal text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="#para-quem"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-normal text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Para quem
            </Link>
            <Link
              href="#desenvolvedores"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-normal text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Desenvolvedores
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-normal text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#desenvolvedores"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-normal text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors justify-between"
            >
              <span>Documentação da API</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>

            <div className="pt-4 mt-2 border-t border-neutral-100 flex flex-col space-y-3">
              <a
                href="https://finance.versell.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] w-full flex items-center justify-center text-center font-normal text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-full py-3 transition-colors"
              >
                Entrar no painel
              </a>
              <CtaButton
                href="#suporte"
                size="md"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Falar com especialista
              </CtaButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
