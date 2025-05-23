import React from 'react';
import { FileDown, Award, Zap, Heart } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="fade-in" className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Designer at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-neutral-700 dark:text-neutral-300 italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-right text-neutral-500 dark:text-neutral-400 mt-2">— Steve Jobs</p>
            </div>
          </AnimatedElement>
          
          <div className="space-y-8">
            <AnimatedElement animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                I'm a passionate UX/UI designer with over 8 years of experience creating intuitive and engaging digital experiences. I believe in designing with purpose, focusing on the user's needs while achieving business objectives.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                My approach combines strategic thinking with creative problem-solving to deliver designs that are not only aesthetically pleasing but also functional and accessible. I thrive on collaboration and enjoy working closely with cross-functional teams to bring ideas to life.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={200}>
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Zap className="text-indigo-600 dark:text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">UX Strategy</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Research, wireframing, user flows, information architecture
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Heart className="text-indigo-600 dark:text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">UI Design</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Visual design, design systems, interactive prototypes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Award className="text-indigo-600 dark:text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Product Design</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      End-to-end product design, design thinking, innovation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Zap className="text-indigo-600 dark:text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Prototyping</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Interactive prototypes, animations, micro-interactions
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={400}>
              <Button 
                variant="outline" 
                icon={<FileDown size={18} />}
                onClick={() => window.open('#')}
              >
                Download Resume
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;