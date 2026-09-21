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

  // Dedicated SVG vector representation matching the official brand logo (canoeira2.svg)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`flex items-center ${getSizeClass()}`}>
        <img
          src="/assets/canoeira2.svg"
          alt="Canoeira Marca Oficial"
          className={`${getSizeClass()} w-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105 shadow-sm`}
        />
      </div>
    </div>
  );
};
