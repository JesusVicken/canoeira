import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shirt, Camera, Volume2, VolumeX } from 'lucide-react';

interface MobileBottomBarProps {
  onVIPClick: () => void;
  onSoundToggle?: () => void;
  isSoundPlaying?: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onVIPClick,
  onSoundToggle,
  isSoundPlaying = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150) {
        // Hide when scrolling down fast, show when scrolling up or near bottom
        setIsVisible(currentScrollY < lastScrollY || currentScrollY > document.documentElement.scrollHeight - 1000);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between gap-2 p-2 rounded-full glass-panel border border-[#00F5D4]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-[#19100B]/90"
        >
          {/* Quick Section Shortcuts */}
          <div className="flex items-center gap-1 pl-2">
            <button
              onClick={() => scrollToId('colecoes')}
              className="p-2.5 rounded-full text-[#ECE5D8]/80 hover:text-[#00F5D4] active:scale-90 transition-transform"
              title="Coleções"
            >
              <Shirt className="w-5 h-5 text-[#00F5D4]" />
            </button>

            <button
              onClick={() => scrollToId('instagram')}
              className="p-2.5 rounded-full text-[#ECE5D8]/80 hover:text-[#00F5D4] active:scale-90 transition-transform"
              title="Fotos Lookbook"
            >
              <Camera className="w-5 h-5 text-[#ECE5D8]" />
            </button>

            {onSoundToggle && (
              <button
                onClick={onSoundToggle}
                className={`p-2.5 rounded-full active:scale-90 transition-transform ${
                  isSoundPlaying ? 'text-[#00F5D4]' : 'text-[#ECE5D8]/70'
                }`}
                title="Som do Mar"
              >
                {isSoundPlaying ? (
                  <Volume2 className="w-5 h-5 text-[#00F5D4] animate-pulse" />
                ) : (
                  <VolumeX className="w-5 h-5" />
                )}
              </button>
            )}
          </div>

          {/* Main Action Button */}
          <button
            onClick={() => scrollToId('viseiras')}
            className="flex-1 py-3 px-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,245,212,0.5)] active:scale-95 transition-transform cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-[#19100B]" />
            <span>Linha Proteção (Viseiras)</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
