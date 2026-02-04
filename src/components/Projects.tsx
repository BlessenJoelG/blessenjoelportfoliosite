import { Calendar, TrendingUp, Users, BarChart2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Customer Trends Data Analysis',
    period: 'May 2025 – July 2025',
    description: 'Comprehensive customer behavior analysis identifying trends, loyalty patterns, and segmentation insights.',
    highlights: [
      'Analyzed 5,000+ customer records for behavior trends',
      'Identified 28% repeat purchase drivers from key product categories',
      'Conducted data cleaning, consistency checks, and missing value treatment',
      'Performed outlier analysis & customer behavior assessment',
    ],
    metrics: [
      { label: 'Records', value: '5K+' },
      { label: 'Insight', value: '28%' },
    ],
    technologies: ['Python', 'Pandas', 'SQL', 'Power BI'],
    icon: Users,
    color: 'primary',
  },
  {
    title: 'Sales Insights Data Analysis',
    period: 'Aug 2025 – Sept 2025',
    description: 'End-to-end sales analysis with ETL integration, statistical evaluation, and BI dashboard development.',
    highlights: [
      'Designed reporting workflows by integrating SQL with BI tools',
      'Created test datasets & validated ETL outputs for accuracy',
      'Conducted sales analysis across regions, product lines & time periods',
      'Documented ETL logic, transformations & dashboard calculations',
    ],
    metrics: [
      { label: 'Regions', value: 'Multi' },
      { label: 'Growth', value: '+15%' },
    ],
    technologies: ['SQL', 'Tableau', 'Excel', 'Python'],
    icon: BarChart2,
    color: 'accent',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    project.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} style={{ background: 'var(--gradient-glass)' }}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Metrics */}
                <div className="flex gap-6 mb-6 p-4 rounded-lg" style={{ background: 'var(--gradient-glass)' }}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className={`text-2xl font-bold font-display ${
                        project.color === 'primary' ? 'glow-text' : 'accent-text'
                      }`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <TrendingUp size={14} className={`mt-1 flex-shrink-0 ${
                        project.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        project.color === 'primary' 
                          ? 'text-primary border-primary/30 bg-primary/5' 
                          : 'text-accent border-accent/30 bg-accent/5'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
