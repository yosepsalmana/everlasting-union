import { useInView } from '@/hooks/useInView';

const tools = [
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Excel', icon: '📊' },
  { name: 'Tableau', icon: '📈' },
  { name: 'Power BI', icon: '📉' },
  { name: 'Git', icon: '🔀' },
  { name: 'Google Sheets', icon: '📋' },
  { name: 'Jupyter', icon: '📓' },
];

const TechStackSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="section-padding bg-secondary/30">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">Tools & Technologies</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="p-6 rounded-xl bg-card border border-border text-center card-hover"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <p className="font-medium text-foreground">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
