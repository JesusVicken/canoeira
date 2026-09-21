import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quando será o lançamento oficial do e-commerce?',
      a: 'O lançamento do e-commerce oficial da Canoeira acontecerá em breve. Todos os inscritos na nossa lista VIP de pré-lançamento receberão o link de acesso com 24 horas de antecedência.',
    },
    {
      q: 'Como funciona o benefício da inscrição VIP?',
      a: 'Ao se cadastrar no site, você garante 10% de desconto acumulável na primeira compra, além de frete grátis e preferência absoluta no estoque de primeira edição da loja oficial.',
    },
    {
      q: 'Quais produtos estarão à venda na loja oficial?',
      a: 'Nossa loja online contará com as 3 linhas oficiais da Canoeira: Linha Movimento (camisas solares UV50+, tops activewear e shorts de treino), Linha Proteção (bonés e viseiras de alta performance solar) e a recém-chegada Linha Pausa (sabonetes artesanais veganos como o Trio Maré de Paz e Trio Leveza, e escalda-pés terapêuticos de ervas naturais).',
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
