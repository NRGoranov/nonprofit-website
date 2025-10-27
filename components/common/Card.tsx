import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
