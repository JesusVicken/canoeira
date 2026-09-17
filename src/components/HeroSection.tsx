import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onSubscribeSuccess: (email: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubscribeSuccess }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Countdown timer target
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 36,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F5D4', '#7A4421', '#ECE5D8', '#66FFEA'],
    });

    setSubscribed(true);
    onSubscribeSuccess(email);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 overflow-hidden bg-[#19100B]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.7] contrast-[1.1] transition-transform duration-1000"
        >
          <source src="/assets/canoeira.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Terracotta & Cyan Brand Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/60 to-[#19100B]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A4421]/40 via-transparent to-[#19100B]/80" />

        {/* Radial Cyan Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[#00F5D4]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Video Control Buttons floating at bottom right */}
        <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 bg-[#241610]/70 backdrop-blur-md p-1.5 rounded-full border border-[#ECE5D8]/10">
          <button
            onClick={toggleVideoPlay}
            data-cursor={isVideoPlaying ? 'PAUSE' : 'PLAY'}
            className="p-2 rounded-full text-[#ECE5D8] hover:text-[#00F5D4] hover:bg-[#7A4421]/40 transition-all"
            title={isVideoPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
          >
            {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleVideoMute}
            data-cursor={isVideoMuted ? 'UNMUTE' : 'MUTE'}
            className="p-2 rounded-full text-[#ECE5D8] hover:text-[#00F5D4] hover:bg-[#7A4421]/40 transition-all"
            title={isVideoMuted ? 'Ativar áudio do vídeo' : 'Mutar vídeo'}
          >
            {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-start gap-6 sm:gap-8 pt-6 sm:pt-8">
        {/* Pre-launch Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full glass-pill border border-[#00F5D4]/30"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
          <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4]">
            Pré-Lançamento Exclusivo • Est. 2025
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-[#ECE5D8] leading-[0.98]">
            Sinta a maré<span className="text-[#00F5D4]">.</span> <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#ECE5D8] via-[#00F5D4] to-[#ECE5D8]">
              Vista o sol.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 font-sans text-sm sm:text-lg md:text-xl text-[#ECE5D8]/80 max-w-2xl font-light leading-relaxed">
            Nascida no litoral e moldada pela essência da canoa e dos esportes aquáticos. 
            Uma marca de vestuário e acessórios solares feita para quem vive em harmonia com a natureza.
          </p>
        </motion.div>

        {/* Countdown & Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-2xl flex flex-col gap-4 sm:gap-6"
        >
          {/* Form */}
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail para o Lote VIP..."
                  required
                  className="w-full px-5 py-3.5 sm:py-4 rounded-full bg-[#241610]/80 border border-[#ECE5D8]/20 text-[#ECE5D8] placeholder-[#ECE5D8]/40 focus:outline-none focus:border-[#00F5D4] focus:ring-2 focus:ring-[#00F5D4]/30 backdrop-blur-md transition-all font-sans text-sm min-h-[48px]"
                />
              </div>

              <button
                type="submit"
                data-cursor="JOIN VIP"
                className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] transition-all duration-300 shadow-[0_0_25px_rgba(0,245,212,0.4)] hover:scale-105 active:scale-95 cursor-pointer min-h-[48px]"
              >
                <span>Garantir 10% OFF</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl glass-panel-cyan flex items-center gap-4 text-[#00F5D4]"
            >
              <ShieldCheck className="w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="font-syne font-bold text-sm uppercase tracking-wide">
                  Presença Confirmada no Lote VIP 0!
                </h4>
                <p className="text-xs text-[#ECE5D8]/80 font-sans mt-0.5">
                  Você receberá o cupom de 10% OFF e o link de acesso antes do lançamento oficial.
                </p>
              </div>
            </motion.div>
          )}

          {/* Perks tags */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-syne text-[10px] sm:text-[11px] text-[#ECE5D8]/60 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
              10% OFF no Lançamento
            </span>
            <span className="text-[#00F5D4]">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F5D4]" />
              Edição Limitada Lote 0
            </span>
            <span className="text-[#00F5D4]">•</span>
            <span>Sem Spam</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Countdown + Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 sm:pt-8 border-t border-[#ECE5D8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Countdown */}
        <div className="flex items-center gap-3 sm:gap-8">
          <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#ECE5D8]/50 hidden sm:inline-block">
            Contagem Regressiva Lançamento:
          </span>

          <div className="flex items-center gap-2.5 sm:gap-3 font-serif">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-3xl font-bold text-[#00F5D4]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-syne text-[8px] sm:text-[9px] uppercase tracking-widest text-[#ECE5D8]/50">Dias</span>
            </div>
            <span className="text-[#00F5D4] text-lg sm:text-xl font-light">:</span>

            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-3xl font-bold text-[#ECE5D8]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-syne text-[8px] sm:text-[9px] uppercase tracking-widest text-[#ECE5D8]/50">Horas</span>
            </div>
            <span className="text-[#ECE5D8]/40 text-lg sm:text-xl font-light">:</span>

            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-3xl font-bold text-[#ECE5D8]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-syne text-[8px] sm:text-[9px] uppercase tracking-widest text-[#ECE5D8]/50">Min</span>
            </div>
            <span className="text-[#ECE5D8]/40 text-lg sm:text-xl font-light">:</span>

            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-3xl font-bold text-[#00F5D4] animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-syne text-[8px] sm:text-[9px] uppercase tracking-widest text-[#ECE5D8]/50">Seg</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#manifesto"
          data-cursor="EXPLORE"
          className="flex items-center gap-2 sm:gap-3 font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#ECE5D8]/60 hover:text-[#00F5D4] transition-colors"
        >
          <span>Role para explorar</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#ECE5D8]/20 flex items-center justify-center animate-bounce">
            <Waves className="w-3.5 h-3.5 text-[#00F5D4]" />
          </div>
        </a>
      </div>
    </section>
  );
};
