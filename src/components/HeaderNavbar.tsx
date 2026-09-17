import React, { useState, useEffect } from 'react';
import { CanoeiraLogo } from './CanoeiraLogo';
import { AmbientAudio } from './AmbientAudio';
import { Instagram, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderNavbarProps {
  onVIPClick: () => void;
  onSoundStateChange?: (isPlaying: boolean) => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onVIPClick, onSoundStateChange }) => {
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
            ? 'bg-[#19100B]/85 backdrop-blur-xl border-b border-[#ECE5D8]/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#19100B]/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            data-cursor="CANOEIRA"
            className="group flex items-center gap-2 focus:outline-none"
          >
            <CanoeiraLogo size="sm" color="cyan" />
            <span className="font-serif text-2xl font-bold tracking-tight text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
              Canoeira<span className="text-[#00F5D4]">.</span>
            </span>
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-syne text-xs tracking-widest uppercase text-[#ECE5D8]/70">
            <button
              onClick={() => scrollToSection('manifesto')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="CONCEPT"
            >
              Conceito
            </button>
            <button
              onClick={() => scrollToSection('colecoes')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="DROPS"
            >
              Coleções
            </button>
            <button
              onClick={() => scrollToSection('filosofia')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="STORY"
            >
              Filosofia
            </button>
            <button
              onClick={() => scrollToSection('instagram')}
              className="hover:text-[#00F5D4] transition-colors cursor-pointer"
              data-cursor="COMMUNITY"
            >
              Comunidade
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Generator */}
            <AmbientAudio onSoundStateChange={onSoundStateChange} />

            {/* Instagram Link */}
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

            {/* VIP Registration CTA */}
            <button
              onClick={onVIPClick}
              data-cursor="VIP ACCESS"
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,212,0.5)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#19100B]" />
              <span>Garantir VIP</span>
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
            className="fixed inset-0 z-30 bg-[#19100B]/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6 font-serif text-3xl text-[#ECE5D8]">
              <button
                onClick={() => scrollToSection('manifesto')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>01. Conceito</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('colecoes')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>02. Coleções</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('filosofia')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>03. Filosofia</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
              <button
                onClick={() => scrollToSection('instagram')}
                className="text-left hover:text-[#00F5D4] transition-colors py-2 border-b border-[#ECE5D8]/10 flex items-center justify-between"
              >
                <span>04. Comunidade</span>
                <ArrowUpRight className="w-5 h-5 text-[#00F5D4]" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/usecanoeira/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#ECE5D8]/20 bg-[#241610] text-[#ECE5D8] font-syne text-xs uppercase tracking-widest"
              >
                <Instagram className="w-4 h-4 text-[#00F5D4]" />
                <span>Siga @usecanoeira no Instagram</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onVIPClick();
                }}
                className="w-full py-4 rounded-xl bg-[#00F5D4] text-[#19100B] font-syne text-sm font-bold uppercase tracking-wider text-center"
              >
                Inscrever no Lote VIP 0
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
