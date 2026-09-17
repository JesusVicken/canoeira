import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { BrandManifesto } from './components/BrandManifesto';
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
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

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

  const scrollToVIP = () => {
    const vipSection = document.getElementById('vip');
    if (vipSection) {
      vipSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribeSuccess = (email: string) => {
    setSubscribedEmail(email);
  };

  return (
    <div className="relative min-h-screen bg-[#19100B] text-[#ECE5D8] selection:bg-[#00F5D4] selection:text-[#19100B] font-sans overflow-x-hidden">
      {/* Custom Awwwards Cursor */}
      <CustomCursor />

      {/* Preloader Screen */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main Page Content */}
      <HeaderNavbar onVIPClick={scrollToVIP} />

      <main className="w-full overflow-x-hidden">
        <HeroSection onSubscribeSuccess={handleSubscribeSuccess} />
        <BrandManifesto />
        <ClothesVideoShowcase />
        <CollectionTeaser />
        <LookbookGallery />
        <BrandStoryVideoSection />
        <VIPWaitlistSection onSubscribeSuccess={handleSubscribeSuccess} />
        <InstagramShowcase />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
