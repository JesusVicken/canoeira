import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export const BrandStoryVideoSection: React.FC = () => {
  const stats = [
    { label: 'Proteção FPU', val: '50+', sub: 'Certificação Solar Max' },
    { label: 'Origem', val: '100%', sub: 'Desenvolvimento Nacional' },
    { label: 'Embalagens', val: 'Eco', sub: 'Zero Plástico de Uso Único' },
    { label: 'Testes de Campo', val: '500+h', sub: 'Testes de Uso e Qualidade' },
  ];

  return (
    <section id="filosofia" className="relative py-28 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#7A4421]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
            <span className="w-8 h-[1px] bg-[#00F5D4]" />
            <span>Nossa Origem & Qualidade</span>
            <span className="w-8 h-[1px] bg-[#00F5D4]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight">
            Do primeiro raio de sol <br />
            <span className="italic text-[#00F5D4]">ao fim do dia.</span>
          </h2>
        </div>

        {/* Video Player Framework with Continuous Autoplay */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 shadow-2xl group max-w-5xl mx-auto">
          <div className="relative aspect-video w-full overflow-hidden bg-[#241610]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/assets/canoeira2.mp4" type="video/mp4" />
              <source src="/assets/cahnoeira2.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-[#19100B]/30 pointer-events-none" />

            {/* Bottom Floating Caption inside Video */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-3 glass-pill px-4 py-2 rounded-full border border-[#00F5D4]/30">
                <Sun className="w-4 h-4 text-[#00F5D4]" />
                <span className="font-syne text-xs uppercase tracking-widest text-[#ECE5D8]">
                  Canoeira • Produção & Desenvolvimento Nacional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {stats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-[#ECE5D8]/10 text-center flex flex-col items-center justify-center"
            >
              <span className="font-serif text-3xl sm:text-5xl font-bold text-[#00F5D4]">
                {st.val}
              </span>
              <h4 className="font-syne text-xs uppercase tracking-widest text-[#ECE5D8] mt-2">
                {st.label}
              </h4>
              <p className="font-sans text-[11px] text-[#ECE5D8]/60 mt-1">
                {st.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
