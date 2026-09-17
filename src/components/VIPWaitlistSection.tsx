import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowRight, Gift, Clock, Star, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VIPWaitlistSectionProps {
  onSubscribeSuccess: (email: string) => void;
}

export const VIPWaitlistSection: React.FC<VIPWaitlistSectionProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paddleStyle, setPaddleStyle] = useState('Canoa Havaiana (VA\'A)');
  const [subscribed, setSubscribed] = useState(false);

  const perks = [
    {
      title: '15% OFF no Lote 0',
      desc: 'Desconto exclusivo válido para a primeira semana de lançamento.',
    },
    {
      title: 'Acesso Antecipado 24h',
      desc: 'Receba o link secreto da loja antes da abertura para o público geral.',
    },
    {
      title: 'Kit Exclusivo de Adesivos',
      desc: 'Adesivos vinílicos impermeáveis para sua canoa, remo ou garrafa.',
    },
    {
      title: 'Frete Grátis Nacional',
      desc: 'Frete grátis na primeira compra acima de R$ 250.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#00F5D4', '#7A4421', '#ECE5D8', '#66FFEA'],
    });

    setSubscribed(true);
    onSubscribeSuccess(email);
  };

  return (
    <section id="vip" className="relative py-28 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F5D4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="rounded-3xl glass-panel border border-[#00F5D4]/40 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Shimmer top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A4421] via-[#00F5D4] to-[#7A4421]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span className="font-syne text-[11px] uppercase tracking-widest text-[#00F5D4]">
                  Vagas Limitadas • Lote VIP 0
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
                Garanta sua vaga na <br />
                <span className="italic text-[#00F5D4]">primeira remada.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/80 font-light leading-relaxed">
                As primeiras peças da Canoeira serão produzidas em tiragem limitada numerada. 
                Cadastre-se para garantir prioridade de estoque e descontos exclusivos.
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {perks.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#241610]/80 border border-[#ECE5D8]/10">
                    <div className="p-1 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-syne text-xs font-bold text-[#ECE5D8]">{p.title}</h4>
                      <p className="font-sans text-[11px] text-[#ECE5D8]/60 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-5">
              {!subscribed ? (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 rounded-2xl bg-[#241610] border border-[#ECE5D8]/15 flex flex-col gap-4 shadow-xl"
                >
                  <h3 className="font-serif text-2xl text-[#ECE5D8] text-center mb-2">
                    Inscrição VIP
                  </h3>

                  <div>
                    <label className="block font-syne text-[11px] uppercase tracking-widest text-[#ECE5D8]/70 mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como prefere ser chamado..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#19100B] border border-[#ECE5D8]/20 text-[#ECE5D8] text-sm focus:outline-none focus:border-[#00F5D4]"
                    />
                  </div>

                  <div>
                    <label className="block font-syne text-[11px] uppercase tracking-widest text-[#ECE5D8]/70 mb-1.5">
                      Seu Melhor E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#19100B] border border-[#ECE5D8]/20 text-[#ECE5D8] text-sm focus:outline-none focus:border-[#00F5D4]"
                    />
                  </div>

                  <div>
                    <label className="block font-syne text-[11px] uppercase tracking-widest text-[#ECE5D8]/70 mb-1.5">
                      Sua Modalidade Principal
                    </label>
                    <select
                      value={paddleStyle}
                      onChange={(e) => setPaddleStyle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#19100B] border border-[#ECE5D8]/20 text-[#ECE5D8] text-sm focus:outline-none focus:border-[#00F5D4]"
                    >
                      <option value="Canoa Havaiana (VA'A)">Canoa Havaiana (VA'A)</option>
                      <option value="Stand Up Paddle (SUP)">Stand Up Paddle (SUP)</option>
                      <option value="Caiaque">Caiaque & Surfski</option>
                      <option value="Natação / Lifestyle Praiano">Natação & Lifestyle Praiano</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    data-cursor="SUBMIT"
                    className="w-full py-4 mt-2 rounded-xl bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)] cursor-pointer"
                  >
                    <span>Confirmar Minha Vaga VIP</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 font-syne text-[10px] uppercase tracking-widest text-[#ECE5D8]/50 mt-2">
                    <Clock className="w-3 h-3 text-[#00F5D4]" />
                    <span>384 canoeiros já inscritos</span>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-8 rounded-2xl bg-[#241610] border border-[#00F5D4] text-center flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4] flex items-center justify-center text-[#00F5D4]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#ECE5D8]">
                    Inscrição Confirmada!
                  </h3>

                  <p className="font-sans text-xs text-[#ECE5D8]/80 leading-relaxed">
                    Parabéns, <strong>{name || 'Canoeiro'}</strong>! Seu e-mail (<code>{email}</code>) foi adicionado à lista do Lote VIP 0.
                  </p>

                  <div className="p-3 rounded-xl bg-[#19100B] border border-[#00F5D4]/30 text-[11px] font-syne uppercase tracking-wider text-[#00F5D4]">
                    Cupom Reservado: CANOEIRAVIP15
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
