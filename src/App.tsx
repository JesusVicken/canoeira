import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { BrandManifesto } from './components/BrandManifesto';
import { BrandLinesOverview } from './components/BrandLinesOverview';
import { LinhaPausaShowcase } from './components/LinhaPausaShowcase';
import { ViseirasShowcase } from './components/ViseirasShowcase';
import { DropBicolorFitnessShowcase } from './components/DropBicolorFitnessShowcase';
import { TreinosQueridinhosShowcase } from './components/TreinosQueridinhosShowcase';
import { TrioFlowShowcase } from './components/TrioFlowShowcase';
import { ClothesVideoShowcase } from './components/ClothesVideoShowcase';
import { CollectionTeaser } from './components/CollectionTeaser';
import { LookbookGallery } from './components/LookbookGallery';
import { BrandStoryVideoSection } from './components/BrandStoryVideoSection';
import { VIPWaitlistSection } from './components/VIPWaitlistSection';
import { InstagramShowcase } from './components/InstagramShowcase';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const scrollToNotify = () => {
    const notifySection = document.getElementById('inauguracao');
    if (notifySection) {
      notifySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#19100B] text-[#ECE5D8] selection:bg-[#00F5D4] selection:text-[#19100B] font-sans overflow-x-hidden">
      {/* Custom Awwwards Cursor */}
      <CustomCursor />

      {/* Preloader Screen */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Header */}
      <HeaderNavbar onNotifyClick={scrollToNotify} />

      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection onSubscribeSuccess={() => {}} />

        {/* 1 - OLHA QUEM CHEGOU NA LINHA PAUSA */}
        <LinhaPausaShowcase />

        {/* 2 - Camisetas Aero Sport Dry */}
        <ClothesVideoShowcase />

        {/* 3 - NOVIDADE RECENTE: Boné Five Panel Sprint & Peças Exclusivas */}
        <CollectionTeaser />

        {/* 4 - OS LOOKS QUERIDINHOS DE TREINO (Destaque Prioritário) */}
        <TreinosQueridinhosShowcase />

        {/* 5 - Dia de treino com calma, conforto e proteção (Fotos Expandidas) */}
        <TrioFlowShowcase />

        {/* 6 - O Drop Bicolor chegou arrasando corações */}
        <DropBicolorFitnessShowcase />

        {/* 7 - VISEIRAS (Linha Proteção) */}
        <ViseirasShowcase />

        {/* O vestir comunica quem somos & Arquitetura da Marca */}
        <BrandLinesOverview />
        <BrandManifesto />

        {/* Galeria, História e Inscrição E-commerce Nuvemshop */}
        <LookbookGallery />
        <BrandStoryVideoSection />
        <VIPWaitlistSection onSubscribeSuccess={() => {}} />
        <InstagramShowcase />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
