"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode; 
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
    const [scale, setScale] = useState<number>(1);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const totalScrollable = docHeight - windowHeight;

        const newScale = 1 + (scrollPosition / totalScrollable * 8);
        setScale(newScale);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            animate={{ scale }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
