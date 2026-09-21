import React from 'react';
import { CanoeiraLogo } from './CanoeiraLogo';
import { Instagram, ArrowUp, Heart } from 'lucide-react';

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
            <a href="#" className="inline-flex items-center">
              <CanoeiraLogo size="lg" color="cyan" />
            </a>

            <p className="font-sans text-sm text-[#ECE5D8]/70 font-light max-w-md leading-relaxed">
              Canoeira é uma marca brasileira guiada por três pilares: Movimento (roupas de treino e lifestyle), Proteção (bonés e viseiras) e Pausa (rituais de autocuidado com sabonetes artesanais e escalda-pés).
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
            <a href="#linhas" className="hover:text-[#00F5D4] transition-colors">As 3 Linhas</a>
            <a href="#linha-pausa" className="hover:text-[#00F5D4] transition-colors text-[#00F5D4]">Linha Pausa (Novidade)</a>
            <a href="#manifesto" className="hover:text-[#00F5D4] transition-colors">Conceito & Marca</a>
            <a href="#colecoes" className="hover:text-[#00F5D4] transition-colors">Vitrine de Peças</a>
            <a href="#inauguracao" className="hover:text-[#00F5D4] transition-colors">Aviso de Abertura</a>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-3 flex flex-col gap-3 font-syne text-xs uppercase tracking-widest text-[#ECE5D8]/70">
            <h4 className="text-[#00F5D4] font-bold mb-2">Contato & Redes</h4>
            <a href="https://www.instagram.com/usecanoeira/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F5D4] transition-colors">
              Instagram Direct
            </a>
            <span className="text-[#ECE5D8]/40">contato@usecanoeira.com.br</span>
            <div className="mt-4 p-3 rounded-xl bg-[#241610] border border-[#ECE5D8]/10 text-[10px] text-[#ECE5D8]/60">
              <span className="text-[#00F5D4] font-bold">Canoeira E-commerce</span> • Pré-Lançamento Oficial.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-syne text-xs text-[#ECE5D8]/50 uppercase tracking-widest">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span>© {new Date().getFullYear()} Canoeira. Todos os direitos reservados.</span>
            <span className="hidden sm:inline text-[#ECE5D8]/20">•</span>
            <a
              href="https://www.instagram.com/v1ccken/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F5D4] hover:underline font-bold tracking-wider transition-colors lowercase"
              title="Desenvolvido por @v1ccken no Instagram"
            >
              dev: @v1ccken
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              Feito com <Heart className="w-3 h-3 text-[#00F5D4] fill-[#00F5D4]" /> para entusiastas do sol
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
