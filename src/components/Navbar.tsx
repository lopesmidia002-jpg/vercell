"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#F6F7F2]/95 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3"
        : "bg-[#F6F7F2]/80 backdrop-blur-md py-4 sm:py-5 border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between">
          {/* Logo (centralizado no mobile, alinhado à esquerda no desktop) */}
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 relative z-50 focus:outline-none focus:ring-2 focus:ring-[#D2FB07] rounded-lg p-1"
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
        </div>
      </div>
    </header>
  );
}
