import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Quote className="text-indigo-400 mb-4 opacity-30" size={40} />
                        <p className="text-neutral-700 dark:text-neutral-300 text-lg italic mb-6">
                          "{testimonial.quote}"
                        </p>
                        
                        <div>
                          <p className="font-medium text-lg">{testimonial.name}</p>
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-indigo-600 dark:bg-indigo-400 w-6' 
                    : 'bg-neutral-300 dark:bg-neutral-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;