import { useInView } from '@/hooks/useInView';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';
import dividerImage from '@/assets/javanese-divider.png';

const CoupleSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="couple" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-50" />
      
      <div className="container-wide relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Mempelai</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Pasangan Yang Berbahagia
          </h2>
          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            delay={200}
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

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {/* Photo with ornamental frame */}
      <div className="relative inline-block mb-8">
        <img 
          src={ornamentFrame} 
          alt="" 
          className="absolute -inset-6 md:-inset-10 w-[calc(100%+48px)] md:w-[calc(100%+80px)] h-[calc(100%+48px)] md:h-[calc(100%+80px)] object-contain opacity-80"
        />
        <div className="relative w-48 h-60 md:w-56 md:h-72 mx-auto overflow-hidden rounded-t-full border-4 border-primary/30 shadow-gold">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="font-body text-muted-foreground text-sm uppercase tracking-widest mb-2">{title}</p>
      <h3 className="font-accent text-3xl md:text-4xl text-primary mb-4">{name}</h3>
      <p className="font-body text-foreground/80 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
        {parentInfo}
      </p>
    </div>
  );
};

export default CoupleSection;