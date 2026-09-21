import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Sparkles, ArrowRight, Sun, Heart } from 'lucide-react';

export const BrandLinesOverview: React.FC = () => {
  const lines = [
    {
      id: 'movimento',
      tag: 'Linha 01',
      title: 'Movimento',
      subtitle: 'Roupas de treino e lifestyle',
      desc: 'Modelagens ergonômicas e tecidos inteligentes de alta respirabilidade para acompanhar cada movimento sob o sol.',
      items: ['Camisas Solares UV50+', 'Tops Activewear', 'Shorts de Treino', 'Regatas Performance'],
      icon: Activity,
      accent: '#00F5D4',
      image: '/assets/canoieraBlusa.jpeg',
      targetId: 'colecoes',
      actionText: 'Ver Vestuário',
    },
    {
      id: 'protecao',
      tag: 'Linha 02 • Proteção Solar',
      title: 'Linha Proteção',
      subtitle: 'Viseiras Canoeira & Acessórios Solares',
      desc: 'Viseiras e acessórios solares projetados para bloquear 98% dos raios UV, com abas antirreflexo, ajuste confortável e secagem ultrarrápida.',
      items: ['Viseira Athos Bulcão (Pré-Venda R$ 69)', 'Viseira Orgulho de Ser Brasileira', 'Viseira Lago Paranoá', 'Proteção FPU50+ Vitalícia'],
      icon: ShieldCheck,
      accent: '#00F5D4',
      image: '/assets/viseiras/viseiras1.jpeg',
      targetId: 'viseiras',
      actionText: 'Ver Viseiras (Linha Proteção)',
    },
    {
      id: 'pausa',
      tag: 'Linha 03 • Nova Coleção',
      title: 'Pausa',
      subtitle: 'Produtos para momentos de pausa com qualidade',
      desc: 'Sabonetes artesanais veganos e escalda-pés terapêuticos. Porque na recuperação e na pausa que o corpo agradece.',
      items: ['Trio Maré de Paz', 'Trio Leveza', 'Escalda-Pés Terapêuticos', '100% Vegano & Natural'],
      icon: Sparkles,
      accent: '#00F5D4',
      badge: 'Novidade!',
      image: '/assets/banhoprincipal.jpg',
      targetId: 'linha-pausa',
      actionText: 'Conhecer Linha Pausa',
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="linhas" className="relative py-20 sm:py-28 bg-[#140D09] text-[#ECE5D8] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7A4421]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F5D4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4] mb-4">
            <Sun className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Arquitetura da Marca</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Tenho 3 linhas <br className="hidden sm:inline" />
            <span className="italic text-[#00F5D4]">na Canoeira.</span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#ECE5D8]/75 font-light max-w-xl mx-auto leading-relaxed">
            Do treino ao autocuidado: conheça os três pilares de produtos que estarão à venda em breve no nosso novo e-commerce oficial.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {lines.map((line, idx) => {
            const IconComponent = line.icon;
            return (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl glass-panel border border-[#ECE5D8]/15 overflow-hidden p-6 sm:p-8 flex flex-col justify-between hover:border-[#00F5D4]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl"
              >
                {/* Background Image with Crisp Clear Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={line.image}
                    alt={line.title}
                    className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140D09] via-[#140D09]/65 to-[#140D09]/30" />
                </div>

                {/* Top Info */}
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#ECE5D8]/20 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                      {line.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                      {line.title}
                    </h3>
                    <p className="font-syne text-xs text-[#00F5D4] mt-1 tracking-wider uppercase">
                      {line.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#ECE5D8]/75 font-light leading-relaxed">
                    {line.desc}
                  </p>

                  {/* Items Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {line.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-sans px-2.5 py-1 rounded-lg bg-[#241610]/80 border border-[#ECE5D8]/10 text-[#ECE5D8]/80"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="relative z-10 pt-6 mt-6 border-t border-[#ECE5D8]/10">
                  <button
                    onClick={() => scrollTo(line.targetId)}
                    className="w-full py-3.5 rounded-2xl bg-[#241610]/90 hover:bg-[#00F5D4] hover:text-[#19100B] border border-[#ECE5D8]/20 hover:border-[#00F5D4] text-[#ECE5D8] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{line.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
