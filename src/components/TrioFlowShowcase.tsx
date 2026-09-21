import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, ExternalLink, ArrowRight, Eye, X } from 'lucide-react';

interface TopPhotoItem {
  id: string;
  title: string;
  category: string;
  src: string;
}

export const TrioFlowShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<TopPhotoItem | null>(null);

  const whatsappUrl = "https://wa.me/556184267049?text=Ol%C3%A1%21+Vim+pelo+site+da+Canoeira+e+gostaria+de+saber+mais+sobre+as+pe%C3%A7as+do+trio%3A+top+meia+lua%2C+cal%C3%A7a+bicolor+e+bon%C3%A9+esportivo.";

  const photos: TopPhotoItem[] = [
    {
      id: 'top-1',
      title: 'Top Meia Lua & Trio Flow',
      category: 'Trio Treino',
      src: '/assets/topsCanoeira/tops1.jpeg',
    },
    {
      id: 'top-2',
      title: 'Calça Bicolor & Boné Esportivo',
      category: 'Linha Performance',
      src: '/assets/topsCanoeira/tops2.jpeg',
    },
    {
      id: 'top-3',
      title: 'Conforto & Proteção Solar',
      category: 'Linha Solstício',
      src: '/assets/topsCanoeira/tops3.jpeg',
    },
    {
      id: 'top-4',
      title: 'Design Ergonômico em Movimento',
      category: 'Coleção Tops',
      src: '/assets/topsCanoeira/tops4.jpeg',
    },
  ];

  const handlePhotoClick = (photo: TopPhotoItem) => {
    // Open WhatsApp directly on click
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="trio-flow" className="relative py-24 sm:py-32 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Coleção Tops & Trio Flow</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4">
            Dia de treino com calma, <br className="hidden sm:inline" />
            <span className="italic text-[#00F5D4]">conforto e proteção.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#ECE5D8]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Com o trio: <strong>top meia lua, calça bicolor e boné esportivo</strong>.
          </p>

          <p className="mt-3 font-serif italic text-lg sm:text-xl text-[#00F5D4]">
            "Use Canoeira, a marca que dá flow ao seu movimento"
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] active:scale-95 transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-4 h-4 fill-[#19100B]" />
              <span>Pedir no WhatsApp • (61) 98426-7049</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Photo Grid - All Cards Redirect to WhatsApp on Click */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              data-cursor="WHATSAPP"
              onClick={() => handlePhotoClick(item)}
              className="group relative rounded-3xl glass-panel border border-[#ECE5D8]/15 overflow-hidden hover:border-[#25D366]/60 transition-all duration-500 cursor-pointer flex flex-col justify-end min-h-[380px] p-6 shadow-xl"
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/30 to-transparent" />

              {/* Top WhatsApp Pill */}
              <div className="relative z-10 mb-auto flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/40 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                  {item.category}
                </span>
                <div className="p-2 rounded-full bg-[#25D366] text-[#19100B] shadow-md group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-[#19100B]" />
                </div>
              </div>

              {/* Bottom Details & CTA */}
              <div className="relative z-10 flex flex-col gap-2 pt-4 border-t border-[#ECE5D8]/20">
                <h3 className="font-serif text-xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                  {item.title}
                </h3>
                <span className="font-syne text-[11px] uppercase tracking-wider text-[#25D366] flex items-center gap-1.5 font-bold">
                  <span>Pedir no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
