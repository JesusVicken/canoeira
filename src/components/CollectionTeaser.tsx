import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ShieldCheck, X, ArrowRight, Eye, ExternalLink } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  line: string;
  badge: string;
  image: string;
  specs: string[];
  description: string;
  gradient: string;
}

export const CollectionTeaser: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const whatsappBaseUrl = "https://wa.me/556184267049?text=";

  const products: ProductItem[] = [
    {
      id: 'blusao-uv50',
      name: 'Camisa Solar UV50+ Canoeira',
      category: 'Vestuário Técnico',
      line: 'Linha Sol & Performance',
      badge: 'Lotes Iniciais',
      image: '/assets/canoieraBlusa.jpeg',
      specs: ['Proteção FPU50+ Vitalícia', 'Tecido Ultra Breathable', 'Costuras Antiatrito Zero Touch'],
      description: 'Desenvolvida com poliamida de alta tenacidade e dióxido de titânio fundido às fibras para bloquear 98% dos raios UVA e UVB. Peça exclusiva disponível para atendimento direto.',
      gradient: 'from-[#7A4421]/60 via-[#241610] to-[#00F5D4]/20',
    },
    {
      id: 'bone-solsticio',
      name: 'Boné Caiçara Solstício Hydro',
      category: 'Acessórios Sol',
      line: 'Linha Alma Caiçara',
      badge: 'Lotes Iniciais',
      image: '/assets/canoeiraBone.jpeg',
      specs: ['Aba Antirreflexo Solar', 'Ajuste Micrométrico Neoprene', 'Tecido Flutuável'],
      description: 'Projetado para treinos e atividades ao sol. Material de secagem rápida com faixa interna de absorção de suor.',
      gradient: 'from-[#241610] via-[#7A4421]/40 to-[#00F5D4]/30',
    },
    {
      id: 'top-activewear',
      name: 'Top Activewear Canoeira',
      category: 'Moda Fitness & Sol',
      line: 'Linha Performance',
      badge: 'Lotes Iniciais',
      image: '/assets/canoeiraTop.jpg',
      specs: ['Sustentação Anatômica 3D', 'Secagem Ultrarrápida', 'Tecido Respirável Premium'],
      description: 'Top de alta sustentação e modelagem ergonômica ideal para caminhada, corrida e atividades ao ar livre sob o sol.',
      gradient: 'from-[#623417]/80 via-[#19100B] to-[#7A4421]/40',
    },
    {
      id: 'shorts-expedicao',
      name: 'Bermuda & Shorts de Treino',
      category: 'Performance',
      line: 'Linha Solstício',
      badge: 'Edição Limitada',
      image: '/assets/boneFivePanel.jpeg',
      specs: ['Elasticidade 360° Flex', 'Bolso Estanque com Zíper YKK', 'Tratamento Hidrofóbico'],
      description: 'Corte ergonômico que garante liberdade total de movimento. Peça disponível para pedido via WhatsApp.',
      gradient: 'from-[#00F5D4]/20 via-[#19100B] to-[#7A4421]/60',
    },
  ];

  const getWhatsappProductUrl = (productName: string) => {
    const message = `Ol%C3%A1%21+Vim+pelo+site+da+Canoeira+e+gostaria+de+informa%C3%A7%C3%B5es%2Fpedir+a+pe%C3%A7a%3A+${encodeURIComponent(productName)}`;
    return `${whatsappBaseUrl}${message}`;
  };

  return (
    <section id="colecoes" className="relative py-20 sm:py-28 bg-[#19100B] overflow-hidden text-[#ECE5D8]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#7A4421]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#00F5D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-syne text-[11px] sm:text-xs uppercase tracking-widest text-[#00F5D4] mb-2 sm:mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#00F5D4]" />
              <span>Coleção de Peças Canoeira</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Peças exclusivas <br />
              <span className="italic text-[#00F5D4]">disponíveis via WhatsApp.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/70 max-w-md font-light">
              Enquanto finalizamos o e-commerce oficial, você pode tirar dúvidas e solicitar suas peças diretamente pelo nosso WhatsApp.
            </p>
          </div>
        </div>

        {/* Product Cards Grid / Touch Carousel on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 md:grid md:grid-cols-2 md:space-x-0 md:gap-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              data-cursor="VER PEÇA"
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
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#ECE5D8]/10 flex items-center justify-between gap-2">
                  <a
                    href={getWhatsappProductUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full font-syne text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#25D366] text-[#19100B] hover:bg-[#20bd5a] active:scale-95 transition-all shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#19100B]" />
                    <span>Pedir no WhatsApp</span>
                  </a>

                  <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
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

                  <a
                    href={getWhatsappProductUrl(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#25D366] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] active:scale-95 transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#19100B]" />
                    <span>Pedir esta peça no WhatsApp</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
