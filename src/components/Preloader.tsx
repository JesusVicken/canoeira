import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 bg-[#19100B] text-[#ECE5D8] overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7A4421]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#00F5D4]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Header info */}
          <div className="flex justify-between items-center z-10 font-syne text-xs uppercase tracking-widest text-[#ECE5D8]/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
              Canoeira Est. 2025
            </span>
            <span>Pré-Lançamento Oficial</span>
          </div>

          {/* Center Logo & Text Reveal */}
          <div className="my-auto text-center z-10 flex flex-col items-center justify-center">
            {/* Sun Rays SVG animation */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative mb-6"
            >
              <svg viewBox="0 0 100 60" className="w-24 h-16 text-[#00F5D4] stroke-current fill-none">
                <circle cx="50" cy="50" r="10" className="fill-[#00F5D4]" />
                <line x1="50" y1="20" x2="50" y2="30" strokeWidth="3" strokeLinecap="round" />
                <line x1="30" y1="28" x2="37" y2="35" strokeWidth="3" strokeLinecap="round" />
                <line x1="70" y1="28" x2="63" y2="35" strokeWidth="3" strokeLinecap="round" />
                <line x1="18" y1="50" x2="28" y2="50" strokeWidth="3" strokeLinecap="round" />
                <line x1="82" y1="50" x2="72" y2="50" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#ECE5D8]"
            >
              Canoeira<span className="text-[#00F5D4]">.</span>
            </motion.h1>

            <p className="mt-3 font-syne text-xs md:text-sm tracking-[0.3em] uppercase text-[#ECE5D8]/70">
              Alma Solar • E-Commerce Oficial Em Breve
            </p>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="z-10 flex flex-col gap-4 max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-end font-syne">
              <span className="text-xs uppercase tracking-widest text-[#ECE5D8]/50">
                Carregando Experiência
              </span>
              <span className="text-4xl md:text-6xl font-serif text-[#00F5D4] font-light">
                {progress}%
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full h-[2px] bg-[#ECE5D8]/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#00F5D4] shadow-[0_0_15px_#00F5D4]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
