import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Sparkles, ArrowRight, Flame, Heart } from 'lucide-react';

interface FitnessItem {
  id: string;
  title: string;
  category: string;
  src: string;
}

export const DropBicolorFitnessShowcase: React.FC = () => {
  const whatsappUrl = "https://wa.me/556184267049?text=Ol%C3%A1%21+Vim+pelo+site+da+Canoeira+e+tenho+interesse+nos+modelos+do+Drop+Bicolor+%E2%9D%A4%EF%B8%8F%F0%9F%94%A5%F0%9F%9B%9F+%28FPS+50%2C+zero+transpar%C3%AAncia%29.";

  const fitnessItems: FitnessItem[] = [
    {
      id: 'fit-1',
      title: 'Top & Calça Bicolor Premium',
      category: 'Modelo 01',
      src: '/assets/fitness/fitness1.jpeg',
    },
    {
      id: 'fit-[#00F5D4]',
      title: 'Conjunto Fit Bicolor Solar',
      category: 'Modelo 02',
      src: '/assets/fitness/fitness2.jpeg',
    },
    {
      id: 'fit-3',
      title: 'Design Ergonômico Zero Transparência',
      category: 'Modelo 03',
      src: '/assets/fitness/fitness3.jpeg',
    },
    {
      id: 'fit-4',
      title: 'Costura Reforçada & Anti-Peeling',
      category: 'Modelo 04',
      src: '/assets/fitness/fitness4.jpeg',
    },
  ];

  const handlePhotoClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="drop-bicolor" className="relative py-24 sm:py-32 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#7A4421]/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
            <Flame className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Novo Drop Fitness</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4">
            O Drop Bicolor chegou <br className="hidden sm:inline" />
            <span className="italic text-[#00F5D4]">arrasando corações.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#ECE5D8]/85 font-light leading-relaxed max-w-2xl mx-auto">
            FPS 50, zero transparência, costura reforçada e resistência a peeling. 
            Conforto e segurança na medida certa!
          </p>

          {/* Specs Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 text-[11px] sm:text-xs font-syne uppercase tracking-wider text-[#00F5D4]">
            <span className="px-3 py-1 rounded-full bg-[#241610] border border-[#00F5D4]/30">✓ FPS 50</span>
            <span className="px-3 py-1 rounded-full bg-[#241610] border border-[#00F5D4]/30">✓ Zero Transparência</span>
            <span className="px-3 py-1 rounded-full bg-[#241610] border border-[#00F5D4]/30">✓ Costura Reforçada</span>
            <span className="px-3 py-1 rounded-full bg-[#241610] border border-[#00F5D4]/30">✓ Resistência a Peeling</span>
          </div>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="EU QUERO"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_25px_rgba(0,245,212,0.4)]"
            >
              <Heart className="w-4 h-4 fill-[#19100B]" />
              <span>EU QUERO • Falar com Atendimento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Photo Grid / Mobile Touch Swiper */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 lg:grid lg:grid-cols-4 lg:space-x-0 lg:gap-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {fitnessItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              data-cursor="EU QUERO"
              onClick={handlePhotoClick}
              className="snap-center flex-shrink-0 w-[82vw] sm:w-[320px] lg:w-auto group relative rounded-3xl glass-panel border border-[#ECE5D8]/15 overflow-hidden hover:border-[#00F5D4]/60 transition-all duration-500 cursor-pointer flex flex-col justify-end min-h-[420px] p-6 shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/30 to-transparent" />

              <div className="relative z-10 mb-auto flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/40 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                  {item.category}
                </span>
                <span className="p-2 rounded-full bg-[#00F5D4] text-[#19100B] shadow-md group-hover:scale-110 transition-transform font-syne text-[10px] font-bold">
                  FPS 50
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-2 pt-4 border-t border-[#ECE5D8]/20">
                <h3 className="font-serif text-xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                  {item.title}
                </h3>
                <span className="font-syne text-[11px] uppercase tracking-wider text-[#00F5D4] flex items-center gap-1.5 font-bold">
                  <MessageCircle className="w-3.5 h-3.5 fill-[#00F5D4]" />
                  <span>Comentar EU QUERO no WhatsApp</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
