import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wedding.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToRsvp = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-blush/30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-lg md:text-xl mb-4 tracking-[0.3em] uppercase">
            We're getting married
          </p>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-2">
            Sarah
          </h1>
          <p className="font-display text-2xl md:text-3xl text-gold italic mb-2">&</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground">
            Michael
          </h1>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mt-10 mb-8">
            <span className="ornament font-body text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase">
              June 15, 2025
            </span>
          </div>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl mb-12">
            The Grand Estate, Napa Valley, California
          </p>
          
          <Button 
            onClick={scrollToRsvp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-body tracking-wide transition-all duration-300 hover:shadow-medium"
          >
            Save the Date
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
