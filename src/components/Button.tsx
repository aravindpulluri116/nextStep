import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-blue-500 hover:scale-105',
    secondary: 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/25 focus:ring-green-500 hover:scale-105',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-lg hover:shadow-yellow-500/25 focus:ring-yellow-500 hover:scale-105',
    error: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 focus:ring-red-500 hover:scale-105',
    purple: 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 focus:ring-purple-500 hover:scale-105'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-3 text-base gap-2',
    lg: 'px-6 py-4 text-lg gap-3'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />}
      {children}
    </button>
  );
}