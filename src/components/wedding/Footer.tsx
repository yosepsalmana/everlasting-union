import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding bg-charcoal text-ivory relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 texture-overlay pointer-events-none opacity-5" />
      
      <div className="container-narrow relative z-10 text-center">
        <div className="mb-8">
          <Heart className="w-8 h-8 mx-auto text-gold fill-gold mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Thank You
          </h2>
          <p className="font-body text-ivory/80 max-w-md mx-auto leading-relaxed">
            We are so grateful to have you in our lives and can't wait to celebrate this special moment with you.
          </p>
        </div>
        
        <div className="mb-8">
          <p className="font-display text-xl md:text-2xl text-gold italic">
            #SarahAndMichael2025
          </p>
        </div>
        
        <div className="pt-8 border-t border-ivory/10">
          <p className="font-body text-sm text-ivory/50">
            With love, Sarah & Michael
          </p>
          <p className="font-body text-xs text-ivory/30 mt-2">
            June 15, 2025 • Napa Valley, California
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
