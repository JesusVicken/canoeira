import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from './components/Preloader';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { BrandLinesOverview } from './components/BrandLinesOverview';
import { AwwwardsParallaxSection } from './components/AwwwardsParallaxSection';
import { LinhaPausaShowcase } from './components/LinhaPausaShowcase';
import { ClothesVideoShowcase } from './components/ClothesVideoShowcase';
import { CollectionTeaser } from './components/CollectionTeaser';
import { BrandManifesto } from './components/BrandManifesto';
import { LookbookGallery } from './components/LookbookGallery';
import { BrandStoryVideoSection } from './components/BrandStoryVideoSection';
import { VIPWaitlistSection } from './components/VIPWaitlistSection';
import { InstagramShowcase } from './components/InstagramShowcase';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll tuned for high-performance 60fps+ responsiveness
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
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
      {/* Preloader Screen with Official Brand Mark */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Header */}
      <HeaderNavbar onNotifyClick={scrollToNotify} />

      <main className="w-full overflow-x-hidden">
        {/* 1. Hero: E-commerce online launch teaser */}
        <HeroSection onSubscribeSuccess={() => {}} />

        {/* 2. Official 3 Lines: Movimento, Proteção, Pausa */}
        <BrandLinesOverview />

        {/* 3. Awwwards-style Parallax Experience with GSAP & ScrollTrigger */}
        <AwwwardsParallaxSection />

        {/* 4. Dedicated Linha Pausa Launch Showcase */}
        <LinhaPausaShowcase />

        {/* 5. Linha Movimento in action */}
        <ClothesVideoShowcase />

        {/* 5. Interactive product catalog with tabs for the 3 lines */}
        <CollectionTeaser />

        {/* 6. Brand Concept & E-commerce safety pillars */}
        <BrandManifesto />

        {/* 7. Comprehensive Lookbook Gallery */}
        <LookbookGallery />

        {/* 8. Atmosphere & Quality video */}
        <BrandStoryVideoSection />

        {/* 9. VIP Pre-Launch Registration */}
        <VIPWaitlistSection onSubscribeSuccess={() => {}} />

        {/* 10. Social Connection */}
        <InstagramShowcase />

        {/* 11. FAQ */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
