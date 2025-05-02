"use client";

import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ScrollScaleProps {
  children: React.ReactNode;
}

const ScrollScale: React.FC<ScrollScaleProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const [scrollRange, setScrollRange] = useState([0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setScrollRange([0, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scale = useTransform(scrollY, scrollRange, [1, 1.5]);

  return (
    <motion.div style={{ scale }}>
      {children}
    </motion.div>
  );
};

export default ScrollScale;