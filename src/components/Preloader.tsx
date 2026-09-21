import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [canSkip, setCanSkip] = useState(false);

  // Status message cycling according to progress
  const getStatusText = (prog: number) => {
    if (prog < 25) return 'DESPERTANDO O CERRADO...';
    if (prog < 55) return 'ALMA SOLAR • MOVIMENTO & PAUSA...';
    if (prog < 85) return 'PREPARANDO A NOVA LOJA ONLINE...';
    if (prog < 100) return 'CONECTANDO AO SEU PRÓPRIO FLOW...';
    return 'BEM-VINDO À CANOEIRA';
  };

  useEffect(() => {
    // Enable skip button after 1s
    const skipTimer = setTimeout(() => setCanSkip(true), 1000);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 400);
    }, 150);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="clean-brand-preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Luxury curtain reveal
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 bg-[#120A07] text-[#ECE5D8] overflow-hidden select-none"
        >
          {/* 1. ATMOSPHERIC SOLAR BACKGROUND LIGHTS (NO VIDEO) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Terracotta radial warmth */}
            <div className="absolute -top-32 -left-32 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#7A4421]/25 rounded-full blur-[180px]" />
            
            {/* Cyan Solar core glow behind center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-[#00F5D4]/18 rounded-full blur-[160px]" />
            
            {/* Subtle radial watermark pattern */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #ECE5D8 1px, transparent 0)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          {/* 2. TOP METADATA ROW */}
          <div className="relative z-10 flex justify-between items-center text-xs font-syne uppercase tracking-widest text-[#ECE5D8]/80">
            {/* GPS Beacon Brasília */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F5D4]" />
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.2em] font-medium text-[#ECE5D8]">
                Brasília • 15°47'38"S 47°52'58"W
              </span>
            </div>

            {/* Numeric Counter */}
            <div className="flex items-center gap-2 font-mono text-sm sm:text-lg font-bold text-[#00F5D4]">
              <span className="text-[10px] uppercase font-syne text-[#ECE5D8]/60 tracking-widest hidden sm:inline">
                Carregando
              </span>
              <span>{progress.toString().padStart(3, '0')}%</span>
            </div>
          </div>

          {/* 3. HERO CENTERPIECE: REAL OFFICIAL BRAND LOGO */}
          <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center max-w-4xl mx-auto px-4 w-full">
            
            {/* Logo Wrapper with Solar Halo */}
            <div className="relative mb-6 sm:mb-8 flex flex-col items-center">
              {/* Cyan diffuse glow behind logo */}
              <div className="absolute inset-0 bg-[#00F5D4]/30 rounded-full blur-3xl -z-10 scale-135 pointer-events-none" />

              {/* The Official Real Logo (Wordmark with Sun Rays) */}
              <motion.img
                src="/assets/canoeiraWordmark.png"
                alt="Canoeira — Marca Oficial"
                initial={{ scale: 0.88, opacity: 0, y: 18 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-[85vw] max-w-[480px] sm:max-w-[580px] md:max-w-[650px] h-auto object-contain filter drop-shadow-[0_15px_40px_rgba(0,245,212,0.5)]"
                draggable={false}
              />
            </div>

            {/* Slogan & Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              {/* Expanding divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent"
              />

              <p className="font-serif italic text-base sm:text-2xl text-[#ECE5D8]/95 font-light tracking-wide">
                A marca que dá flow ao seu movimento
              </p>

              {/* 3 Lines Pillars Tag */}
              <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-syne uppercase tracking-widest text-[#00F5D4] mt-1">
                <span>Movimento</span>
                <span className="text-[#ECE5D8]/30">•</span>
                <span>Proteção</span>
                <span className="text-[#ECE5D8]/30">•</span>
                <span>Pausa</span>
              </div>
            </motion.div>

          </div>

          {/* 4. BOTTOM PROGRESS & ACTION BAR */}
          <div className="relative z-10 flex flex-col gap-4">
            
            {/* Status & Skip Action */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-syne uppercase tracking-wider text-[#ECE5D8]/70 px-1">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#00F5D4] animate-spin" style={{ animationDuration: '10s' }} />
                <span className="tracking-widest text-[#ECE5D8] font-medium">
                  {getStatusText(progress)}
                </span>
              </div>

              {canSkip && (
                <button
                  onClick={handleSkip}
                  className="flex items-center gap-1.5 text-[11px] font-syne uppercase tracking-widest text-[#00F5D4] hover:text-[#66FFEA] transition-colors cursor-pointer active:scale-95"
                >
                  <span>Pular</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* High-Precision Fluid Loading Rail */}
            <div className="w-full h-1 sm:h-1.5 bg-[#241610] rounded-full overflow-hidden border border-[#ECE5D8]/15 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7A4421] via-[#00F5D4] to-[#66FFEA] rounded-full shadow-[0_0_15px_#00F5D4]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Bottom Tagline */}
            <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-syne uppercase tracking-widest text-[#ECE5D8]/50 pt-1">
              <span>Nuvemshop E-commerce • Em Breve</span>
              <span>Edição Limitada 2025</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
