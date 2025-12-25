import { useInView } from '@/hooks/useInView';
import useParallax from '@/hooks/useParallax';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';
import dividerImage from '@/assets/javanese-divider.png';
import LightRays from '@/components/animations/LightRays';

const CoupleSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="couple" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
      <LightRays />
      
      {/* Animated corner ornaments */}
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute top-8 left-4 w-20 md:w-32 opacity-50 animate-ornament-sway" 
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute top-8 right-4 w-20 md:w-32 opacity-50 -scale-x-100 animate-ornament-sway"
        style={{ animationDelay: '1s' }}
      />
      
      <div className="container-wide relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Mempelai</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            Pasangan Yang Berbahagia
          </h2>
          <img 
            src={dividerImage} 
            alt="" 
            className={`w-44 md:w-64 mx-auto transition-all duration-1000 delay-300 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Bride */}
          <CoupleCard 
            name="Dewi Ayu Lestari"
            title="Mempelai Wanita"
            parentInfo="Putri dari Bapak Suryo Wibowo & Ibu Sri Mulyani"
            imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face"
            delay={0}
          />

          {/* Groom */}
          <CoupleCard 
            name="Bimo Arya Pratama"
            title="Mempelai Pria"
            parentInfo="Putra dari Bapak Hadi Susanto & Ibu Ratna Dewi"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

interface CoupleCardProps {
  name: string;
  title: string;
  parentInfo: string;
  imageUrl: string;
  delay: number;
}

const CoupleCard = ({ name, title, parentInfo, imageUrl, delay }: CoupleCardProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { ref: parallaxRef, offset } = useParallax<HTMLDivElement>({ speed: 0.1 });

  return (
    <div 
      ref={ref}
      className="text-center"
    >
      {/* Photo with ornamental frame */}
      <div 
        ref={parallaxRef}
        className={`relative inline-block mb-10 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
        style={{ 
          transitionDelay: `${delay}ms`,
          transform: `translateY(${offset * 0.3}px)`,
        }}
      >
        <img 
          src={ornamentFrame} 
          alt="" 
          className="absolute -inset-8 md:-inset-12 w-[calc(100%+64px)] md:w-[calc(100%+96px)] h-[calc(100%+64px)] md:h-[calc(100%+96px)] object-contain animate-glow-ambient"
        />
        <div className="relative w-52 h-64 md:w-64 md:h-80 mx-auto overflow-hidden rounded-t-full border-4 border-primary/40 shadow-gold">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          {/* Overlay glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div 
        className={`transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        <p className="font-body text-muted-foreground text-xs md:text-sm uppercase tracking-[0.3em] mb-3">{title}</p>
        <h3 className="font-accent text-4xl md:text-5xl text-primary mb-5 animate-glow-ambient">{name}</h3>
        <p className="font-body text-foreground/80 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          {parentInfo}
        </p>
      </div>
    </div>
  );
};

export default CoupleSection;