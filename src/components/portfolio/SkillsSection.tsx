import { useInView } from '@/hooks/useInView';
import { Database, BarChart2, TrendingUp, Settings } from 'lucide-react';

const skillCategories = [
  {
    icon: Database,
    title: 'Data Analysis',
    skills: ['SQL', 'Python', 'Excel', 'R'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: BarChart2,
    title: 'Visualization',
    skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn'],
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Statistics & Analytics',
    skills: ['Descriptive Analysis', 'Correlation', 'Regression', 'Hypothesis Testing'],
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Settings,
    title: 'Data Processing',
    skills: ['Data Cleaning', 'ETL', 'Pandas', 'Data Transformation'],
    color: 'bg-orange-500/10 text-orange-600',
  },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="heading-md text-foreground mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
