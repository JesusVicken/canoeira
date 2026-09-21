import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Enable skip after 1.5s
    const skipTimer = setTimeout(() => setCanSkip(true), 1500);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 18) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 110);

    return () => {
      clearInterval(timer);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 bg-[#19100B] text-[#ECE5D8] overflow-hidden"
        >
          {/* CINEMATIC BACKGROUND VIDEO - canoeira2.mp4 */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] scale-105"
            >
              <source src="/assets/canoeira2.mp4" type="video/mp4" />
              <source src="/assets/cahnoeira2.mp4" type="video/mp4" />
            </video>

            {/* Dark Cinematic Vignette & Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/40 to-[#19100B]/85" />
            <div className="absolute inset-0 bg-[#7A4421]/15 mix-blend-color" />
          </div>

          {/* Top Header info */}
          <div className="relative z-10 flex justify-between items-center font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#ECE5D8]/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
              <span>Canoeira Est. 2025</span>
            </div>
            <span>Pré-Lançamento Oficial</span>
          </div>

          {/* Center Brand Identity Reveal */}
          <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center max-w-xl mx-auto px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 flex flex-col items-center justify-center"
            >
              {/* Soft glow behind logo */}
              <div className="absolute inset-0 bg-[#00F5D4]/20 rounded-full blur-3xl -z-10 scale-90" />
              
              <img
                src="/assets/canoeira2.svg"
                alt="Canoeira — Marca Oficial"
                className="w-56 sm:w-72 md:w-84 h-auto max-h-48 object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#ECE5D8]/15"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="font-syne text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#00F5D4] font-semibold">
                Movimento • Proteção • Pausa
              </p>
              <p className="font-sans text-xs text-[#ECE5D8]/70 font-light max-w-md">
                A nova plataforma oficial de vendas online está sendo preparada
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="relative z-10 flex flex-col gap-3 max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-end font-syne">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#ECE5D8]/50">
                  Carregando Coleção
                </span>
                {canSkip && (
                  <button
                    onClick={handleSkip}
                    className="text-[10px] uppercase tracking-widest text-[#00F5D4] hover:underline flex items-center gap-1 cursor-pointer transition-all"
                  >
                    <span>Entrar no site</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              <span className="text-4xl sm:text-6xl font-serif text-[#00F5D4] font-light tracking-tight">
                {progress}%
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full h-[2px] bg-[#ECE5D8]/15 rounded-full overflow-hidden">
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
