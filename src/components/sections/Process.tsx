import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';

const Process: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding the problem space through research, interviews, and competitive analysis.',
      color: 'indigo'
    },
    {
      number: '02',
      title: 'Define',
      description: 'Synthesizing research to define user personas, journeys, and key opportunities.',
      color: 'purple'
    },
    {
      number: '03',
      title: 'Ideate',
      description: 'Exploring multiple design solutions through sketching, wireframing, and collaborative workshops.',
      color: 'fuchsia'
    },
    {
      number: '04',
      title: 'Prototype',
      description: 'Creating interactive prototypes to test and validate design solutions with real users.',
      color: 'pink'
    },
    {
      number: '05',
      title: 'Implement',
      description: 'Working with developers to ensure the design is implemented with precision and care.',
      color: 'rose'
    }
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Design Process</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A structured yet flexible approach that adapts to each project's unique requirements while ensuring consistent quality results.
          </p>
        </AnimatedElement>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 relative">
            {processSteps.map((step, index) => (
              <AnimatedElement 
                key={step.number} 
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 
                delay={index * 100}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <div className={`w-20 h-20 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/20 flex items-center justify-center text-${step.color}-600 dark:text-${step.color}-400 text-3xl font-bold relative z-10`}>
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:px-12">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;