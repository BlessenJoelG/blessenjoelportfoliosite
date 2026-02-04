import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  duration = 600
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getTransformStyle = () => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate(0, 0)',
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`
      };
    }

    const transforms = {
      up: 'translateY(60px)',
      down: 'translateY(-60px)',
      left: 'translateX(60px)',
      right: 'translateX(-60px)',
      fade: 'translateY(0)'
    };

    return {
      opacity: 0,
      transform: transforms[direction],
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`
    };
  };

  return (
    <div ref={ref} className={className} style={getTransformStyle()}>
      {children}
    </div>
  );
};

export default ScrollReveal;
