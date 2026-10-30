"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3"
          : "bg-transparent py-4 sm:py-5"
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

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/[0.06] shadow-sm text-sm font-medium text-[#444444]"
          >
            <Link
              href="#pix"
              className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-black/[0.04] transition-colors"
            >
              Pix
            </Link>
            <Link
              href="#produtos"
              className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-black/[0.04] transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="#para-quem"
              className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-black/[0.04] transition-colors"
            >
              Para quem
            </Link>
            <Link
              href="#desenvolvedores"
              className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-black/[0.04] transition-colors"
            >
              Desenvolvedores
            </Link>
            <Link
              href="#faq"
              className="px-3.5 py-1.5 rounded-full hover:text-black hover:bg-black/[0.04] transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#desenvolvedores"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full hover:text-black hover:bg-black/[0.04] transition-colors gap-1 text-black font-semibold"
            >
              <span>Documentação</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://finance.versell.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-[#111111] hover:text-black transition-colors rounded-full"
            >
              Entrar
            </a>
            <a
              href="#suporte"
              className="px-5 py-2.5 text-sm font-bold text-black bg-[#D2FB07] hover:bg-[#c3ec00] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Falar com especialista
            </a>
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
              className="min-h-[48px] flex items-center text-base font-semibold text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Pix
            </Link>
            <Link
              href="#produtos"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-semibold text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="#para-quem"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-semibold text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Para quem
            </Link>
            <Link
              href="#desenvolvedores"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-semibold text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              Desenvolvedores
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-semibold text-neutral-800 hover:text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#desenvolvedores"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] flex items-center text-base font-bold text-black px-4 rounded-xl hover:bg-neutral-100 active:bg-neutral-200 transition-colors justify-between"
            >
              <span>Documentação da API</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>

            <div className="pt-4 mt-2 border-t border-neutral-100 flex flex-col space-y-3">
              <a
                href="https://finance.versell.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] w-full flex items-center justify-center text-center font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-full py-3 transition-colors"
              >
                Entrar no painel
              </a>
              <a
                href="#suporte"
                onClick={() => setIsOpen(false)}
                className="min-h-[48px] w-full flex items-center justify-center text-center font-bold text-black bg-[#D2FB07] hover:bg-[#c4ec00] active:scale-[0.98] rounded-full py-3 shadow-md transition-all"
              >
                Falar com especialista
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
