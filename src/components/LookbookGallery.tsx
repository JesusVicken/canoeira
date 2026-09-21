import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  subtitle: string;
}

export const LookbookGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'photo-1',
      title: 'Ritual Completo Linha Pausa',
      category: 'Linha Pausa',
      src: '/assets/banhoprincipal.jpg',
      subtitle: 'Sabonetes artesanais veganos e escalda-pés naturais à beira do lago',
    },
    {
      id: 'photo-2',
      title: 'Regata & Vestuário Canoeira',
      category: 'Linha Movimento',
      src: '/assets/canoieraHero.jpeg',
      subtitle: 'Conforto e mobilidade para suas atividades no sol',
    },
    {
      id: 'photo-3',
      title: 'Trio Maré de Paz',
      category: 'Linha Pausa',
      src: '/assets/banho4.jpg',
      subtitle: 'Banho de mar, banho solar e boas energias para desacelerar',
    },
    {
      id: 'photo-4',
      title: 'Camisa Solar UV50+ Canoeira',
      category: 'Linha Proteção',
      src: '/assets/canoieraBlusa.jpeg',
      subtitle: 'Desenvolvida com filtro solar permanente nas fibras',
    },
    {
      id: 'photo-5',
      title: 'Trio Leveza',
      category: 'Linha Pausa',
      src: '/assets/banho5.jpg',
      subtitle: 'Morena tropicana, felicidade e serenidade em sabonetes veganos',
    },
    {
      id: 'photo-6',
      title: 'Boné Caiçara Solstício Hydro',
      category: 'Linha Proteção',
      src: '/assets/canoeiraBone.jpeg',
      subtitle: 'Tecido leve e secagem ultrarrápida com aba antirreflexo',
    },
    {
      id: 'photo-7',
      title: 'Escalda-Pés Terapêuticos',
      category: 'Linha Pausa',
      src: '/assets/banho3.jpg',
      subtitle: 'Serenidade, equilíbrio e TPM Zen com flores, folhas e óleos essenciais',
    },
    {
      id: 'photo-8',
      title: 'Top Activewear Canoeira',
      category: 'Linha Movimento',
      src: '/assets/canoeiraTop.jpg',
      subtitle: 'Top ergonômico de alta sustentação para caminhada e corrida',
    },
  ];

  return (
    <section className="relative py-28 bg-[#140D09] text-[#ECE5D8] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7A4421]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
            <Sparkles className="w-4 h-4 text-[#00F5D4]" />
            <span>Galeria de Fotos Oficiais</span>
            <Sparkles className="w-4 h-4 text-[#00F5D4]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight">
            Lookbook & <span className="italic text-[#00F5D4]">Detalhes das Peças</span>
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#ECE5D8]/70 font-light max-w-xl mx-auto">
            Clique em qualquer imagem para ampliar e explorar as fotos oficiais da nova coleção da Canoeira.
          </p>
        </div>

        {/* Masonry / Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Highlight Photo */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            data-cursor="AMPLIAR"
            onClick={() => setActiveItem(galleryItems[0])}
            className="md:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 group cursor-pointer min-h-[420px] flex flex-col justify-end p-8"
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/40 to-transparent" />

            <div className="relative z-10 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4]/40 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4] w-fit">
                {galleryItems[0].category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#ECE5D8]">
                {galleryItems[0].title}
              </h3>
              <p className="font-sans text-xs text-[#ECE5D8]/80 font-light">
                {galleryItems[0].subtitle}
              </p>
            </div>

            <div className="absolute top-6 right-6 p-3 rounded-full bg-[#19100B]/70 border border-[#00F5D4]/30 text-[#00F5D4] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Secondary Photo 2 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            data-cursor="AMPLIAR"
            onClick={() => setActiveItem(galleryItems[1])}
            className="md:col-span-5 relative rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 group cursor-pointer min-h-[420px] flex flex-col justify-end p-8"
          >
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/40 to-transparent" />

            <div className="relative z-10 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4]/40 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4] w-fit">
                {galleryItems[1].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE5D8]">
                {galleryItems[1].title}
              </h3>
              <p className="font-sans text-xs text-[#ECE5D8]/80 font-light">
                {galleryItems[1].subtitle}
              </p>
            </div>

            <div className="absolute top-6 right-6 p-3 rounded-full bg-[#19100B]/70 border border-[#00F5D4]/30 text-[#00F5D4] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Row 2: 3 Cards */}
          {galleryItems.slice(2).map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              data-cursor="AMPLIAR"
              onClick={() => setActiveItem(item)}
              className="md:col-span-4 relative rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 group cursor-pointer h-80 flex flex-col justify-end p-6"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/30 to-transparent" />

              <div className="relative z-10 flex flex-col gap-1.5">
                <span className="font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl text-[#ECE5D8]">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#19100B]/70 border border-[#00F5D4]/30 text-[#00F5D4] opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-[#19100B]/95 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl glass-panel border border-[#00F5D4]/40 p-4 sm:p-8 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-[#7A4421]/60 text-[#ECE5D8] hover:text-[#00F5D4] transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-full max-h-[70vh] rounded-2xl overflow-hidden mb-6 flex items-center justify-center bg-[#241610]">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center max-w-xl">
                <span className="font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE5D8] mt-1">
                  {activeItem.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#ECE5D8]/70 mt-1">
                  {activeItem.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
