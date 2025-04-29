'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'fade' | 'slide' | 'scale';
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = 'up',
  type = 'fade',
  duration = 0.5,
  once = true,
  threshold = 0.2,
}: ScrollAnimationProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Define animation variants based on type and direction
  const getVariants = () => {
    const fadeVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const slideVariants = {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    };

    const scaleVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    };

    switch (type) {
      case 'slide':
        return slideVariants;
      case 'scale':
        return scaleVariants;
      case 'fade':
      default:
        return fadeVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
