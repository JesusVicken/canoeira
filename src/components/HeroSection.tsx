import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Bell, Truck, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onSubscribeSuccess: (email: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
    <section className="relative pt-24 sm:pt-28 pb-12 px-4 sm:px-8 bg-[#19100B] overflow-hidden text-[#ECE5D8]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        
        {/* 1. CLEAN VIDEO CONTAINER */}
        <div className="w-full relative rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 shadow-2xl">
          <div className="relative aspect-[4/5] sm:aspect-video w-full overflow-hidden bg-[#241610]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/canoeira.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* 2. TEXT & NOTIFICATION FORM FOCUSED ON NEW E-COMMERCE LAUNCH */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 sm:gap-6 py-4">
          
          {/* Simple Clean Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241610] border border-[#00F5D4]/40 font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4]">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span>Novo Site de Vendas Online • Em Breve</span>
          </div>

          {/* Clean Headline */}
          <h1 className="font-serif text-3xl sm:text-6xl font-medium tracking-tight text-[#ECE5D8] leading-tight">
            A nova loja online da Canoeira <br />
            <span className="italic font-normal text-[#00F5D4]">
              está chegando.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/80 font-light max-w-xl leading-relaxed">
            Estamos lançando a plataforma de vendas online da marca Canoeira. 
            Compre roupas de alta qualidade com pagamento facilitado (Pix e Cartão) e entrega para todo o Brasil.
          </p>

          {/* Badges: Pagamento & Entrega Brasil */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-syne uppercase tracking-wider text-[#ECE5D8]/70">
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#00F5D4]" />
              Pagamento Online em até 6x
            </span>
            <span className="text-[#00F5D4]">•</span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#00F5D4]" />
              Entrega para Todo o Brasil
            </span>
          </div>

          {/* Notification Input */}
          <div className="w-full max-w-md mt-2">
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail para o aviso de abertura..."
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-[#241610] border border-[#ECE5D8]/20 text-[#ECE5D8] placeholder-[#ECE5D8]/50 focus:outline-none focus:border-[#00F5D4] font-sans text-sm min-h-[48px]"
                />

                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)] min-h-[48px] cursor-pointer"
                >
                  <Bell className="w-4 h-4 fill-[#19100B]" />
                  <span>Avisar Lançamento</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-[#241610] border border-[#00F5D4] flex items-center justify-center gap-3 text-[#00F5D4]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#00F5D4]" />
                <span className="font-syne text-xs font-bold uppercase tracking-wide text-[#ECE5D8]">
                  E-mail cadastrado! Você receberá o link da nova loja online.
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
