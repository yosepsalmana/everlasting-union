import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/javanese-hero-bg.jpg';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCouple = () => {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/95" />
      <div className="absolute inset-0 batik-pattern pointer-events-none" />
      
      {/* Corner Ornaments */}
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute top-4 left-4 w-24 md:w-40 opacity-60 transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute top-4 right-4 w-24 md:w-40 opacity-60 -scale-x-100 transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute bottom-4 left-4 w-24 md:w-40 opacity-60 -scale-y-100 transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className={`absolute bottom-4 right-4 w-24 md:w-40 opacity-60 rotate-180 transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-body text-base md:text-lg mb-4 tracking-[0.3em] uppercase text-primary">
            Undangan Pernikahan
          </p>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="font-accent text-5xl md:text-7xl lg:text-8xl text-primary mb-2 drop-shadow-lg">
            Dewi
          </h1>
          <p className="font-display text-3xl md:text-4xl text-primary mb-2">&</p>
          <h1 className="font-accent text-5xl md:text-7xl lg:text-8xl text-primary drop-shadow-lg">
            Bimo
          </h1>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Decorative ornament line */}
          <div className="flex items-center justify-center my-8 gap-4">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-primary text-2xl">❧</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          
          <p className="font-heading text-sm md:text-base tracking-[0.2em] text-cream uppercase mb-2">
            Sabtu, 15 Juni 2025
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-10">
            Gedung Sasana Kriya, Yogyakarta
          </p>
          
          <Button 
            onClick={scrollToCouple}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-heading tracking-widest transition-all duration-300 hover:shadow-gold border border-primary/30 animate-glow-pulse"
          >
            Buka Undangan
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <ChevronDown className="w-6 h-6 text-primary animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;