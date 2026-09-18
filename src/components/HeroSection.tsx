import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onSubscribeSuccess: (email: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F5D4', '#7A4421', '#ECE5D8'],
    });

    setSubscribed(true);
    onSubscribeSuccess(email);
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-[#19100B]">
      {/* Background Video - Clean & Unobscured */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
        >
          <source src="/assets/canoeira.mp4" type="video/mp4" />
        </video>

        {/* Subtle Dark Gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/50 to-[#19100B]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19100B]/80 via-[#19100B]/40 to-transparent" />
      </div>

      {/* Hero Content - Clean & Minimalist */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start gap-6 sm:gap-8 my-auto">
        {/* Simple Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19100B]/80 border border-[#00F5D4]/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
          <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4]">
            Loja Online Oficial • Em Breve
          </span>
        </motion.div>

        {/* Clean Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-[#ECE5D8] leading-[1.05]">
            Inauguração Oficial<span className="text-[#00F5D4]">.</span> <br />
            <span className="italic font-normal text-[#00F5D4]">
              Marca Canoeira.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 font-sans text-sm sm:text-lg text-[#ECE5D8]/85 max-w-xl font-light leading-relaxed">
            Estamos preparando a loja online oficial onde você poderá adquirir toda a linha de vestuário e acessórios da marca Canoeira.
          </p>
        </motion.div>

        {/* Simple Notification Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-xl"
        >
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail para receber o aviso de abertura..."
                required
                className="flex-1 px-5 py-3.5 sm:py-4 rounded-full bg-[#19100B]/80 border border-[#ECE5D8]/20 text-[#ECE5D8] placeholder-[#ECE5D8]/50 focus:outline-none focus:border-[#00F5D4] backdrop-blur-md font-sans text-sm min-h-[48px]"
              />

              <button
                type="submit"
                className="px-7 py-3.5 sm:py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)] min-h-[48px] cursor-pointer"
              >
                <span>Receber Aviso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl bg-[#19100B]/90 border border-[#00F5D4] flex items-center gap-3 text-[#00F5D4] backdrop-blur-md"
            >
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#00F5D4]" />
              <div>
                <h4 className="font-syne font-bold text-xs uppercase tracking-wide text-[#ECE5D8]">
                  E-mail Cadastrado com Sucesso!
                </h4>
                <p className="text-xs text-[#ECE5D8]/70 font-sans mt-0.5">
                  Você receberá o aviso em primeira mão no dia do lançamento da loja oficial.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
