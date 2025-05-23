import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y);
      const clickables = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT'];
      setIsPointer(clickables.includes(target?.tagName || '') || 
                  window.getComputedStyle(target as Element).cursor === 'pointer');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateCursorStyle);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateCursorStyle);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position]);

  if (typeof window === 'undefined') return null;

  // Only show custom cursor on desktop
  if (window.innerWidth < 768) return null;

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 rounded-full bg-indigo-600 dark:bg-indigo-400 mix-blend-difference transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          width: isClicking ? '24px' : isPointer ? '36px' : '12px',
          height: isClicking ? '24px' : isPointer ? '36px' : '12px',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s'
        }}
      />
      <div 
        className={`fixed pointer-events-none z-50 rounded-full border border-indigo-600 dark:border-indigo-400 transition-all duration-300 ease-out ${isHidden ? 'opacity-0' : 'opacity-60'}`}
        style={{
          width: isClicking ? '30px' : isPointer ? '64px' : '40px',
          height: isClicking ? '30px' : isPointer ? '64px' : '40px',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transitionProperty: 'width, height, opacity, background-color',
          backgroundColor: isPointer ? 'rgba(99, 102, 241, 0.1)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;