import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/javanese-heritage-bg.jpg';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';
import LightRays from '@/components/animations/LightRays';
import ParticleGlow from '@/components/animations/ParticleGlow';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCouple = () => {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Animated elements */}
      <LightRays />
      <ParticleGlow />
      
      {/* Batik pattern overlay */}
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      
      {/* Animated Corner Ornaments */}
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute top-4 left-4 w-28 md:w-44 transition-all duration-1500 ease-out animate-ornament-sway ${isVisible ? 'opacity-70 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 -translate-y-8'}`}
        style={{ animationDelay: '0s' }}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute top-4 right-4 w-28 md:w-44 -scale-x-100 transition-all duration-1500 ease-out animate-ornament-sway ${isVisible ? 'opacity-70 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 -translate-y-8'}`}
        style={{ animationDelay: '0.5s' }}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute bottom-4 left-4 w-28 md:w-44 -scale-y-100 transition-all duration-1500 ease-out animate-ornament-sway ${isVisible ? 'opacity-70 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-8'}`}
        style={{ animationDelay: '1s' }}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute bottom-4 right-4 w-28 md:w-44 rotate-180 transition-all duration-1500 ease-out animate-ornament-sway ${isVisible ? 'opacity-70 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 translate-y-8'}`}
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div 
          className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-body text-base md:text-lg mb-6 tracking-[0.4em] uppercase text-primary animate-glow-ambient">
            Undangan Pernikahan
          </p>
        </div>
        
        <div 
          className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h1 className="font-accent text-6xl md:text-8xl lg:text-9xl text-primary mb-3 drop-shadow-lg animate-glow-ambient">
            Dewi
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/60" />
            <p className="font-display text-3xl md:text-4xl text-primary">&</p>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <h1 className="font-accent text-6xl md:text-8xl lg:text-9xl text-primary drop-shadow-lg animate-glow-ambient">
            Bimo
          </h1>
        </div>
        
        <div 
          className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '700ms' }}
        >
          {/* Decorative ornament line */}
          <div className="flex items-center justify-center my-10 gap-4">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/50 animate-shimmer" />
            <span className="text-primary text-2xl animate-float">❧</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/50 animate-shimmer" />
          </div>
          
          <p className="font-heading text-sm md:text-base tracking-[0.25em] text-cream uppercase mb-2">
            Sabtu, 15 Juni 2025
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-12">
            Gedung Sasana Kriya, Yogyakarta
          </p>
          
          <Button 
            onClick={scrollToCouple}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-heading tracking-[0.2em] transition-all duration-500 hover:shadow-gold border border-primary/40 animate-glow-pulse hover:scale-105"
          >
            Buka Undangan
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6 text-primary animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;