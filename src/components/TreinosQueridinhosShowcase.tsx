import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Sun, ArrowRight, ExternalLink } from 'lucide-react';

interface TreinoItem {
  id: string;
  title: string;
  colorTag: string;
  src: string;
}

export const TreinosQueridinhosShowcase: React.FC = () => {
  const whatsappUrl = "https://wa.me/556184267049?text=Aloha%21+Vim+pelo+site+da+Canoeira+e+amei+os+looks+queridinhos+de+treino+em+novas+cores%21";

  const treinoItems: TreinoItem[] = [
    {
      id: 'tr-1',
      title: 'Look Queridinho • Ciano & Terracota',
      colorTag: 'Nova Cor 01',
      src: '/assets/treinos/treino1.jpeg',
    },
    {
      id: 'tr-2',
      title: 'Conjunto Treino Solstício',
      colorTag: 'Nova Cor 02',
      src: '/assets/treinos/treino2.jpeg',
    },
    {
      id: 'tr-3',
      title: 'Top & Legging Performance',
      colorTag: 'Nova Cor 03',
      src: '/assets/treinos/treino3.jpeg',
    },
    {
      id: 'tr-4',
      title: 'Look Treino Ergocut',
      colorTag: 'Nova Cor 04',
      src: '/assets/treinos/treino4.jpeg',
    },
    {
      id: 'tr-5',
      title: 'Estilo & Conforto no Treino',
      colorTag: 'Nova Cor 05',
      src: '/assets/treinos/treino5.jpeg',
    },
  ];

  const handlePhotoClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="looks-treino" className="relative py-24 sm:py-32 bg-[#140D09] text-[#ECE5D8] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
            <Sun className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Coleção Treino • Novas Cores</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4">
            Os looks queridinhos de treino <br className="hidden sm:inline" />
            <span className="italic text-[#00F5D4]">estão de volta em novas cores!</span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-[#00F5D4] font-serif italic max-w-xl mx-auto mb-6">
            Gostou? Manda um Aloha! 🌊
          </p>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="MANDAR ALOHA"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] active:scale-95 transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-4 h-4 fill-[#19100B]" />
              <span>Mandar um Aloha no WhatsApp • (61) 98426-7049</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Photo Grid / Mobile Touch Swiper */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 lg:grid lg:grid-cols-5 lg:space-x-0 lg:gap-5 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {treinoItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              data-cursor="ALOHA"
              onClick={handlePhotoClick}
              className="snap-center flex-shrink-0 w-[78vw] sm:w-[280px] lg:w-auto group relative rounded-3xl glass-panel border border-[#ECE5D8]/15 overflow-hidden hover:border-[#25D366]/60 transition-all duration-500 cursor-pointer flex flex-col justify-end min-h-[400px] p-5 shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/30 to-transparent" />

              <div className="relative z-10 mb-auto flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/40 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                  {item.colorTag}
                </span>
                <div className="p-2 rounded-full bg-[#25D366] text-[#19100B] shadow-md group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-3.5 h-3.5 fill-[#19100B]" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-1.5 pt-3 border-t border-[#ECE5D8]/20">
                <h3 className="font-serif text-lg text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                  {item.title}
                </h3>
                <span className="font-syne text-[10px] uppercase tracking-wider text-[#25D366] flex items-center gap-1 font-bold">
                  <span>Mandar Aloha no WhatsApp</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
