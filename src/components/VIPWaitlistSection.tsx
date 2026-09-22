import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Check, Bell, CreditCard, Truck, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VIPWaitlistSectionProps {
  onSubscribeSuccess: (email: string) => void;
}

export const VIPWaitlistSection: React.FC<VIPWaitlistSectionProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const perks = [
    {
      title: 'Vendas 100% Online',
      desc: 'Compre no conforto da sua casa no novo site oficial da Canoeira.',
    },
    {
      title: 'Pagamento Seguro Online',
      desc: 'Aceitamos Pix e Cartões de Crédito com total segurança na nova loja.',
    },
    {
      title: 'Entrega para Todo o Brasil',
      desc: 'Envio rápido via transportadora com código de rastreamento.',
    },
    {
      title: 'Aviso de Inauguração',
      desc: 'Receba o link de abertura da loja online no seu e-mail.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00F5D4', '#7A4421', '#ECE5D8'],
    });

    setSubscribed(true);
    onSubscribeSuccess(email);
  };

  return (
    <section id="inauguracao" className="relative py-20 sm:py-28 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#00F5D4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="rounded-3xl glass-panel border border-[#00F5D4]/40 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Shimmer top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A4421] via-[#00F5D4] to-[#7A4421]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 w-fit">
                <Bell className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span className="font-syne text-[10px] sm:text-[11px] uppercase tracking-widest text-[#00F5D4]">
                  Pré-Lançamento • Nova Loja na Nuvemshop
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
                Seja avisado sobre o novo site <br />
                <span className="italic text-[#00F5D4]">de vendas online.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/80 font-light leading-relaxed">
                A nova plataforma e-commerce oficial da marca Canoeira está sendo construída na Nuvemshop reunindo nossas linhas de <strong>Movimento</strong>, <strong>Proteção</strong> e <strong>Pausa</strong>. 
                Cadastre-se para receber o aviso no dia da abertura da loja virtual.
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
                {perks.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#241610]/80 border border-[#ECE5D8]/10">
                    <div className="p-1 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] mt-0.5 flex-shrink-0">
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
                  className="p-5 sm:p-8 rounded-2xl bg-[#241610] border border-[#ECE5D8]/15 flex flex-col gap-4 shadow-xl"
                >
                  <h3 className="font-serif text-2xl text-[#ECE5D8] text-center mb-1">
                    Cadastrar E-mail
                  </h3>

                  <div>
                    <label className="block font-syne text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ECE5D8]/70 mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como prefere ser chamado..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#19100B] border border-[#ECE5D8]/20 text-[#ECE5D8] text-base sm:text-sm focus:outline-none focus:border-[#00F5D4] min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block font-syne text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ECE5D8]/70 mb-1.5">
                      Seu Melhor E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#19100B] border border-[#ECE5D8]/20 text-[#ECE5D8] text-base sm:text-sm focus:outline-none focus:border-[#00F5D4] min-h-[48px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-2 rounded-xl bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)] cursor-pointer min-h-[48px]"
                  >
                    <span>Avisar Inauguração da Loja</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#241610] border border-[#00F5D4] text-center flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4] flex items-center justify-center text-[#00F5D4]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#ECE5D8]">
                    Inscrição Confirmada!
                  </h3>

                  <p className="font-sans text-xs text-[#ECE5D8]/80 leading-relaxed">
                    Obrigado, <strong>{name || 'Cliente'}</strong>! Você receberá o aviso em primeira mão no e-mail (<code>{email}</code>) no dia da inauguração das vendas online.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
