import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-neutral-800",
    text: "text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-neutral-800",
  };
  
  const sizeStyles = {
    small: "text-sm px-3 py-1.5",
    medium: "px-5 py-2.5",
    large: "text-lg px-6 py-3",
  };
  
  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed pointer-events-none" 
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;