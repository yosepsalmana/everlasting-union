import { useInView } from '@/hooks/useInView';
import dividerImage from '@/assets/javanese-divider.png';
import ParticleGlow from '@/components/animations/ParticleGlow';

const OpeningQuote = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <ParticleGlow />
      
      <div 
        ref={ref}
        className="container-narrow relative z-10"
      >
        <div 
          className={`text-center transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Bismillah with glow effect */}
          <p className="font-heading text-2xl md:text-4xl text-primary mb-10 tracking-wider animate-glow-ambient">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          
          <p 
            className={`font-body text-muted-foreground text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>

          {/* Divider with animation */}
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img 
              src={dividerImage} 
              alt="" 
              className="w-52 md:w-72 mx-auto mb-10 animate-glow-ambient"
            />
          </div>
          
          {/* Quote */}
          <blockquote 
            className={`mb-10 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="font-body text-lg md:text-2xl text-foreground italic leading-relaxed max-w-2xl mx-auto">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
            </p>
            <footer className="mt-8 font-heading text-primary text-sm md:text-base tracking-widest">
              — QS. Ar-Rum: 21
            </footer>
          </blockquote>

          {/* Divider */}
          <div className={`transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img 
              src={dividerImage} 
              alt="" 
              className="w-52 md:w-72 mx-auto rotate-180 animate-glow-ambient"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningQuote;