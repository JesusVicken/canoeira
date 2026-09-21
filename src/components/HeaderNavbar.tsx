import React, { useState, useEffect } from 'react';
import { CanoeiraLogo } from './CanoeiraLogo';
import { Instagram, Menu, X, ArrowUpRight, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderNavbarProps {
  onNotifyClick: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onNotifyClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-4 sm:px-8 ${
          scrolled
            ? 'bg-[#19100B]/90 backdrop-blur-md border-b border-[#ECE5D8]/10 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#19100B]/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            data-cursor="CANOEIRA"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <CanoeiraLogo size="sm" color="cyan" />
            <span className="font-serif text-2xl font-bold tracking-tight text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
              Canoeira<span className="text-[#00F5D4]">.</span>
            </span>
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-7 font-syne text-xs tracking-widest uppercase text-[#ECE5D8]/70">
            <button
              onClick={() => scrollToSection('linhas')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="LINHAS"
            >
              3 Linhas
            </button>
            <button
              onClick={() => scrollToSection('linha-pausa')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer flex items-center gap-1.5 text-[#00F5D4]"
              data-cursor="PAUSA"
            >
              <span>Linha Pausa</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#00F5D4]/20 text-[9px] font-bold">Novo</span>
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="CONCEITO"
            >
              Conceito
            </button>
            <button
              onClick={() => scrollToSection('colecoes')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="PRODUTOS"
            >
              Vitrine
            </button>
            <button
              onClick={() => scrollToSection('instagram')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="INSTAGRAM"
            >
              Instagram
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Instagram Direct Link */}
            <a
              href="https://www.instagram.com/usecanoeira/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="INSTAGRAM"
              className="hidden sm:flex items-center justify-center p-2 rounded-full border border-[#ECE5D8]/20 bg-[#241610]/60 text-[#ECE5D8] hover:text-[#00F5D4] hover:border-[#00F5D4]/50 transition-all"
              title="@usecanoeira no Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Clean Notification Action Button */}
            <button
              onClick={onNotifyClick}
              data-cursor="AVISAR"
              className="relative group px-4 sm:px-5 py-2 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#66FFEA] active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,245,212,0.3)]"
            >
              <Bell className="w-3.5 h-3.5 fill-[#19100B]" />
              <span>Avisar Inauguração</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#ECE5D8] hover:text-[#00F5D4] transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#19100B]/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-4 font-serif text-2xl text-[#ECE5D8]">
              <button
                onClick={() => scrollToSection('linhas')}
                className="text-left hover:text-[#00F5D4] transition-colors py-3 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>01. As 3 Linhas da Marca</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('linha-pausa')}
                className="text-left hover:text-[#00F5D4] transition-colors py-3 border-b border-[#ECE5D8]/10 flex items-center justify-between text-[#00F5D4]"
              >
                <div className="flex items-center gap-2">
                  <span>02. Linha Pausa</span>
                  <span className="text-xs font-syne uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00F5D4]/20 text-[#00F5D4]">Novidade</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('colecoes')}
                className="text-left hover:text-[#00F5D4] transition-colors py-3 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>03. Vitrine de Produtos</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('manifesto')}
                className="text-left hover:text-[#00F5D4] transition-colors py-3 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>04. Conceito da Marca</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('instagram')}
                className="text-left hover:text-[#00F5D4] transition-colors py-3 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>05. Instagram Oficial</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/usecanoeira/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#ECE5D8]/20 bg-[#241610] text-[#ECE5D8] font-syne text-xs uppercase tracking-widest"
              >
                <Instagram className="w-4 h-4 text-[#00F5D4]" />
                <span>Siga @usecanoeira</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNotifyClick();
                }}
                className="w-full py-3.5 rounded-xl bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider text-center"
              >
                Receber Aviso da Inauguração
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
