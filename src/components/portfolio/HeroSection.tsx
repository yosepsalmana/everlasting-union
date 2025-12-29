import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container-narrow text-center py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
          
          <h1 className="heading-xl text-foreground mb-6">
            Data Analyst
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
            Turning data into actionable insights
          </p>
          
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            I help businesses make data-driven decisions through comprehensive analysis, 
            visualization, and strategic recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a href="#" className="btn-secondary inline-flex items-center gap-2">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
