'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'bounce' | 'zoom';
  threshold?: number;
};

export default function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  animation = 'fade',
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Define animation styles
  const getAnimationStyles = () => {
    if (!isVisible) {
      // Initial styles (before animation)
      let transform = '';

      if (animation === 'slide' || animation === 'fade') {
        switch (direction) {
          case 'up':
            transform = 'translateY(30px)';
            break;
          case 'down':
            transform = 'translateY(-30px)';
            break;
          case 'left':
            transform = 'translateX(30px)';
            break;
          case 'right':
            transform = 'translateX(-30px)';
            break;
        }
      } else if (animation === 'zoom') {
        transform = 'scale(0.9)';
      }

      return {
        opacity: 0,
        transform,
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      };
    }

    // Visible styles (after animation)
    let animationName = '';

    if (animation === 'bounce') {
      animationName = 'bounce 0.5s';
    }

    return {
      opacity: 1,
      transform: 'translate(0, 0) scale(1)',
      transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      transitionDelay: `${delay}s`,
      animation: animationName,
    };
  };

  return (
    <div ref={ref} className={cn(className)} style={getAnimationStyles()}>
      {children}
      <style jsx global>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
