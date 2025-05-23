import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 relative">
        <AnimatedElement animation="fade-in" duration={1000} className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-6">UX/UI DESIGNER & PRODUCT THINKER</p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Crafting digital experiences with purpose and precision
          </h1>
          
          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-10 max-w-2xl mx-auto">
            I help ambitious brands create exceptional digital products that balance beauty and functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              variant="primary" 
              size="large" 
              onClick={scrollToPortfolio}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="large"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </AnimatedElement>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToPortfolio}
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;