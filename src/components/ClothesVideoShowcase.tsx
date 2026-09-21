import React from 'react';
import { Shirt, ShieldCheck, ArrowRight, Zap, Sun, Sparkles } from 'lucide-react';

export const ClothesVideoShowcase: React.FC = () => {
  const specs = [
    { title: 'Malha UV 50+', desc: 'Proteção solar permanente contra raios UVA e UVB' },
    { title: 'Secagem Rápida & Elasticidade', desc: 'Evaporação rápida do suor com liberdade total 360°' },
    { title: 'Anti Odor & Anti Bacteriana', desc: 'Fibras inteligentes que inibem odores da transpiração' },
    { title: 'Anti-Pilling & Toque Macio', desc: 'Máxima durabilidade sem bolinhas e conforto absoluto na pele' },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00F5D4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
            <Shirt className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Camisetas Aero Sport Dry</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Vocês pediram e a gente atendeu! <br className="hidden sm:inline" />
            <span className="italic text-[#00F5D4]">Chegaram as Aero Sport Dry.</span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#ECE5D8]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Chegaram as <strong>Aero Sport Dry</strong> nas versões <strong>manga curta</strong> e <strong>regata</strong>, com as estampas que são a cara do Cerrado.
          </p>

          <p className="mt-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
            Pensada pro seu melhor desempenho
          </p>
        </div>

        {/* Video & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video Container with camisetasAero.mp4 */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#00F5D4]/30 shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden bg-[#241610]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/camisetasAero.mp4" type="video/mp4" />
                  <source src="/assets/videocamisetasAero.mp4" type="video/mp4" />
                </video>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/30 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                  Manga Curta & Regata • Versões Cerrado
                </div>
              </div>
            </div>
          </div>

          {/* Side Highlights Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-[#ECE5D8]/15 flex flex-col gap-5">
              <div className="border-b border-[#ECE5D8]/10 pb-3">
                <h3 className="font-serif text-xl font-medium text-[#ECE5D8]">
                  Tecnologia Aero Sport Dry
                </h3>
                <p className="font-syne text-[10px] uppercase tracking-wider text-[#00F5D4] mt-0.5">
                  Malha UV 50+ • Cerrado Edition
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {specs.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-[#241610]/80 border border-[#ECE5D8]/10">
                    <ShieldCheck className="w-4 h-4 text-[#00F5D4] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-syne text-xs font-bold text-[#ECE5D8]">{s.title}</h4>
                      <p className="font-sans text-[11px] text-[#ECE5D8]/70 mt-0.5 font-light">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#inauguracao"
                className="w-full py-4 rounded-2xl bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all text-center shadow-[0_0_20px_rgba(0,245,212,0.3)] cursor-pointer mt-2"
              >
                <span>Garanta já a sua!</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
