import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Compass, Anchor } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Proteção Solar UV50+',
      desc: 'Tecidos técnicos de alta performance desenvolvidos especificamente para resistir à exposição solar prolongada e ao uso intenso.',
      icon: Sun,
    },
    {
      num: '02',
      title: 'Ergonomia em Movimento',
      desc: 'Cortes pensados para máxima liberdade de movimento dos ombros e corpo, sem atrito na pele durante qualquer treino ou caminhada.',
      icon: Anchor,
    },
    {
      num: '03',
      title: 'Alma Solar & Atemporal',
      desc: 'Estética minimalista sofisticada com tons terrosos e cianos inspirados nas paisagens tropicais brasileiras.',
      icon: Compass,
    },
  ];

  return (
    <section id="manifesto" className="relative py-24 bg-[#19100B] overflow-hidden text-[#ECE5D8]">
      {/* Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-[#ECE5D8]/10 bg-[#241610]/40 py-5 mb-24">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-serif text-2xl sm:text-4xl uppercase tracking-widest text-[#ECE5D8]/40">
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">CANOEIRA</span> • ALMA SOLAR • SITE OFICIAL EM BREVE
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">VESTUÁRIO DE PERFORMANCE</span> • EST. 2025 • PRÉ-LANÇAMENTO VIP
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">SOLSTÍCIO & ENERGIA</span> • TECNOLOGIA UV50+
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">CANOEIRA</span> • ALMA SOLAR • SITE OFICIAL EM BREVE
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">VESTUÁRIO DE PERFORMANCE</span> • EST. 2025 • PRÉ-LANÇAMENTO VIP
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
              <span className="w-8 h-[1px] bg-[#00F5D4]" />
              <span>O E-commerce Oficial Está Chegando</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1]">
              Não é apenas vestuário.<br />
              É o <span className="italic text-[#00F5D4]">conforto do seu dia a dia</span> no sol.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#ECE5D8]/80 font-light leading-relaxed">
              A <strong>Canoeira</strong> foi concebida do desejo de unir o desempenho exigido na prática esportiva
              à elegância despretensiosa do vestuário solar. Estamos preparando nossa loja oficial online para que você possa adquirir todas as peças exclusivas diretamente da fábrica.
            </p>

            <div className="p-6 rounded-2xl glass-panel border border-[#7A4421]/50 relative overflow-hidden mt-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5D4]/10 rounded-full blur-2xl pointer-events-none" />
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#ECE5D8] leading-relaxed">
                "Este site de pré-lançamento foi feito para que nossos clientes garantam acesso prioritário e desconto exclusivo no dia da inauguração da loja online oficial."
              </blockquote>
              <div className="mt-4 font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
                — Equipe Canoeira
              </div>
            </div>
          </div>

          {/* Right Brand Emblem Highlight */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Terracotta & Cyan aura */}
            <div className="absolute w-72 h-72 bg-[#7A4421]/50 rounded-full blur-[90px]" />
            <div className="absolute w-48 h-48 bg-[#00F5D4]/20 rounded-full blur-[60px]" />

            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-panel p-6 border border-[#ECE5D8]/15 flex flex-col items-center justify-center text-center shadow-2xl group">
              {/* Brand Logo Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-[#7A4421]/30 p-8 transition-transform duration-700 group-hover:scale-105">
                <img
                  src="/assets/IMG_5334.PNG"
                  alt="Canoeira Identity"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Tag below */}
              <div className="absolute bottom-4 left-4 right-4 py-2 rounded-xl bg-[#19100B]/90 backdrop-blur-md border border-[#00F5D4]/30 font-syne text-xs uppercase tracking-widest text-[#00F5D4] flex items-center justify-center gap-2">
                <Sun className="w-3.5 h-3.5" />
                <span>Identidade Solar Original</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                data-cursor="PILAR"
                className="group relative p-8 rounded-3xl glass-panel border border-[#ECE5D8]/10 hover:border-[#00F5D4]/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-serif text-4xl text-[#00F5D4] font-light">
                    {pillar.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#7A4421]/30 text-[#00F5D4] group-hover:bg-[#00F5D4] group-hover:text-[#19100B] transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#ECE5D8] mb-3 group-hover:text-[#00F5D4] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-[#ECE5D8]/70 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
