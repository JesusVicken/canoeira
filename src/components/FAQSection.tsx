import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quando será a inauguração do novo site de vendas online?',
      a: 'A nossa loja virtual oficial está sendo desenvolvida na plataforma Nuvemshop e será lançada em breve. Este site atual é uma vitrine de pré-lançamento para apresentar nossas peças e receber cadastros para o aviso de abertura.',
    },
    {
      q: 'Como funcionará a nova loja online na Nuvemshop?',
      a: 'Na nova loja da Nuvemshop, você terá a experiência completa de e-commerce com carrinho de compras, pagamento seguro via Pix ou Cartão e entrega rápida com código de rastreio para todo o Brasil. Enquanto finalizamos os detalhes, os atendimentos e vendas continuam diretamente pelo WhatsApp.',
    },
    {
      q: 'Quais produtos estarão disponíveis no novo site?',
      a: 'Nossa loja online contará com as 3 linhas oficiais da Canoeira: Linha Movimento (camisas solares UV50+, tops activewear e conjuntos de treino), Linha Proteção (viseiras Athos Bulcão, bonés e acessórios solares) e a Linha Pausa (sabonetes artesanais veganos e escalda-pés terapêuticos de ervas naturais).',
    },
    {
      q: 'Quais são os tamanhos e modelagens disponíveis?',
      a: 'Nossas peças masculinas e femininas vão do PP ao XGG. Desenvolvemos tabelas de medidas detalhadas com base no biotipo de atletas e praticantes de atividades ao ar livre.',
    },
    {
      q: 'Vocês entregam em todo o Brasil?',
      a: 'Sim! A loja oficial entregará em todo o território nacional via Transportadora Expressa e Correios, com rastreamento em tempo real.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
            <HelpCircle className="w-4 h-4 text-[#00F5D4]" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Tudo o que você precisa saber <br />
            <span className="italic text-[#00F5D4]">sobre o pré-lançamento.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl glass-panel border border-[#ECE5D8]/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-xl text-[#ECE5D8] hover:text-[#00F5D4] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00F5D4] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 font-sans text-sm text-[#ECE5D8]/70 font-light leading-relaxed border-t border-[#ECE5D8]/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
