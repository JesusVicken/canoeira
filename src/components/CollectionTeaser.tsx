import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Sparkles, CheckCircle2, ShieldCheck, X, ArrowRight, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  line: string;
  lineCategory: 'movimento' | 'protecao' | 'pausa';
  badge: string;
  image: string;
  specs: string[];
  description: string;
  gradient: string;
}

export const CollectionTeaser: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [notifiedItems, setNotifiedItems] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'movimento' | 'protecao' | 'pausa'>('todos');

  const products: ProductItem[] = [
    {
      id: 'camisetas-aero-sport-dry',
      name: 'Camisetas Aero Sport Dry',
      category: 'Vestuário Esportivo',
      line: 'Linha Movimento',
      lineCategory: 'movimento',
      badge: 'Aero Sport Dry',
      image: '/assets/canoieraHero.jpeg',
      specs: ['Malha UV 50+ & Secagem Rápida', 'Anti Odor & Anti Bacteriana', 'Anti-Pilling & Alta Elasticidade'],
      description: 'Chegaram as Aero Sport Dry nas versões manga curta e regata, com as estampas que são a cara do Cerrado. Pensada pro seu melhor desempenho.',
      gradient: 'from-[#00F5D4]/25 via-[#19100B] to-[#7A4421]/60',
    },
    {
      id: 'camiseta-estonada-algodao',
      name: 'Camiseta Estonada 100% Algodão',
      category: 'Lifestyle & Identidade',
      line: 'Linha Movimento',
      lineCategory: 'movimento',
      badge: 'Edição Brasília',
      image: '/assets/canoeiraBlusa.jpeg',
      specs: ['100% Algodão Estonado Premium', 'Teatro Nacional de Brasília', 'Canoeira: Flow ao Seu Movimento'],
      description: 'O vestir comunica quem somos. E quando a escolha vem do pertencimento fala ainda mais alto! Afinal, identidade não se veste pelo acaso.',
      gradient: 'from-[#7A4421]/60 via-[#241610] to-[#00F5D4]/20',
    },
    {
      id: 'bone-solsticio',
      name: 'Boné Caiçara Solstício Hydro',
      category: 'Acessórios Sol',
      line: 'Linha Proteção',
      lineCategory: 'protecao',
      badge: 'Lote VIP 0',
      image: '/assets/canoeiraBone.jpeg',
      specs: ['Aba Antirreflexo Solar', 'Ajuste Micrométrico Neoprene', 'Tecido Flutuável'],
      description: 'Projetado para treinos e atividades ao sol. Material de secagem rápida com faixa interna de absorção de suor.',
      gradient: 'from-[#241610] via-[#7A4421]/40 to-[#00F5D4]/30',
    },
    {
      id: 'trio-mare-de-paz',
      name: 'Trio Sabonetes Maré de Paz',
      category: 'Sabonetes Artesanais Veganos',
      line: 'Linha Pausa',
      lineCategory: 'pausa',
      badge: 'Linha Pausa',
      image: '/assets/banho4.jpg',
      specs: ['Banho de Mar, Banho Solar, Boas Energias', '100% Vegano & Natural', 'Livre de Conservantes'],
      description: 'Para depois da água, do sol e do movimento. Para renovar o corpo, respirar fundo e desacelerar. Sabonetes artesanais veganos, livre de conservantes e corantes artificiais.',
      gradient: 'from-[#7A4421]/70 via-[#241610] to-[#00F5D4]/30',
    },
    {
      id: 'top-activewear',
      name: 'Top Activewear Canoeira',
      category: 'Moda Fitness & Sol',
      line: 'Linha Movimento',
      lineCategory: 'movimento',
      badge: 'Lote VIP 0',
      image: '/assets/canoeiraTop.jpg',
      specs: ['Sustentação Anatômica 3D', 'Secagem Ultrarrápida', 'Tecido Respirável Premium'],
      description: 'Top de alta sustentação e modelagem ergonômica ideal para caminhada, corrida e atividades ao ar livre sob o sol.',
      gradient: 'from-[#623417]/80 via-[#19100B] to-[#7A4421]/40',
    },
    {
      id: 'trio-leveza',
      name: 'Trio Sabonetes Leveza',
      category: 'Sabonetes Artesanais Veganos',
      line: 'Linha Pausa',
      lineCategory: 'pausa',
      badge: 'Linha Pausa',
      image: '/assets/banho5.jpg',
      specs: ['Morena Tropicana, Felicidade, Serenidade', 'Aroma Suave do Cerrado', '100% Vegano & Artesanal'],
      description: 'Para transformar o banho em pausa, cheiro bom e sensação de bem estar. Sabonetes artesanais veganos, livre de conservantes e corantes artificiais.',
      gradient: 'from-[#241610] via-[#7A4421]/50 to-[#00F5D4]/20',
    },
    {
      id: 'escalda-pes',
      name: 'Escalda-Pés Terapêuticos Naturais',
      category: 'Ervas & Óleos Essenciais',
      line: 'Linha Pausa',
      lineCategory: 'pausa',
      badge: 'Linha Pausa',
      image: '/assets/banho3.jpg',
      specs: ['Serenidade, Equilíbrio, TPM Zen', 'Ervas Naturais & Sal Grosso', 'Alívio de Inchaço e Tensões'],
      description: 'Feitos com óleo essencial e uma combinação de flores, folhas e ervas naturais. Garanta já o seu novo ritual favorito!',
      gradient: 'from-[#623417]/80 via-[#19100B] to-[#7A4421]/40',
    },
    {
      id: 'shorts-expedicao',
      name: 'Bermuda & Shorts de Treino',
      category: 'Performance',
      line: 'Linha Movimento',
      lineCategory: 'movimento',
      badge: 'Edição Limitada',
      image: '/assets/canoeira.jpeg',
      specs: ['Elasticidade 360° Flex', 'Bolso Estanque com Zíper YKK', 'Tratamento Hidrofóbico'],
      description: 'Corte ergonômico que garante liberdade total de movimento. Estará à venda no site oficial da Canoeira.',
      gradient: 'from-[#00F5D4]/20 via-[#19100B] to-[#7A4421]/60',
    },
  ];

  const handleNotifyMe = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setNotifiedItems((prev) => ({ ...prev, [productId]: true }));

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00F5D4', '#7A4421', '#ECE5D8'],
    });
  };

  const filteredProducts =
    selectedCategory === 'todos'
      ? products
      : products.filter((p) => p.lineCategory === selectedCategory);

  const categories = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'movimento', label: 'Linha Movimento' },
    { id: 'protecao', label: 'Linha Proteção' },
    { id: 'pausa', label: 'Linha Pausa' },
  ] as const;

  return (
    <section id="colecoes" className="relative py-20 sm:py-28 bg-[#19100B] overflow-hidden text-[#ECE5D8]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#7A4421]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#00F5D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-syne text-[11px] sm:text-xs uppercase tracking-widest text-[#00F5D4] mb-2 sm:mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#00F5D4]" />
              <span>Pré-Lançamento da Loja Online Oficial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Site com todas as novidades <br />
              <span className="italic text-[#00F5D4]">em breve...</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/70 max-w-md font-light">
              Confira as fotos oficiais das peças e produtos que estarão à venda no nosso e-commerce. 
              Inscreva-se na lista de aviso para receber 10% OFF no dia da inauguração.
            </p>
            <span className="md:hidden font-syne text-[11px] uppercase tracking-wider text-[#00F5D4] flex items-center gap-1">
              Deslize para o lado para ver mais peças →
            </span>
          </div>
        </div>

        {/* 3 Linhas Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-syne text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#00F5D4] text-[#19100B] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                  : 'bg-[#241610] text-[#ECE5D8]/70 hover:text-[#ECE5D8] border border-[#ECE5D8]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid / Touch Carousel on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 md:grid md:grid-cols-2 md:space-x-0 md:gap-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredProducts.map((product) => {
            const isNotified = notifiedItems[product.id];
            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                data-cursor="AMPLIAR FOTO"
                onClick={() => setSelectedProduct(product)}
                className="snap-center flex-shrink-0 w-[88vw] sm:w-[420px] md:w-auto group relative rounded-3xl glass-panel border border-[#ECE5D8]/10 overflow-hidden hover:border-[#00F5D4]/50 active:scale-[0.98] transition-all duration-300 cursor-pointer flex flex-col justify-between p-5 sm:p-8 min-h-[440px]"
              >
                {/* Dynamic Gradient Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Top Badge & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 font-syne text-[10px] sm:text-[11px] uppercase tracking-widest text-[#00F5D4]">
                    {product.badge}
                  </span>
                  <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#ECE5D8]/60">
                    {product.category}
                  </span>
                </div>

                {/* Product Photo Showcase */}
                <div className="relative z-10 my-4 sm:my-6 w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#ECE5D8]/10 group-hover:border-[#00F5D4]/40 transition-colors shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-[#19100B]/80 backdrop-blur-md text-[#00F5D4] border border-[#00F5D4]/30 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] font-sans px-2.5 py-1 rounded-md bg-[#19100B]/80 text-[#ECE5D8]/80 border border-[#ECE5D8]/10"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#ECE5D8]/10 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => handleNotifyMe(product.id, e)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-syne text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
                        isNotified
                          ? 'bg-[#00F5D4]/20 border border-[#00F5D4] text-[#00F5D4]'
                          : 'bg-[#7A4421]/60 text-[#ECE5D8] hover:bg-[#00F5D4] hover:text-[#19100B]'
                      }`}
                    >
                      {isNotified ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
                          <span>Aviso Ativado</span>
                        </>
                      ) : (
                        <>
                          <Bell className="w-3.5 h-3.5" />
                          <span>Quero Esse Item</span>
                        </>
                      )}
                    </button>

                    <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Ver foto <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail & Full Size Photo Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-[#19100B]/95 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl glass-panel border border-[#00F5D4]/40 p-5 sm:p-10 shadow-2xl text-[#ECE5D8] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#7A4421]/60 text-[#ECE5D8] hover:text-[#00F5D4] transition-colors z-20 active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Image View */}
                <div className="relative rounded-2xl overflow-hidden border border-[#00F5D4]/30 shadow-2xl aspect-[4/3] sm:aspect-square bg-[#241610]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/40 text-[#00F5D4] font-syne text-[10px] uppercase tracking-widest">
                    Foto Oficial
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-2">
                      <span>{selectedProduct.line}</span>
                      <span>•</span>
                      <span>{selectedProduct.badge}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-4xl text-[#ECE5D8] mb-3 sm:mb-4">
                      {selectedProduct.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#ECE5D8]/80 font-light leading-relaxed mb-4 sm:mb-6">
                      {selectedProduct.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-6">
                      <h4 className="font-syne text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00F5D4]">
                        Destaques da Peça
                      </h4>
                      <div className="flex flex-col gap-2">
                        {selectedProduct.specs.map((spec, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-[#241610] border border-[#ECE5D8]/10 text-xs font-sans flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#00F5D4]" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleNotifyMe(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Avisar na abertura da loja oficial</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
