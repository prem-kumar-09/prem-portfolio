'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const springConfigSlow = { damping: 30, stiffness: 200, mass: 1 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const cursorXSpringSlow = useSpring(cursorX, springConfigSlow);
  const cursorYSpringSlow = useSpring(cursorY, springConfigSlow);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] rounded-full pointer-events-none z-[99] hidden md:block backdrop-invert-[0.1]"
        style={{
          x: cursorXSpringSlow,
          y: cursorYSpringSlow,
          marginLeft: '-10px',
          marginTop: '-10px',
        }}
      />
    </>
  );
}
