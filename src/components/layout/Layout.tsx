import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = Math.max(0, Math.min(1, window.scrollY / totalScroll));
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 transition-colors duration-300`}>
      <CustomCursor />
      <div className="fixed top-0 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 z-50" style={{ width: `${scrollProgress * 100}%` }} />
      <Header />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;