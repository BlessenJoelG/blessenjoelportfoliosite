import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  "Data Analyst",
  "AI Automator", 
  "Data Engineer",
  "Data Scientist",
  "Machine Learning Engineer"
];

const TypeWriterCycle = ({ words, delay = 100, pauseDelay = 2000 }: { words: string[]; delay?: number; pauseDelay?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, delay, pauseDelay]);

  return (
    <span className="text-primary">
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
};

const AnimatedLetters = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter-pop"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="hero-glow w-96 h-96 -top-48 -left-48 floating" />
      <div className="hero-glow w-80 h-80 -bottom-40 -right-40 floating-delayed" />
      
      {/* Floating Data Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block floating opacity-30">
        <div className="glass-card p-3 text-xs font-mono text-primary glitch-text">
          SELECT * FROM insights
        </div>
      </div>
      <div className="absolute bottom-1/3 right-16 hidden lg:block floating-delayed opacity-30">
        <div className="glass-card p-3 text-xs font-mono text-accent glitch-text">
          df.groupby('category')
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="fade-in-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium shimmer-text">Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="fade-in-up stagger-2 font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">Hi, I'm Blessen Joel Gorinkala</span>
          </h1>

          {/* Title with Cycling Typewriter Effect */}
          <div className="fade-in-up stagger-3 mb-6 min-h-[50px] flex items-center justify-center">
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground">
              I'm a{" "}
              {showSubtitle && (
                <TypeWriterCycle words={roles} delay={100} pauseDelay={2000} />
              )}
            </h2>
          </div>

          {/* Description with Shimmer */}
          <p className="fade-in-up stagger-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming raw data into actionable insights. Specialized in 
            <span className="text-primary shimmer-text"> SQL</span>, 
            <span className="text-primary shimmer-text"> Python</span>, 
            <span className="text-primary shimmer-text"> Power BI</span> & 
            <span className="text-primary shimmer-text"> Tableau</span>. 
            Building dashboards that drive business decisions.
          </p>

          {/* Location */}
          <div className="fade-in-up stagger-5 flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Narsapuram, Andhra Pradesh, India</span>
          </div>

          {/* Social Links */}
          <div className="fade-in-up stagger-6 flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/BlessenJoelG"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/blessen-joel-gorinkala-84972b3a5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:blessenjoel.g@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919392095494"
              className="social-icon"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group px-8 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: 'var(--gradient-primary)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-medium border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:bg-primary/10"
            >
              <Download size={18} />
              Get Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
