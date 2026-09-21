import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass, Shield, Sparkles, Waves } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AwwwardsParallaxSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Marquee horizontal scrub animation
      if (marqueeRef.current && sectionRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // 2. Parallax card depth speeds (multi-layer parallax)
      if (card1Ref.current && sectionRef.current) {
        gsap.to(card1Ref.current, {
          yPercent: -45,
          rotation: -4,
          scale: 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      if (card2Ref.current && sectionRef.current) {
        gsap.to(card2Ref.current, {
          yPercent: 35,
          rotation: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        });
      }

      if (card3Ref.current && sectionRef.current) {
        gsap.to(card3Ref.current, {
          yPercent: -25,
          rotation: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1,
          },
        });
      }

      if (card4Ref.current && sectionRef.current) {
        gsap.to(card4Ref.current, {
          yPercent: 40,
          rotation: -3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // 3. Headline reveal with subtle scale & opacity scrub
      if (headlineRef.current && sectionRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0.3, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      }

      if (textRef.current && sectionRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-40 bg-[#120A07] text-[#ECE5D8] overflow-hidden select-none"
    >
      {/* Background Ambient Atmospheric Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-[#7A4421]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00F5D4]/12 rounded-full blur-[160px] pointer-events-none" />

      {/* GIANT GSAP HORIZONTAL SCROLLING MARQUEE (BACKGROUND LAYER) */}
      <div className="w-full overflow-hidden absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] z-0">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex font-serif text-[18vw] sm:text-[22vw] uppercase font-bold tracking-tighter leading-none text-white will-change-transform"
        >
          <span>CANOEIRA • ALMA SOLAR • MOVIMENTO • PAUSA • CERRADO •&nbsp;</span>
          <span>CANOEIRA • ALMA SOLAR • MOVIMENTO • PAUSA • CERRADO •&nbsp;</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* TOP EDITORIAL BADGE */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241610] border border-[#00F5D4]/40 font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#00F5D4] mb-6">
            <Compass className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Experiência Parallax • A Alma da Marca</span>
          </div>

          <h2
            ref={headlineRef}
            className="font-serif text-4xl sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.08] max-w-4xl will-change-transform"
          >
            A marca que dá flow <br />
            <span className="italic text-[#00F5D4]">ao seu movimento.</span>
          </h2>

          <p
            ref={textRef}
            className="mt-6 font-sans text-sm sm:text-lg text-[#ECE5D8]/80 font-light max-w-2xl leading-relaxed will-change-transform"
          >
            Nascida sob o sol de Brasília e à beira da água, a Canoeira une a alta performance do treino à serenidade dos rituais de pausa.
          </p>
        </div>

        {/* GSAP MULTI-LAYER PARALLAX SHOWCASE GRID */}
        <div className="relative min-h-[700px] sm:min-h-[850px] w-full mt-6">
          
          {/* Card 1: Teatro Nacional / Estonada (Top Left - Fast Upward Parallax) */}
          <div
            ref={card1Ref}
            className="absolute top-0 left-0 sm:left-4 w-[75vw] sm:w-[360px] md:w-[420px] rounded-3xl overflow-hidden glass-panel border border-[#ECE5D8]/20 shadow-2xl p-4 bg-[#19100B]/90 z-20 will-change-transform"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-3 bg-[#241610]">
              <img
                src="/assets/canoeiraBlusa.jpeg"
                alt="Teatro Nacional de Brasília"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-syne text-[9px] uppercase tracking-widest text-[#00F5D4] block mb-0.5">
                  Identidade do Cerrado
                </span>
                <p className="font-serif text-sm sm:text-base text-[#ECE5D8]">
                  Teatro Nacional de Brasília & Estonada
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#ECE5D8]/60 font-syne uppercase tracking-wider px-1">
              <span>Linha Movimento</span>
              <span className="text-[#00F5D4]">100% Algodão</span>
            </div>
          </div>

          {/* Card 2: Linha Pausa / Sabonetes à Beira do Lago (Top Right - Slow Downward Parallax) */}
          <div
            ref={card2Ref}
            className="absolute top-12 sm:top-24 right-0 sm:right-6 w-[70vw] sm:w-[340px] md:w-[390px] rounded-3xl overflow-hidden glass-panel border border-[#00F5D4]/40 shadow-2xl p-4 bg-[#19100B]/95 z-30 will-change-transform"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-3 bg-[#241610]">
              <img
                src="/assets/banhoprincipal.jpg"
                alt="Linha Pausa Sabonetes e Escalda Pés"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-syne text-[9px] uppercase tracking-widest text-[#00F5D4] block mb-0.5">
                  Autocuidado & Descanso
                </span>
                <p className="font-serif text-sm sm:text-base text-[#ECE5D8]">
                  Sabonetes Veganos & Escalda-Pés
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#ECE5D8]/60 font-syne uppercase tracking-wider px-1">
              <span>Linha Pausa</span>
              <span className="text-[#00F5D4]">Ritual Completo</span>
            </div>
          </div>

          {/* Card 3: Boné Solstício Hydro (Bottom Left - Floating Scrub) */}
          <div
            ref={card3Ref}
            className="absolute bottom-16 sm:bottom-28 left-6 sm:left-24 w-[60vw] sm:w-[280px] md:w-[320px] rounded-2xl overflow-hidden glass-panel border border-[#ECE5D8]/15 shadow-xl p-3 bg-[#19100B]/90 z-10 will-change-transform hidden sm:block"
          >
            <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2 bg-[#241610]">
              <img
                src="/assets/canoeiraBone.jpeg"
                alt="Boné Caiçara Hydro"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-2">
                <span className="font-syne text-[9px] uppercase tracking-widest text-[#00F5D4]">
                  Proteção Solar
                </span>
                <p className="font-serif text-xs text-[#ECE5D8]">Boné Solstício Hydro</p>
              </div>
            </div>
            <span className="text-[10px] font-syne uppercase tracking-wider text-[#ECE5D8]/50 block text-center">
              FPU 50+ Vitalícia
            </span>
          </div>

          {/* Card 4: Trio Maré de Paz na Mão (Bottom Center/Right - Deep Parallax Scrub) */}
          <div
            ref={card4Ref}
            className="absolute bottom-4 sm:bottom-8 right-4 sm:right-32 w-[75vw] sm:w-[340px] md:w-[380px] rounded-3xl overflow-hidden glass-panel border border-[#7A4421]/60 shadow-2xl p-4 bg-[#19100B]/95 z-25 will-change-transform"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-3 bg-[#241610]">
              <img
                src="/assets/banho4.jpg"
                alt="Trio Maré de Paz"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-syne text-[9px] uppercase tracking-widest text-[#00F5D4] block mb-0.5">
                  Linha Pausa
                </span>
                <p className="font-serif text-sm sm:text-base text-[#ECE5D8]">
                  Trio Maré de Paz à Beira do Lago
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#ECE5D8]/60 font-syne uppercase tracking-wider px-1">
              <span>Artesanal & Vegano</span>
              <span className="text-[#00F5D4]">Zero Conservantes</span>
            </div>
          </div>

        </div>

        {/* BOTTOM PHILOSOPHY CALLOUT */}
        <div className="mt-20 sm:mt-28 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="w-12 h-[1px] bg-[#00F5D4]" />
          <blockquote className="font-serif italic text-xl sm:text-3xl text-[#ECE5D8] leading-relaxed">
            "Identidade não se veste pelo acaso. Cada peça foi pensada para conectar você ao seu próprio ritmo."
          </blockquote>
          
          <a
            href="#inauguracao"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00F5D4] text-[#19100B] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#66FFEA] active:scale-95 transition-all shadow-[0_0_25px_rgba(0,245,212,0.4)] cursor-pointer"
          >
            <span>Ser Avisado no Lançamento Online</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
