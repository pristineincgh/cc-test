'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const AnimateInView = ({
  children,
  className,
  delay = 0,
  once = true,
  isActive,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  isActive?: boolean;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  useEffect(() => {
    if (isActive !== undefined) {
      // Swiper-controlled behavior
      if (isActive) {
        controls.start('visible');
      } else if (!once) {
        controls.start('hidden');
      }
    } else {
      // Standard inView behavior
      if (inView) {
        controls.start('visible');
      }
    }
  }, [controls, inView, isActive, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;
