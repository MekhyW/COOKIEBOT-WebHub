"use client";

import { motion, useTransform, useScroll } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ParallaxTextProps {
  children: ReactNode;
  speed: number;       
  direction?: 'left' | 'right';  
}

const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  speed,
  direction = 'right'
}) => {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setElementTop(ref.current.offsetTop);
        setClientHeight(window.innerHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const x = useTransform(scrollY, [elementTop, elementTop + clientHeight], direction === 'right' ? [0, -speed * 5] : [0, speed * 5], { clamp: false });

  return (
    <motion.div ref={ref} style={{ x }} className="overflow-hidden">
      {children}
    </motion.div>
  );
};

export default ParallaxText;