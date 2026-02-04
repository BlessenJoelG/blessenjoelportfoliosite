import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    name: 'Programming & Querying',
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'Python', level: 88 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 82 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'Matplotlib', level: 80 },
    ],
  },
  {
    name: 'Data Visualization & BI',
    skills: [
      { name: 'Power BI', level: 92 },
      { name: 'Tableau', level: 88 },
      { name: 'Advanced Excel', level: 90 },
    ],
  },
  {
    name: 'Analytics & Statistics',
    skills: [
      { name: 'Data Cleaning', level: 95 },
      { name: 'Exploratory Data Analysis', level: 90 },
      { name: 'Descriptive Statistics', level: 88 },
      { name: 'KPI Definition', level: 85 },
    ],
  },
  {
    name: 'Data Quality & Validation',
    skills: [
      { name: 'Data Reconciliation', level: 90 },
      { name: 'Consistency Checks', level: 92 },
      { name: 'Missing Value Treatment', level: 88 },
      { name: 'Outlier Analysis', level: 85 },
    ],
  },
  {
    name: 'Business & Delivery',
    skills: [
      { name: 'Requirement Analysis', level: 88 },
      { name: 'Documentation', level: 92 },
      { name: 'SDLC Fundamentals', level: 80 },
      { name: 'QA & Testing', level: 85 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider shimmer-text">Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
                Technical <span className="glow-text">Skills</span>
              </h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skillCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground border border-border hover:border-primary/50'
                  }`}
                  style={activeCategory === index ? { background: 'var(--gradient-primary)' } : {}}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tech Stack Icons */}
          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-6">Technologies I work with</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['SQL', 'Python', 'Power BI', 'Tableau', 'Excel', 'Pandas', 'NumPy'].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    style={{ background: 'var(--gradient-glass)' }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
