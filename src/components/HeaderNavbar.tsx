import React, { useState, useEffect } from 'react';
import { CanoeiraLogo } from './CanoeiraLogo';
import { Instagram, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderNavbarProps {
  onNotifyClick: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onNotifyClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/556184267049?text=Ol%C3%A1%21+Vim+pelo+site+da+Canoeira+e+gostaria+de+atendimento.";

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
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-syne text-xs tracking-widest uppercase text-[#ECE5D8]/70">
            <button
              onClick={() => scrollToSection('linha-pausa')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer text-[#00F5D4] font-bold"
              data-cursor="PAUSA"
            >
              Linha Pausa
            </button>
            <button
              onClick={() => scrollToSection('viseiras')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="PROTEÇÃO"
            >
              Linha Proteção
            </button>
            <button
              onClick={() => scrollToSection('trio-flow')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="TRIO FLOW"
            >
              Trio Flow
            </button>
            <button
              onClick={() => scrollToSection('drop-bicolor')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="BICOLOR"
            >
              Drop Bicolor
            </button>
            <button
              onClick={() => scrollToSection('looks-treino')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="TREINOS"
            >
              Looks Treino
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Direct Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-[#25D366] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#25D366] hover:text-[#19100B] transition-all shadow-md"
              title="Atendimento via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Instagram Direct Link */}
            <a
              href="https://www.instagram.com/usecanoeira/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="INSTAGRAM"
              className="hidden md:flex items-center justify-center p-2 rounded-full border border-[#ECE5D8]/20 bg-[#241610]/60 text-[#ECE5D8] hover:text-[#00F5D4] hover:border-[#00F5D4]/50 transition-all"
              title="@usecanoeira no Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

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
            <div className="flex flex-col gap-5 font-serif text-2xl text-[#ECE5D8]">
              <button
                onClick={() => scrollToSection('linha-pausa')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2.5 border-b border-[#ECE5D8]/10 flex items-center justify-between text-[#00F5D4]"
              >
                <span>01. Linha Pausa (Sabonetes & Escalda-Pés)</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('trio-flow')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2.5 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>02. Trio Flow & Tops</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('drop-bicolor')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2.5 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>03. Drop Bicolor</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('looks-treino')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2.5 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>04. Looks Treino</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('viseiras')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2.5 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>05. Linha Proteção (Viseiras R$ 69)</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider text-center shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-[#19100B]" />
                <span>Atendimento WhatsApp • (61) 98426-7049</span>
              </a>

              <a
                href="https://www.instagram.com/usecanoeira/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#ECE5D8]/20 bg-[#241610] text-[#ECE5D8] font-syne text-xs uppercase tracking-widest"
              >
                <Instagram className="w-4 h-4 text-[#00F5D4]" />
                <span>Siga @usecanoeira</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
