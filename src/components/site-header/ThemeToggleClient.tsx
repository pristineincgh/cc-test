'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Sparkles } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9"></div>;
  }

  const toggleTheme = () => {
    if (theme === 'dark' || resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="relative rounded-full border-2 border-primary/20 bg-background hover:bg-primary/10 hover:text-primary"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          {/* Animated stars/sparkles that appear on hover */}
          {isHovering && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-yellow-400 dark:text-blue-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 40 - 20,
                    y: Math.random() * 40 - 20,
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.5,
                    delay: Math.random() * 0.2,
                    ease: 'easeOut',
                  }}
                >
                  <Sparkles size={8} />
                </motion.div>
              ))}
            </>
          )}
        </Button>
      </motion.div>

      {/* Tooltip that appears on hover */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs whitespace-nowrap z-50"
        >
          Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </motion.div>
      )}
    </div>
  );
}
