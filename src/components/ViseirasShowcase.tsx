import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sun, ArrowRight, ExternalLink, MapPin, Tag, Flame, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ViseiraItem {
  id: string;
  title: string;
  price?: string;
  badge: string;
  description: string;
  image: string;
}

export const ViseirasShowcase: React.FC = () => {
  const showcaseContainerRef = useRef<HTMLDivElement>(null);
  const cardBrasilRef = useRef<HTMLDivElement>(null);
  const cardParanoaRef = useRef<HTMLDivElement>(null);

  const whatsappUrlAthos = "https://wa.me/556184267049?text=Ol%C3%A1%21+Quero+garantir+a+PR%C3%89-VENDA+da+Viseira+Athos+Bulc%C3%A3o+%28R%24+69%2C00%29.";
  const whatsappUrlBrasil = "https://wa.me/556184267049?text=Ol%C3%A1%21+Quero+garantir+a+Viseira+Orgulho+de+Ser+Brasileira%21";
  const whatsappUrlParanoa = "https://wa.me/556184267049?text=Ol%C3%A1%21+Quero+garantir+a+Viseira+Lago+Parano%C3%A1%21";

  const viseiraPhotos: ViseiraItem[] = [
    {
      id: 'athos-1',
      title: 'Viseira Athos Bulcão — Pré-Venda',
      price: 'R$ 69,00',
      badge: 'Linha Proteção • Pré-Venda',
      image: '/assets/viseiras/viseiras1.jpeg',
      description: 'Leve, autêntica e atemporal como a essência Canoeira. Garanta a sua antes que esgote novamente!',
    },
    {
      id: 'athos-2',
      title: 'Viseira Athos Bulcão (Edição Especial)',
      price: 'R$ 69,00',
      badge: 'Linha Proteção • Pré-Venda',
      image: '/assets/viseiras/viseiras2.jpeg',
      description: 'FPS 50, tecido leve de secagem rápida com faixa interna de proteção solar.',
    },
    {
      id: 'paraty-1',
      title: 'Check-in Paraty/RJ • Viseira Athos',
      badge: 'Linha Proteção • Paraty',
      image: '/assets/viseirasLudprincipal.jpeg',
      description: 'Levando a vibe Brasiliense pelo Brasil inteiro! Patrimônio Mundial da Humanidade.',
    },
    {
      id: 'paraty-2',
      title: 'Check-in Paraty/RJ (Vista Litoral)',
      badge: 'Linha Proteção • Paraty',
      image: '/assets/viseiraLud1.jpeg',
      description: 'Exuberância e estilo atemporal para treinos e caminhadas ao sol.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Fade & Scale on Scroll for Card A (Viseira Brasil)
      if (cardBrasilRef.current) {
        gsap.fromTo(
          cardBrasilRef.current,
          { opacity: 1, scale: 1, y: 0 },
          {
            opacity: 0.15,
            scale: 0.88,
            y: -70,
            ease: 'none',
            scrollTrigger: {
              trigger: cardBrasilRef.current,
              start: 'top center',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      // Parallax Fade & Scale on Scroll for Card B (Viseira Lago Paranoá)
      if (cardParanoaRef.current) {
        gsap.fromTo(
          cardParanoaRef.current,
          { opacity: 1, scale: 1, y: 0 },
          {
            opacity: 0.15,
            scale: 0.88,
            y: -70,
            ease: 'none',
            scrollTrigger: {
              trigger: cardParanoaRef.current,
              start: 'top center',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }
    }, showcaseContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="viseiras" className="relative py-24 sm:py-32 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Linha Proteção • Viseiras Canoeira</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4">
            Linha Proteção: Viseiras Canoeira <br />
            <span className="italic text-[#00F5D4]">PRÉ-VENDA VISEIRA ATHOS BULCÃO (R$ 69)</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#ECE5D8]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Ela mal chegou e já esgotou! Leve, autêntica e atemporal como a essência Canoeira. 
            Garanta a sua no WhatsApp com tranquilidade antes que acabe de novo!
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrlAthos}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GARANTIR"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_25px_rgba(0,245,212,0.4)]"
            >
              <Tag className="w-4 h-4 fill-[#19100B]" />
              <span>Garantir Pré-Venda Athos Bulcão por R$ 69</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 1. PHOTO GRID (Athos Bulcão & Check-in Paraty) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-4 lg:grid lg:grid-cols-4 lg:space-x-0 lg:gap-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 mb-16">
          {viseiraPhotos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              data-cursor="GARANTIR"
              onClick={() => window.open(whatsappUrlAthos, '_blank')}
              className="snap-center flex-shrink-0 w-[82vw] sm:w-[320px] lg:w-auto group relative rounded-3xl glass-panel border border-[#ECE5D8]/15 overflow-hidden hover:border-[#00F5D4]/60 transition-all duration-500 cursor-pointer flex flex-col justify-end min-h-[420px] p-6 shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/30 to-transparent" />

              <div className="relative z-10 mb-auto flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/40 font-syne text-[10px] uppercase tracking-widest text-[#00F5D4]">
                  {item.badge}
                </span>
                {item.price && (
                  <span className="px-3 py-1 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-[11px] font-bold shadow-md">
                    {item.price}
                  </span>
                )}
              </div>

              <div className="relative z-10 flex flex-col gap-2 pt-4 border-t border-[#ECE5D8]/20">
                <h3 className="font-serif text-xl text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#ECE5D8]/75 font-light line-clamp-2">
                  {item.description}
                </p>
                <span className="font-syne text-[11px] uppercase tracking-wider text-[#25D366] flex items-center gap-1.5 font-bold mt-1">
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>Garanta no WhatsApp</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. SPECIAL VIDEO SHOWCASE SECTION (GSAP ScrollTrigger Parallax & Fade on Scroll) */}
        <div ref={showcaseContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card A: Viseira Brasil 360° */}
          <div
            ref={cardBrasilRef}
            className="rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 flex flex-col justify-between p-6 sm:p-8 will-change-transform shadow-2xl hover:border-[#00F5D4]/50 transition-colors"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#241610] mb-6 shadow-inner">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/viseiraBrasil.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4]">
                <Sun className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span>Linha Proteção • Vídeo 360°</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE5D8]">
                Viseira Orgulho de Ser Brasileira
              </h3>

              <p className="font-sans text-sm text-[#ECE5D8]/80 font-light leading-relaxed">
                Um 360° da viseira Orgulho de ser Brasileira! Ainda dá tempo de garantir a sua.
              </p>

              <div className="flex flex-wrap gap-1.5 font-syne text-[10px] text-[#00F5D4] uppercase tracking-wider">
                <span>#brasil</span> • <span>#marcasdebrasília</span> • <span>#usecanoeira</span> • <span>#copadomundo2026</span>
              </div>

              <a
                href={whatsappUrlBrasil}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 mt-2 rounded-2xl bg-[#25D366] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] active:scale-95 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-[#19100B]" />
                <span>Garantir Viseira Brasil no WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card B: Viseira Lago Paranoá */}
          <div
            ref={cardParanoaRef}
            className="rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/15 flex flex-col justify-between p-6 sm:p-8 will-change-transform shadow-2xl hover:border-[#00F5D4]/50 transition-colors"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#241610] mb-6 shadow-inner">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/viseiraLagoparanoa.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-syne text-[11px] uppercase tracking-widest text-[#00F5D4]">
                <MapPin className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span>Linha Proteção • Lago Paranoá</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE5D8]">
                Viseira Lago Paranoá
              </h3>

              <p className="font-sans text-sm text-[#ECE5D8]/80 font-light leading-relaxed">
                A viseira perfeita pro cardume do Lago Paranoá, tá aqui!
              </p>

              <a
                href={whatsappUrlParanoa}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 mt-auto rounded-2xl bg-[#25D366] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] active:scale-95 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-[#19100B]" />
                <span>Garantir Viseira Lago Paranoá no WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
