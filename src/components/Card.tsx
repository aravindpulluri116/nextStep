import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
  icon?: LucideIcon;
  title?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glassmorphism = false,
  icon: Icon,
  title,
  onClick
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300 ease-in-out';
  
  const hoverClasses = hover
    ? 'hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/50 cursor-pointer'
    : '';
    
  const glassClasses = glassmorphism
    ? 'backdrop-blur-sm bg-white/5 border border-white/10'
    : 'bg-gray-900 border border-gray-800';
    
  const cardClasses = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {(title || Icon) && (
        <div className="flex items-center gap-3 mb-4">
          {Icon && <Icon className="text-blue-400" size={24} />}
          {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
}