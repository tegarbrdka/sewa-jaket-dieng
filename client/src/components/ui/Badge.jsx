import React from 'react';

const Badge = ({ children, variant = 'gray', className = '' }) => {
  const variants = {
    green: 'bg-primary-light/20 text-primary-light border-primary/30',
    amber: 'bg-accent-light/20 text-accent-light border-accent/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    gray: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
