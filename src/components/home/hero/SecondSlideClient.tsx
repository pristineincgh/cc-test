import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import Link from 'next/link';
import { CheckCircle, Code, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { textVariants } from './HeroSliderClient';
import AnimateInView from '../AnimatedViewClient';

const HeroSecondSlide = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div className="w-full h-full py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col gap-4">
          <motion.div
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={0}
            className="text-center lg:text-left"
          >
            <Badge className="w-fit bg-primary/20 text-primary dark:text-foreground hover:bg-primary/30 transition-colors">
              For Ages 7-16
            </Badge>
          </motion.div>
          <motion.h1
            className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={1}
          >
            Make Learning to Code a{' '}
            <span className="text-secondary">Superpower</span> 💪
          </motion.h1>
          <motion.p
            className="text-center lg:text-left text-xl text-muted-foreground max-w-[600px]"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={2}
          >
            Interactive lessons and AI tutoring to help kids master programming
            and digital skills.
          </motion.p>
          <motion.div
            className="relative z-20 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-4"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={3}
          >
            <Button size="lg" asChild className="dark:text-foreground">
              <Link href="/book-demo">Book a demo today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/roadmaps">Explore Programs</Link>
            </Button>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={4}
          >
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Live Online Lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>AI-Powered Tutoring</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Personalized Learning</span>
            </div>
          </motion.div>
        </div>
        <AnimateInView once={false} delay={0.3} isActive={isActive}>
          <div className="relative h-[400px] w-auto aspect-auto sm:aspect-[5/6] mx-auto">
            <Image
              src="/images/hero.png"
              alt="Kids coding"
              fill
              className="object-cover"
            />
            <div className="absolute -top-4 -right-4 bg-accent p-4 rounded-lg shadow-lg animate-bounce-slow">
              <Gamepad2 className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary p-4 rounded-lg shadow-lg animate-float">
              <Code className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>
        </AnimateInView>
      </div>
    </div>
  );
};
export default HeroSecondSlide;
