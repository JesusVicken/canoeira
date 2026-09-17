import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Maximize2, Sparkles, Shirt, ShieldCheck, ArrowRight, X } from 'lucide-react';

export const ClothesVideoShowcase: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const highlights = [
    { title: 'Caimento em Movimento', desc: 'Ergonomia 3D testada na água para não limitar remadas' },
    { title: 'Tecido Solar FPU50+', desc: 'Filtro solar permanente que não sai nas lavagens' },
    { title: 'Secagem Ultra Hydro', desc: 'Evaporação rápida de suor e salinidade do mar' },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
            <Shirt className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Showcase em Vídeo • Peças em Movimento</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Veja as peças <br className="hidden sm:inline" />
            <span className="italic text-[#00F5D4]">em ação na água e no sol.</span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#ECE5D8]/75 font-light max-w-xl mx-auto leading-relaxed">
            Confira a textura, a leveza e a mobilidade real do vestuário Canoeira. 
            Desenvolvido para entregar conforto absoluto em cada visada.
          </p>
        </div>

        {/* Video Player Box & Side Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Video Box (Lg: 8 cols) */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#00F5D4]/40 shadow-[0_0_50px_rgba(0,245,212,0.15)] group">
              {/* Responsive Video Container */}
              <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden bg-[#241610]">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/assets/CANOEIRAROUPAS.mp4" type="video/mp4" />
                  <source src="/assets/canoeiraroupas.mp4" type="video/mp4" />
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-[#19100B]/30 pointer-events-none" />

                {/* Floating Controls Bar inside video */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between z-10 pointer-events-auto">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/30 text-[#00F5D4] font-syne text-[10px] sm:text-xs uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
                    <span>Coleção em Vídeo</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 sm:p-2.5 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#ECE5D8]/20 text-[#ECE5D8] hover:text-[#00F5D4] hover:border-[#00F5D4] transition-all"
                      title={isMuted ? 'Desmutar vídeo' : 'Mutar vídeo'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00F5D4]" />}
                    </button>

                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="p-2 sm:p-2.5 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#ECE5D8]/20 text-[#ECE5D8] hover:text-[#00F5D4] hover:border-[#00F5D4] transition-all"
                      title="Ver em tela cheia"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Highlights Column (Lg: 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-[#ECE5D8]/15 flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-[#ECE5D8]/10 pb-4">
                <div className="p-2.5 rounded-2xl bg-[#00F5D4]/15 text-[#00F5D4]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#ECE5D8]">
                    Destaques do Vestuário
                  </h3>
                  <p className="font-syne text-[10px] uppercase tracking-wider text-[#00F5D4]">
                    Linha Sol & Maré
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#241610]/70 border border-[#ECE5D8]/10 hover:border-[#00F5D4]/40 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#00F5D4] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-syne text-xs font-bold text-[#ECE5D8]">{h.title}</h4>
                      <p className="font-sans text-xs text-[#ECE5D8]/70 mt-0.5 font-light">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#vip"
                className="w-full py-3.5 rounded-2xl bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)]"
              >
                <span>Quero Garantir no Lote VIP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 z-50 bg-[#19100B]/98 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full aspect-video rounded-3xl overflow-hidden glass-panel border border-[#00F5D4]/50 shadow-2xl bg-[#19100B]"
            >
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-[#19100B]/80 text-[#ECE5D8] hover:text-[#00F5D4] border border-[#00F5D4]/40 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <video
                autoPlay
                loop
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/assets/CANOEIRAROUPAS.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
