import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if target has custom cursor text
      const target = e.target as HTMLElement;
      const clickable = target.closest('[data-cursor]');
      if (clickable) {
        setIsHovered(true);
        setCursorText(clickable.getAttribute('data-cursor') || '');
      } else if (target.closest('a, button, input, [role="button"]')) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#00F5D4] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 6),
          y: mousePosition.y - (isHovered ? 24 : 6),
          width: isHovered ? 48 : 12,
          height: isHovered ? 48 : 12,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />

      {/* Trailing aura ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-[#00F5D4]/40 bg-[#00F5D4]/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 20),
          y: mousePosition.y - (isHovered ? 36 : 20),
          width: isHovered ? 72 : 40,
          height: isHovered ? 72 : 40,
          opacity: isHovered ? 1 : 0.6,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 180, mass: 0.5 }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-widest text-[#00F5D4] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
