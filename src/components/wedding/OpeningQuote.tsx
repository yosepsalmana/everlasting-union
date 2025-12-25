import { useInView } from '@/hooks/useInView';
import dividerImage from '@/assets/javanese-divider.png';

const OpeningQuote = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="section-padding bg-card relative overflow-hidden batik-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div 
        ref={ref}
        className="container-narrow relative z-10"
      >
        <div 
          className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Bismillah */}
          <p className="font-heading text-2xl md:text-3xl text-primary mb-8 tracking-wider">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          
          <p className="font-body text-muted-foreground text-sm md:text-base mb-8 leading-relaxed max-w-2xl mx-auto">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>

          {/* Divider */}
          <img 
            src={dividerImage} 
            alt="" 
            className="w-48 md:w-64 mx-auto mb-8 opacity-80"
          />
          
          {/* Quote */}
          <blockquote className="mb-8">
            <p className="font-body text-lg md:text-xl text-foreground italic leading-relaxed max-w-2xl mx-auto">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
            </p>
            <footer className="mt-6 font-heading text-primary text-sm tracking-wider">
              — QS. Ar-Rum: 21
            </footer>
          </blockquote>

          {/* Divider */}
          <img 
            src={dividerImage} 
            alt="" 
            className="w-48 md:w-64 mx-auto opacity-80 rotate-180"
          />
        </div>
      </div>
    </section>
  );
};

export default OpeningQuote;