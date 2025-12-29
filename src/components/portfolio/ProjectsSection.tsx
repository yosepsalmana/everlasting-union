import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Sales Analysis',
    problem: 'Identified key factors affecting customer churn and revenue decline in an online retail platform.',
    tools: ['Python', 'SQL', 'Tableau'],
    impact: 'Reduced churn by 15% through targeted retention strategies based on customer segmentation.',
  },
  {
    title: 'Marketing Campaign Performance',
    problem: 'Analyzed multi-channel marketing data to optimize budget allocation and improve ROI.',
    tools: ['Excel', 'Power BI', 'Google Analytics'],
    impact: 'Increased marketing ROI by 25% by reallocating budget to high-performing channels.',
  },
  {
    title: 'Supply Chain Optimization',
    problem: 'Investigated inventory inefficiencies causing stockouts and overstock situations.',
    tools: ['SQL', 'Python', 'Excel'],
    impact: 'Reduced inventory costs by 18% while maintaining optimal stock levels.',
  },
  {
    title: 'Customer Satisfaction Survey Analysis',
    problem: 'Analyzed NPS and survey responses to identify drivers of customer satisfaction.',
    tools: ['Python', 'Tableau', 'Statistical Analysis'],
    impact: 'Identified 5 key improvement areas that led to a 12-point NPS increase.',
  },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected case studies showcasing data analysis projects and their business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="p-6 rounded-xl bg-card border border-border card-hover flex flex-col"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="heading-md text-foreground mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.problem}
              </p>
              
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-badge text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 mb-4">
                <p className="text-sm text-foreground">
                  <span className="font-medium text-primary">Impact:</span> {project.impact}
                </p>
              </div>
              
              <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200">
                View Case Study
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
