import React from 'react';
import { motion } from 'framer-motion';
import { SafariAutoplayVideo } from './common/SafariAutoplayVideo';

export const BrandStoryVideoSection: React.FC = () => {
  const stats = [
    { label: 'Proteção FPU', val: '50+', sub: 'Certificação Solar Max' },
    { label: 'Origem', val: '100%', sub: 'Desenvolvimento Nacional' },
    { label: 'Embalagens', val: 'Eco', sub: 'Zero Plástico de Uso Único' },
    { label: 'Testes de Uso', val: '500+h', sub: 'Testes de Qualidade' },
  ];

  return (
    <section id="filosofia" className="relative py-24 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#7A4421]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
            <span className="w-8 h-[1px] bg-[#00F5D4]" />
            <span>Nossa Qualidade</span>
            <span className="w-8 h-[1px] bg-[#00F5D4]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
            Do primeiro raio de sol <br />
            <span className="italic text-[#00F5D4]">ao fim do dia.</span>
          </h2>
        </div>

        {/* Video Player Box - 100% Clean with Cross-Browser Safari Autoplay */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 shadow-2xl max-w-5xl mx-auto">
          <div className="relative aspect-video w-full overflow-hidden bg-[#241610]">
            <SafariAutoplayVideo
              src="/assets/videocasal.mp4"
              fallbackSrc="/assets/canoeiraroupas.mp4"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
              ariaLabel="Canoeira — Qualidade e Estilo de Vida"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 max-w-5xl mx-auto">
          {stats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#ECE5D8]/10 text-center flex flex-col items-center justify-center"
            >
              <span className="font-serif text-3xl sm:text-5xl font-bold text-[#00F5D4]">
                {st.val}
              </span>
              <h4 className="font-syne text-[11px] sm:text-xs uppercase tracking-widest text-[#ECE5D8] mt-2">
                {st.label}
              </h4>
              <p className="font-sans text-[10px] sm:text-[11px] text-[#ECE5D8]/60 mt-0.5">
                {st.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
