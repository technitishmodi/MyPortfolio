import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-500',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
    text: 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;