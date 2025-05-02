'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface HorizontalMarqueeProps {
  speed?: number; 
  children: React.ReactNode;
  className?: string;
}

export const HorizontalMarquee: React.FC<HorizontalMarqueeProps> = ({
  speed = 100,
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, [children]);

  useEffect(() => {
    if (width > 0) {
      const duration = width / speed;

      controls.start({
        x: ['-100%', '100%'],
        transition: {
          x: {
            duration,
            repeat: Infinity,
            ease: 'linear',
          },
        },
      });
    }
  }, [width, speed, controls]);

  return (
    <div className={`overflow-hidden w-full relative ${className}`}>
      <motion.div
        className="flex absolute"
        ref={containerRef}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalMarquee;
