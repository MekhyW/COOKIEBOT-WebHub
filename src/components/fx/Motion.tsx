"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    overflow?: "hidden" | "visible";
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    initial?: number;
    final?: number;
    ease?: string;
    once?: boolean;
    className?: string
    ignoreView?: boolean
}

export const Reveal = ({ children, delay = 0, duration = 0.75, initial = 22, final = 0, ease = "backOut", width = "fit-content", height = "fit-content", overflow = "visible", once = true, className = "", ignoreView = true}: RevealProps) => {
    
    const ref = useRef(null);
    
    const isInView = useInView(ref, { once: once });

    const mainControls = useAnimation();

    useEffect(() => {
        if (ignoreView) {
            mainControls.start("visible");
        }
    }, [ignoreView, mainControls]);

    useEffect(() => {
        if (isInView && !ignoreView) {
            mainControls.start("visible");
        }
    }, [ignoreView, isInView, mainControls]);

    return <>
        <div ref = {ref} style = {{ position: "relative", width, height, overflow: overflow}} className={className}>
            <motion.div
                variants = {{
                    hidden: { opacity: 0, y: initial },
                    visible: { opacity: 1, y: final }
                }}
                initial = "hidden"
                animate = {mainControls}
                transition = {{ duration: duration, delay: delay, ease: ease }}
            >
                {children}
            </motion.div>
        </div>
    </>
};