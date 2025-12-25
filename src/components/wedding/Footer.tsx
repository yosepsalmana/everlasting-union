import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-background relative overflow-hidden border-t border-primary/20">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-20" />
      
      <div className="container-narrow relative z-10 text-center">
        <Heart className="w-6 h-6 mx-auto text-primary fill-primary mb-4" />
        
        <p className="font-accent text-2xl text-primary mb-2">
          Dewi & Bimo
        </p>
        
        <p className="font-body text-sm text-muted-foreground mb-4">
          15 Juni 2025 • Yogyakarta
        </p>
        
        <p className="font-body text-xs text-muted-foreground/60">
          #DewiDanBimo2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;