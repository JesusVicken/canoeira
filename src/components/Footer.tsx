import React from 'react';
import { CanoeiraLogo } from './CanoeiraLogo';
import { Instagram, ArrowUp, Sun, Waves, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#140D09] border-t border-[#ECE5D8]/10 text-[#ECE5D8] pt-20 pb-12 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7A4421]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#ECE5D8]/10">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <a href="#" className="inline-flex items-center gap-2">
              <CanoeiraLogo size="md" color="cyan" />
              <span className="font-serif text-3xl font-bold text-[#ECE5D8]">
                Canoeira<span className="text-[#00F5D4]">.</span>
              </span>
            </a>

            <p className="font-sans text-sm text-[#ECE5D8]/70 font-light max-w-md leading-relaxed">
              Canoeira é uma marca brasileira inspirada no oceano, no sol e na arte da remada. 
              Criada para proporcionar alta performance técnica e estética caiçara atemporal.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/usecanoeira/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="INSTAGRAM"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#241610] border border-[#00F5D4]/30 text-[#00F5D4] font-syne text-xs uppercase tracking-wider hover:bg-[#00F5D4] hover:text-[#19100B] transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>@usecanoeira</span>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-3 flex flex-col gap-3 font-syne text-xs uppercase tracking-widest text-[#ECE5D8]/70">
            <h4 className="text-[#00F5D4] font-bold mb-2">Navegação</h4>
            <a href="#manifesto" className="hover:text-[#00F5D4] transition-colors">Conceito & Manifesto</a>
            <a href="#colecoes" className="hover:text-[#00F5D4] transition-colors">Prévias das Coleções</a>
            <a href="#filosofia" className="hover:text-[#00F5D4] transition-colors">Filosofia de Marca</a>
            <a href="#instagram" className="hover:text-[#00F5D4] transition-colors">Comunidade Instagram</a>
            <a href="#vip" className="hover:text-[#00F5D4] transition-colors">Inscrição Lote VIP</a>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-3 flex flex-col gap-3 font-syne text-xs uppercase tracking-widest text-[#ECE5D8]/70">
            <h4 className="text-[#00F5D4] font-bold mb-2">Contato & Redes</h4>
            <a href="https://www.instagram.com/usecanoeira/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F5D4] transition-colors">
              Instagram Direct
            </a>
            <span className="text-[#ECE5D8]/40">contato@usecanoeira.com.br</span>
            <div className="mt-4 p-3 rounded-xl bg-[#241610] border border-[#ECE5D8]/10 text-[10px] text-[#ECE5D8]/60">
              <span className="text-[#00F5D4] font-bold">Awwwards Nominee</span> • Design de alta performance React + Vite + TS.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-syne text-xs text-[#ECE5D8]/50 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} Canoeira. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              Feito com <Heart className="w-3 h-3 text-[#00F5D4] fill-[#00F5D4]" /> para amantes do mar
            </span>

            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="p-3 rounded-full bg-[#241610] border border-[#ECE5D8]/20 text-[#ECE5D8] hover:text-[#00F5D4] hover:border-[#00F5D4] transition-all cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
