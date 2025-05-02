'use client';

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

export function BackgroundImage({
  speed = 50,
  children,
}: {
  speed?: number;
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const newX = (t / 1000) * speed;
    x.set(-newX % window.innerWidth); // loop horizontally
  });

  return (
    <div className="relative w-full">
      {/* Background Layer */}
      <motion.div
        ref={backgroundRef}
        style={{
          backgroundImage: "url('/home_background.png')",
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'cover',
          backgroundPositionX: x,
          backgroundPositionY: 'top',
        }}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
