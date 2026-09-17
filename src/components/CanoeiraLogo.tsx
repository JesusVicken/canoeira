import React from 'react';

interface CanoeiraLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  color?: 'cyan' | 'sand' | 'terracotta' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CanoeiraLogo: React.FC<CanoeiraLogoProps> = ({
  className = '',
  variant = 'full',
  color = 'cyan',
  size = 'md',
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'cyan':
        return 'text-[#00F5D4] fill-[#00F5D4]';
      case 'sand':
        return 'text-[#ECE5D8] fill-[#ECE5D8]';
      case 'terracotta':
        return 'text-[#7A4421] fill-[#7A4421]';
      case 'white':
        return 'text-white fill-white';
      default:
        return 'text-[#00F5D4] fill-[#00F5D4]';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'h-6';
      case 'md':
        return 'h-10';
      case 'lg':
        return 'h-16';
      case 'xl':
        return 'h-24';
      default:
        return 'h-10';
    }
  };

  // Dedicated SVG vector representation matching the brand logo in IMG_5334.PNG
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {variant === 'icon' ? (
        <svg
          viewBox="0 0 100 100"
          className={`${getSizeClass()} w-auto ${getColorClass()} transition-transform duration-300 hover:scale-110`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sun core */}
          <circle cx="50" cy="55" r="10" fill="currentColor" />
          {/* Sun rays */}
          <line x1="50" y1="25" x2="50" y2="35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="30" y1="33" x2="37" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="33" x2="63" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="18" y1="55" x2="28" y2="55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="82" y1="55" x2="72" y2="55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ) : (
        <div className={`flex items-center ${getSizeClass()}`}>
          {/* Render High Quality Image or SVG fallback */}
          <img
            src="/assets/IMG_5334.PNG"
            alt="Canoeira Logo"
            className={`${getSizeClass()} w-auto object-contain transition-opacity duration-300 hover:opacity-90`}
          />
        </div>
      )}
    </div>
  );
};
