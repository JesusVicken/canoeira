import React from 'react';

interface CanoeiraLogoProps {
  className?: string;
  variant?: 'wordmark' | 'seal' | 'full';
  color?: 'cyan' | 'sand' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CanoeiraLogo: React.FC<CanoeiraLogoProps> = ({
  className = '',
  variant = 'wordmark',
  color = 'cyan',
  size = 'md',
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'h-7 sm:h-8';
      case 'md':
        return 'h-9 sm:h-11';
      case 'lg':
        return 'h-14 sm:h-16';
      case 'xl':
        return 'h-20 sm:h-28';
      default:
        return 'h-9 sm:h-11';
    }
  };

  const getLogoSrc = () => {
    if (variant === 'seal') {
      return '/assets/canoeiraRealLogo.png';
    }
    if (color === 'sand' || color === 'white') {
      return '/assets/canoeiraWordmarkLight.png';
    }
    return '/assets/canoeiraWordmark.png';
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={getLogoSrc()}
        alt="Canoeira — Marca Oficial"
        className={`${getSizeClass()} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        draggable={false}
      />
    </div>
  );
};

