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
          {/* Left Text Column - Manifesto of Belonging & Identity */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4]">
              <span className="w-8 h-[1px] bg-[#00F5D4]" />
              <span>Manifesto de Pertencimento & Identidade</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              O vestir comunica <br />
              <span className="italic text-[#00F5D4]">quem somos.</span>
            </h2>

            <p className="font-serif italic text-lg sm:text-2xl text-[#ECE5D8]/90 font-normal leading-relaxed">
              "E quando a escolha vem do pertencimento fala ainda mais alto! Afinal, identidade não se veste pelo acaso."
            </p>

            {/* Contém Pills */}
            <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-[#241610] border border-[#ECE5D8]/15">
              <span className="font-syne text-[10px] uppercase tracking-widest text-[#00F5D4] font-bold">
                Composição desta identidade:
              </span>
              <div className="flex flex-wrap gap-2.5 mt-1">
                <span className="px-3 py-1.5 rounded-xl bg-[#19100B] border border-[#ECE5D8]/10 text-xs font-sans text-[#ECE5D8]/90">
                  Teatro Nacional de Brasília
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#19100B] border border-[#ECE5D8]/10 text-xs font-sans text-[#ECE5D8]/90">
                  Estonada 100% algodão
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#19100B] border border-[#ECE5D8]/10 text-xs font-sans text-[#ECE5D8]/90">
                  Athos Bulcão
                </span>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#ECE5D8]/80 font-light leading-relaxed">
              <strong>Use Canoeira, a marca que dá flow ao seu movimento.</strong> Em breve você poderá comprar toda a nossa coleção no novo site de vendas online, com pagamento facilitado (Pix e Cartão em até 6x) e entrega com rastreio para todo o Brasil.
            </p>

            <div className="p-5 rounded-2xl glass-panel border border-[#00F5D4]/30 relative overflow-hidden bg-gradient-to-r from-[#241610] to-[#19100B]">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="font-serif text-lg text-[#ECE5D8]">Pré-Lançamento do E-commerce</h4>
                  <p className="font-sans text-xs text-[#ECE5D8]/70">Cadastre-se para receber o aviso de inauguração com 10% OFF</p>
                </div>
                <a
                  href="#inauguracao"
                  className="px-5 py-2.5 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#66FFEA] transition-all"
                >
                  Quero Ser Avisado
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Photo Highlight (Teatro Nacional de Brasília + canoeiraBlusa.jpeg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Terracotta & Cyan aura */}
            <div className="absolute w-72 h-72 bg-[#7A4421]/50 rounded-full blur-[90px]" />
            <div className="absolute w-48 h-48 bg-[#00F5D4]/20 rounded-full blur-[60px]" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel border border-[#00F5D4]/40 shadow-2xl group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#241610]">
                <img
                  src="/assets/canoieraBlusa.jpeg"
                  alt="Teatro Nacional de Brasília — Canoeira Estonada 100% Algodão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#19100B]/85 backdrop-blur-md border border-[#ECE5D8]/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                        Identidade do Cerrado
                      </span>
                      <h4 className="font-serif text-base text-[#ECE5D8] mt-0.5">
                        Estonada 100% Algodão Canoeira
                      </h4>
                    </div>
                  </div>
                </div>
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
