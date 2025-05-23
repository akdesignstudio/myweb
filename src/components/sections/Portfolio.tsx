import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects, categories, tags } from '../../data/projects';
import AnimatedElement from '../ui/AnimatedElement';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredProjects = projects.filter(project => {
    if (activeCategory && project.category !== activeCategory) return false;
    if (activeTag && !project.tags.includes(activeTag)) return false;
    return true;
  });

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveTag(null);
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
    setActiveCategory(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A curated collection of my recent projects showcasing my expertise in UX/UI design across various industries.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={200} className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === null
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
              }`}
              onClick={() => {
                setActiveCategory(null);
                setActiveTag(null);
              }}
            >
              All
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  activeTag === tag
                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
                    : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;