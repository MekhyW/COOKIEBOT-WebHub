"use client";

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type HoverScaleProps = {
    children: ReactNode;
    scale?: number;
};

const HoverScale: React.FC<HoverScaleProps> = ({ children, scale = 1.1 }) => {
    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
};

export default HoverScale;
