import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Loja 100% Online & Segura',
      desc: 'Compre direto de onde estiver com pagamento rápido e seguro via Pix ou Cartão de Crédito em até 6x.',
      icon: ShoppingBag,
    },
    {
      num: '02',
      title: 'Entrega para Todo o Brasil',
      desc: 'Envio expresso com rastreamento em tempo real para todos os estados e cidades brasileiras.',
      icon: Truck,
    },
    {
      num: '03',
      title: 'Peças Exclusivas de Fábrica',
      desc: 'Toda a coleção de roupas técnicas e casuais Canoeira vendidas diretamente no site oficial.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="manifesto" className="relative py-24 bg-[#19100B] overflow-hidden text-[#ECE5D8]">
      {/* Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-[#ECE5D8]/10 bg-[#241610]/40 py-5 mb-24">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-serif text-2xl sm:text-4xl uppercase tracking-widest text-[#ECE5D8]/40">
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">CANOEIRA</span> • NOVO SITE DE VENDAS ONLINE • EM BREVE
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">ENTREGA PARA TODO O BRASIL</span> • PAGAMENTO SEGURO
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">LOJA DE ROUPAS OFICIAL</span> • EST. 2025
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">CANOEIRA</span> • NOVO SITE DE VENDAS ONLINE • EM BREVE
          </span>
          <span className="flex items-center gap-6">
            <span className="text-[#00F5D4]">ENTREGA PARA TODO O BRASIL</span> • PAGAMENTO SEGURO
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
              <span className="w-8 h-[1px] bg-[#00F5D4]" />
              <span>Novo Site de Vendas Online</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              O novo e-commerce oficial da marca Canoeira <br />
              <span className="italic text-[#00F5D4]">está chegando.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#ECE5D8]/80 font-light leading-relaxed">
              Estamos finalizando a nova plataforma de vendas online da <strong>Canoeira</strong>. 
              Em breve você poderá adquirir toda a linha de roupas diretamente no site oficial, com pagamento facilitado via Pix e Cartão de Crédito, e frete com entrega para todo o Brasil.
            </p>

            <div className="p-6 rounded-2xl glass-panel border border-[#7A4421]/50 relative overflow-hidden mt-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5D4]/10 rounded-full blur-2xl pointer-events-none" />
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#ECE5D8] leading-relaxed">
                "Cadastre seu e-mail para ser notificado em primeira mão no dia da abertura oficial das vendas online."
              </blockquote>
              <div className="mt-4 font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
                — Equipe Canoeira
              </div>
            </div>
          </div>

          {/* Right Brand Logo Highlight (CLEAN - NO "Identidade Solar Original" BADGE) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Terracotta & Cyan aura */}
            <div className="absolute w-72 h-72 bg-[#7A4421]/50 rounded-full blur-[90px]" />
            <div className="absolute w-48 h-48 bg-[#00F5D4]/20 rounded-full blur-[60px]" />

            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-panel p-8 border border-[#ECE5D8]/15 flex items-center justify-center text-center shadow-2xl group">
              {/* Brand Logo Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-[#7A4421]/30 p-8 transition-transform duration-700 group-hover:scale-105">
                <img
                  src="/assets/IMG_5334.PNG"
                  alt="Canoeira Identity"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                data-cursor="LOJA"
                className="group relative p-8 rounded-3xl glass-panel border border-[#ECE5D8]/10 hover:border-[#00F5D4]/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-serif text-4xl text-[#00F5D4] font-light">
                    {pillar.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#7A4421]/30 text-[#00F5D4] group-hover:bg-[#00F5D4] group-hover:text-[#19100B] transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#ECE5D8] mb-3 group-hover:text-[#00F5D4] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-[#ECE5D8]/70 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
