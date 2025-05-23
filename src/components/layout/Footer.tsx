import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ab<span className="text-indigo-600 dark:text-indigo-400">studio</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-sm">
              Creating thoughtful digital experiences that balance form and function.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-600 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-600 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-600 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Work</a></li>
              <li><a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#process" className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Process</a></li>
              <li><a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Get in Touch</h4>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">akalvania@gmail.com</p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">+91 9624 83 7799</p>
            <a href="#contact" className="inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center text-neutral-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} abstudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;