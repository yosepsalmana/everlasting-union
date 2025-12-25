import { Heart } from 'lucide-react';
import dividerImage from '@/assets/javanese-divider.png';

const Footer = () => {
  return (
    <footer className="py-12 bg-background relative overflow-hidden border-t border-primary/20">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      
      <div className="container-narrow relative z-10 text-center">
        <img 
          src={dividerImage} 
          alt="" 
          className="w-32 md:w-48 mx-auto mb-6 opacity-60"
        />
        
        <Heart className="w-6 h-6 mx-auto text-primary fill-primary mb-4 animate-float" />
        
        <p className="font-accent text-3xl text-primary mb-3 animate-glow-ambient">
          Dewi & Bimo
        </p>
        
        <p className="font-heading text-sm text-muted-foreground tracking-widest mb-4">
          15 Juni 2025 • Yogyakarta
        </p>
        
        <p className="font-body text-xs text-muted-foreground/60 tracking-wider">
          #DewiDanBimo2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;