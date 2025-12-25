import { useInView } from '@/hooks/useInView';
import dividerImage from '@/assets/javanese-divider.png';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';
import ParticleGlow from '@/components/animations/ParticleGlow';
import LightRays from '@/components/animations/LightRays';

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 pointer-events-none" />
      <LightRays />
      <ParticleGlow />
      
      {/* Animated corner ornaments */}
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute top-8 left-4 w-28 md:w-40 opacity-50 animate-ornament-sway" 
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute top-8 right-4 w-28 md:w-40 opacity-50 -scale-x-100 animate-ornament-sway"
        style={{ animationDelay: '0.5s' }}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute bottom-8 left-4 w-28 md:w-40 opacity-50 -scale-y-100 animate-ornament-sway"
        style={{ animationDelay: '1s' }}
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute bottom-8 right-4 w-28 md:w-40 opacity-50 rotate-180 animate-ornament-sway"
        style={{ animationDelay: '1.5s' }}
      />
      
      <div 
        ref={ref}
        className="container-narrow relative z-10"
      >
        <div 
          className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <img 
            src={dividerImage} 
            alt="" 
            className={`w-48 md:w-72 mx-auto mb-12 transition-all duration-1000 delay-200 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
          
          <p 
            className={`font-body text-lg md:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>

          <p 
            className={`font-body text-muted-foreground mb-12 text-base md:text-lg transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Atas kehadiran dan doa restunya kami ucapkan terima kasih.
          </p>

          {/* Names */}
          <div 
            className={`mb-12 transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="font-body text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>
            <h3 className="font-accent text-5xl md:text-7xl text-primary animate-glow-ambient">
              Dewi & Bimo
            </h3>
          </div>

          <img 
            src={dividerImage} 
            alt="" 
            className={`w-48 md:w-72 mx-auto rotate-180 transition-all duration-1000 delay-900 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;