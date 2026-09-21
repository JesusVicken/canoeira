import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, CheckCircle2, Bell, Eye, X, ArrowRight, Flower2, Leaf } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PausaProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  primaryImage: string;
  secondaryImage?: string;
  composition: string[];
  description: string;
  highlights: string[];
  seal: string;
}

export const LinhaPausaShowcase: React.FC = () => {
  const [activeModalProduct, setActiveModalProduct] = useState<PausaProduct | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({});

  const products: PausaProduct[] = [
    {
      id: 'trio-mare-de-paz',
      name: 'Trio Maré de Paz',
      tagline: 'Banho de mar • Banho solar • Boas energias',
      badge: 'Sabonetes Artesanais Veganos',
      primaryImage: '/assets/banho4.jpg',
      secondaryImage: '/assets/banho1.jpg',
      composition: ['Banho de Mar', 'Banho Solar', 'Boas Energias'],
      description:
        'Para depois da água, do sol e do movimento. Para renovar o corpo, respirar fundo e desacelerar.',
      highlights: [
        'Banho de Mar: Que a leveza do mar permaneça em você, mesmo longe da praia',
        'Banho Solar: Para quem deseja renovar, aquecer e brilhar',
        'Boas Energias: Que este banho renove suas energias e ilumine seu dia',
      ],
      seal: 'Sabonetes artesanais veganos, livre de conservantes e corantes artificiais.',
    },
    {
      id: 'trio-leveza',
      name: 'Trio Leveza',
      tagline: 'Morena tropicana • Felicidade • Serenidade',
      badge: 'Sabonetes Artesanais Veganos',
      primaryImage: '/assets/banho5.jpg',
      secondaryImage: '/assets/banho2.jpg',
      composition: ['Morena Tropicana', 'Felicidade', 'Serenidade'],
      description:
        'Para transformar o banho em pausa, cheiro bom e sensação de bem estar.',
      highlights: [
        'Morena Tropicana: Que a alegria dos dias ensolarados viva dentro de você',
        'Felicidade: Que os pequenos momentos encham seu coração de alegria',
        'Serenidade: Que esse banho seja uma pausa de carinho para o seu dia',
      ],
      seal: 'Sabonetes artesanais veganos, livre de conservantes e corantes artificiais.',
    },
    {
      id: 'escalda-pes-ritual',
      name: 'Escalda-Pés Terapêuticos',
      tagline: 'Serenidade • Equilíbrio • TPM Zen',
      badge: 'Ervas & Óleos Essenciais',
      primaryImage: '/assets/banho3.jpg',
      secondaryImage: '/assets/banhoprincipal.jpg',
      composition: ['Serenidade', 'Equilíbrio', 'TPM Zen'],
      description:
        'Os escalda-pés são feitos com óleo essencial e uma combinação de flores, folhas e ervas naturais. Garanta já o seu novo ritual favorito.',
      highlights: [
        'Serenidade: Para aliviar o estresse e agitação mental (camomila, lavanda, erva-doce, arnica e sal grosso).',
        'Equilíbrio: Para aliviar dores, cansaço e diminuir inchaços (eucalipto, hortelã, manjericão, alecrim e sal grosso).',
        'TPM Zen: Para ajudar a relaxar, aliviar tensões e trazer leveza ao corpo (camomila, artemísia, erva-doce, cravo e sal grosso).',
      ],
      seal: 'Feito com óleos essenciais, flores e ervas naturais selecionadas.',
    },
    {
      id: 'ritual-completo-pausa',
      name: 'Ritual Completo de Pausa',
      tagline: 'O ritual sagrado do descanso',
      badge: 'Coleção Exclusiva de Lançamento',
      primaryImage: '/assets/banhoprincipal.jpg',
      secondaryImage: '/assets/banho4.jpg',
      composition: ['Trio Maré de Paz', 'Trio Leveza', 'Linha de Escalda-Pés'],
      description:
        'Perfumando todo o Cerrado de repente. O encontro perfeito da água, das ervas naturais e do acolhimento. Estará disponível para compra online no novo site da Canoeira.',
      highlights: [
        'Ideal para presentear ou transformar seu momento pós-treino',
        'Aroma relaxante do Cerrado com ativos 100% naturais',
        'Embalagens ecológicas artesanais feitas com afeto',
      ],
      seal: 'Experiência holística de relaxamento e recuperação corporal.',
    },
  ];

  const handleInterest = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedItems((prev) => ({ ...prev, [id]: true }));

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F5D4', '#E6A15C', '#ECE5D8', '#814C25'],
    });
  };

  const openProductModal = (product: PausaProduct, initialIdx: number = 0) => {
    setActiveModalProduct(product);
    setModalImageIndex(initialIdx);
  };

  return (
    <section id="linha-pausa" className="relative py-20 sm:py-28 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Warm Ambient Botanical Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#7A4421]/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#00F5D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* SECTION HEADER WITH AUTHENTIC BRAND COPY */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Arrival Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
              <Flower2 className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>1 • Olha quem chegou na Linha Pausa</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Olha quem chegou <br />
              <span className="italic text-[#00F5D4]">na Linha Pausa</span>
            </h2>

            <p className="mt-3 font-serif italic text-lg sm:text-2xl text-[#ECE5D8]/90">
              Perfumando todo o Cerrado de repente!
            </p>

            <div className="mt-4 space-y-1 font-sans text-sm sm:text-base text-[#ECE5D8]/90">
              <p>• <strong>Trio de Sabonetes Artesanais:</strong> Maré de Paz e Leveza.</p>
              <p>• <strong>Escalda-Pés:</strong> Serenidade, Equilíbrio e TPM Zen.</p>
            </div>

            <p className="mt-4 font-sans text-sm sm:text-base text-[#ECE5D8]/80 font-light leading-relaxed max-w-2xl">
              Porque investir no descanso também é autocuidado. É na recuperação e na pausa que o corpo agradece.
            </p>
          </div>

          {/* Mobile Swipe Notice */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="p-4 rounded-2xl bg-[#241610] border border-[#ECE5D8]/15 flex items-center gap-3">
              <Leaf className="w-5 h-5 text-[#00F5D4] flex-shrink-0" />
              <span className="font-syne text-xs uppercase tracking-wider text-[#ECE5D8]">
                Sabonetes Veganos & Escalda-Pés Naturais
              </span>
            </div>
            <span className="font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] flex items-center gap-1.5">
              Deslize para o lado e escolha o seu
            </span>
          </div>
        </div>

        {/* MOBILE-FIRST TOUCH-FRIENDLY CAROUSEL & DESKTOP GRID */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-0 md:gap-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((p) => {
            const isSaved = savedItems[p.id];
            return (
              <motion.div
                key={p.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => openProductModal(p, 0)}
                className="snap-center flex-shrink-0 w-[86vw] sm:w-[380px] md:w-auto group relative rounded-3xl glass-panel border border-[#ECE5D8]/15 hover:border-[#00F5D4]/60 overflow-hidden flex flex-col justify-between p-5 sm:p-6 cursor-pointer active:scale-[0.98] transition-all duration-300 shadow-xl"
              >
                {/* Subtle Terracotta Background Tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#7A4421]/20 via-[#241610]/80 to-[#19100B] opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                    {p.badge}
                  </span>
                  <div className="p-2 rounded-full bg-[#19100B]/80 text-[#00F5D4] border border-[#00F5D4]/20 opacity-80 group-hover:opacity-100">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Main Photo Container */}
                <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#ECE5D8]/10 group-hover:border-[#00F5D4]/40 shadow-lg mb-4 bg-[#241610]">
                  <img
                    src={p.primaryImage}
                    alt={p.name}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19100B]/80 via-transparent to-transparent" />
                  
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-syne uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#19100B]/80 text-[#ECE5D8]/80 backdrop-blur-md">
                    Toque para ampliar
                  </span>
                </div>

                {/* Text Details */}
                <div className="relative z-10 flex flex-col gap-2.5 flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors leading-snug">
                      {p.name}
                    </h3>
                    <p className="font-syne text-[11px] text-[#00F5D4] mt-1 tracking-wide">
                      {p.tagline}
                    </p>
                    <p className="font-sans text-xs text-[#ECE5D8]/75 font-light leading-relaxed mt-2 line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  {/* Composition Pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.composition.map((c, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-sans px-2 py-0.5 rounded-md bg-[#19100B]/80 border border-[#ECE5D8]/10 text-[#ECE5D8]/80"
                      >
                        • {c}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-3 mt-2 border-t border-[#ECE5D8]/10 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => handleInterest(p.id, e)}
                      className={`flex-1 py-2.5 px-3 rounded-xl font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                        isSaved
                          ? 'bg-[#00F5D4]/20 border border-[#00F5D4] text-[#00F5D4]'
                          : 'bg-[#00F5D4] text-[#19100B] hover:bg-[#66FFEA]'
                      }`}
                    >
                      {isSaved ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                          <span>Quero Esse!</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-3.5 h-3.5 fill-[#19100B]" />
                          <span>Quero Esse</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openProductModal(p, 0)}
                      className="p-2.5 rounded-xl bg-[#241610] text-[#ECE5D8] hover:text-[#00F5D4] border border-[#ECE5D8]/10"
                      title="Ver fotos detalhadas"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT BANNER - AUTOCUIDADO */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl glass-panel border border-[#7A4421]/60 relative overflow-hidden bg-gradient-to-r from-[#241610] via-[#331C10] to-[#241610]">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <span className="font-syne text-[11px] uppercase tracking-widest text-[#00F5D4]">
                Ritual Completo de Autocuidado
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#ECE5D8]">
                Garanta já o seu novo ritual favorito.
              </h3>
              <p className="font-sans text-sm text-[#ECE5D8]/80 font-light leading-relaxed">
                Toda a Linha Pausa estará à venda online com exclusividade no lançamento do novo site oficial da Canoeira. 
                Cadastre-se na lista de pré-lançamento para receber o aviso em primeira mão na abertura da loja online.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#inauguracao"
                className="px-6 py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)] w-full sm:w-auto text-center cursor-pointer"
              >
                <Bell className="w-4 h-4 fill-[#19100B]" />
                <span>Receber Aviso de Abertura</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* DETAILED PHOTO & INFO MODAL FOR TOUCH / DESKTOP */}
      <AnimatePresence>
        {activeModalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setActiveModalProduct(null)}
            className="fixed inset-0 z-50 bg-[#19100B]/98 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto transform-gpu"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl glass-panel border border-[#00F5D4]/40 p-5 sm:p-10 shadow-2xl text-[#ECE5D8] my-auto bg-[#1C120C] transform-gpu"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#241610] text-[#ECE5D8] hover:text-[#00F5D4] transition-colors z-20 active:scale-90 border border-[#ECE5D8]/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Photo Viewer Column */}
                <div className="md:col-span-6 flex flex-col gap-3">
                  <div className="relative rounded-2xl overflow-hidden border border-[#00F5D4]/30 shadow-2xl aspect-[4/3] bg-[#241610]">
                    <img
                      src={modalImageIndex === 0 ? activeModalProduct.primaryImage : (activeModalProduct.secondaryImage || activeModalProduct.primaryImage)}
                      alt={activeModalProduct.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/40 text-[#00F5D4] font-syne text-[10px] uppercase tracking-widest">
                      Foto Oficial Canoeira
                    </div>
                  </div>

                  {/* Thumbnail Selector if Secondary exists */}
                  {activeModalProduct.secondaryImage && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setModalImageIndex(0)}
                        className={`flex-1 p-1 rounded-xl border transition-all overflow-hidden aspect-[4/3] max-h-16 ${
                          modalImageIndex === 0 ? 'border-[#00F5D4] scale-95' : 'border-[#ECE5D8]/20 opacity-60'
                        }`}
                      >
                        <img src={activeModalProduct.primaryImage} alt="Foto 1" className="w-full h-full object-cover rounded-lg" />
                      </button>
                      <button
                        onClick={() => setModalImageIndex(1)}
                        className={`flex-1 p-1 rounded-xl border transition-all overflow-hidden aspect-[4/3] max-h-16 ${
                          modalImageIndex === 1 ? 'border-[#00F5D4] scale-95' : 'border-[#ECE5D8]/20 opacity-60'
                        }`}
                      >
                        <img src={activeModalProduct.secondaryImage} alt="Foto 2" className="w-full h-full object-cover rounded-lg" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Details Column */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-2">
                      <span>Linha Pausa</span>
                      <span>•</span>
                      <span>{activeModalProduct.badge}</span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#ECE5D8] mb-2">
                      {activeModalProduct.name}
                    </h3>

                    <p className="font-syne text-xs text-[#00F5D4] mb-4">
                      {activeModalProduct.tagline}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#ECE5D8]/80 font-light leading-relaxed mb-4">
                      {activeModalProduct.description}
                    </p>

                    {/* Highlights breakdown */}
                    <div className="space-y-2 mb-4">
                      <h4 className="font-syne text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00F5D4]">
                        Composição & Propriedades
                      </h4>
                      <div className="flex flex-col gap-2">
                        {activeModalProduct.highlights.map((h, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-[#241610] border border-[#ECE5D8]/10 text-xs font-sans text-[#ECE5D8]/90">
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Organic seal */}
                    <div className="p-3 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-xs text-[#00F5D4] font-syne mb-6">
                      {activeModalProduct.seal}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        handleInterest(activeModalProduct.id);
                        setActiveModalProduct(null);
                      }}
                      className="flex-1 py-3.5 rounded-xl bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all cursor-pointer shadow-lg"
                    >
                      <Heart className="w-4 h-4 fill-[#19100B]" />
                      <span>Quero Esse no Lançamento</span>
                    </button>

                    <a
                      href="#inauguracao"
                      onClick={() => setActiveModalProduct(null)}
                      className="py-3.5 px-4 rounded-xl bg-[#241610] border border-[#ECE5D8]/20 hover:border-[#00F5D4] text-[#ECE5D8] font-syne text-xs uppercase tracking-wider text-center"
                    >
                      Avisar Inauguração
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
