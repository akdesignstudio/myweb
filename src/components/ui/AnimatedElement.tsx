import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-in-left': 'opacity-0 -translate-x-8',
    'slide-in-right': 'opacity-0 translate-x-8',
    'zoom-in': 'opacity-0 scale-95',
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : animationClasses[animation]
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;