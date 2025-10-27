import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '', centered = true }) => {
  const textAlign = centered ? 'text-center' : '';
  
  return (
    <div className={`${textAlign} mb-12 ${className}`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
