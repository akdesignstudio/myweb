import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../data/projects';
import AnimatedElement from './AnimatedElement';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedElement 
      animation="fade-up" 
      delay={index * 100} 
      className="group"
    >
      <div 
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-neutral-200 mb-4">{project.category}</p>
          <a 
            href={`#project-${project.id}`} 
            className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-300 transition-colors"
          >
            View Project <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
        
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
        )}
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400">{project.category}</p>
      </div>
    </AnimatedElement>
  );
};

export default ProjectCard;