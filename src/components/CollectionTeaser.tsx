import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Bell, Sparkles, CheckCircle2, ShieldCheck, X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  line: string;
  badge: string;
  specs: string[];
  description: string;
  colorScheme: string;
  gradient: string;
}

export const CollectionTeaser: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [notifiedItems, setNotifiedItems] = useState<Record<string, boolean>>({});

  const products: ProductItem[] = [
    {
      id: 'maresia-uv50',
      name: 'Camisa Solar UV50+ Maresia Pro',
      category: 'Vestuário Técnico',
      line: 'Linha Sol & Maré',
      badge: 'Drop 01 • Lote VIP',
      specs: ['Proteção FPU50+ Vitalícia', 'Tecido Ultra Breathable', 'Costuras Antiatrito Zero Touch'],
      description: 'Desenvolvida com poliamida de alta tenacidade e dióxido de titânio fundido às fibras para bloquear 98% dos raios UVA e UVB. Ideal para remadas de longa distância sob sol forte.',
      colorScheme: 'Ciano Terracota',
      gradient: 'from-[#7A4421]/60 via-[#241610] to-[#00F5D4]/20',
    },
    {
      id: 'shorts-expedicao',
      name: 'Shorts de Remada Expedição 4-Way',
      category: 'Bermudas',
      line: 'Linha Performance',
      badge: 'Drop 01 • Lote VIP',
      specs: ['Elasticidade 360° Flex', 'Bolso Estanque com Zíper YKK', 'Tratamento Hidrofóbico'],
      description: 'Corte ergonômico acima do joelho que garante liberdade total no assento da canoa havaiana. Tecido ultraleve que seca em minutos ao sair da água.',
      colorScheme: 'Terracota Profundo',
      gradient: 'from-[#623417]/80 via-[#19100B] to-[#7A4421]/40',
    },
    {
      id: 'bone-solsticio',
      name: 'Boné Caiçara Solstício Hydro',
      category: 'Acessórios',
      line: 'Linha Alma Caiçara',
      badge: 'Drop 01 • Lote VIP',
      specs: ['Aba Antirreflexo Solar', 'Ajuste Micrométrico Neoprene', 'Flutuável na Água'],
      description: 'Projetado para não afundar se cair no mar durante a remada. Material de secagem rápida com faixa interna de absorção de suor.',
      colorScheme: 'Preto Marinho & Ciano',
      gradient: 'from-[#241610] via-[#7A4421]/40 to-[#00F5D4]/30',
    },
    {
      id: 'bolsa-estanque-20l',
      name: 'Bolsa Estanque Waterproof 20L',
      category: 'Equipamentos',
      line: 'Linha Travessia',
      badge: 'Edição Limitada',
      specs: ['Lona PVC 500D Termoselada', 'Fecho Roll-Top 100% Vedado', 'Alças Anatômicas Acolchoadas'],
      description: 'Seu equipamento seco em qualquer condição. Capacidade perfeita para roupas de troca, celular, carteira e suplementos em remadas longas.',
      colorScheme: 'Cyan Solar',
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

  return (
    <section id="colecoes" className="relative py-28 bg-[#19100B] overflow-hidden text-[#ECE5D8]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#7A4421]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00F5D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
              <span className="w-8 h-[1px] bg-[#00F5D4]" />
              <span>Prévia Exclusiva de Produtos</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight">
              Lote 01 <span className="italic text-[#00F5D4]">Em Breve</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/70 max-w-md font-light">
            Conheça as primeiras peças desenvolvidas para o lançamento oficial. 
            Membros cadastrados no VIP terão preferência absoluta de estoque.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => {
            const isNotified = notifiedItems[product.id];
            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                data-cursor="QUICK VIEW"
                onClick={() => setSelectedProduct(product)}
                className="group relative rounded-3xl glass-panel border border-[#ECE5D8]/10 overflow-hidden hover:border-[#00F5D4]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between p-8 min-h-[420px]"
              >
                {/* Dynamic Gradient Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Top Badge & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4]">
                    {product.badge}
                  </span>
                  <span className="font-syne text-xs uppercase tracking-widest text-[#ECE5D8]/60">
                    {product.category}
                  </span>
                </div>

                {/* Center Visual Mockup Box */}
                <div className="relative z-10 my-8 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#7A4421]/40 border border-[#00F5D4]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#00F5D4] transition-all duration-500 shadow-[0_0_20px_rgba(0,245,212,0.2)]">
                    <Sparkles className="w-8 h-8 text-[#00F5D4]" />
                  </div>
                  <span className="font-syne text-xs uppercase tracking-widest text-[#ECE5D8]/50">
                    {product.line}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 flex flex-col gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-[#19100B]/80 text-[#ECE5D8]/80 border border-[#ECE5D8]/10"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#ECE5D8]/10 flex items-center justify-between">
                    <button
                      onClick={(e) => handleNotifyMe(product.id, e)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-syne text-xs font-bold uppercase tracking-wider transition-all ${
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

                    <span className="font-syne text-xs uppercase tracking-widest text-[#00F5D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-[#19100B]/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl glass-panel border border-[#00F5D4]/30 p-6 sm:p-10 shadow-2xl text-[#ECE5D8]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#7A4421]/40 text-[#ECE5D8] hover:text-[#00F5D4] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-2">
                <span>{selectedProduct.line}</span>
                <span>•</span>
                <span>{selectedProduct.badge}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#ECE5D8] mb-4">
                {selectedProduct.name}
              </h3>

              <p className="font-sans text-base text-[#ECE5D8]/80 font-light leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="font-syne text-xs font-bold uppercase tracking-widest text-[#00F5D4]">
                  Especificações Técnicas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.specs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#241610] border border-[#ECE5D8]/10 text-xs font-sans flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#00F5D4]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#ECE5D8]/10">
                <button
                  onClick={() => {
                    handleNotifyMe(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="w-full py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] transition-all"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notificar Lançamento Deste Item</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
