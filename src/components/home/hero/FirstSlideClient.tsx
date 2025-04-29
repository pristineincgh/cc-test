import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { textVariants } from './HeroSliderClient';
import AnimateInView from '../AnimatedViewClient';

const HeroFirstSlide = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div className="w-full h-full py-20 lg:py-0 bg-gradient-to-br from-primary/10 to-secondary/10">
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
              Personalized Learning Journey
            </Badge>
          </motion.div>
          <motion.h1
            className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={1}
          >
            Roadmaps
            <span className="text-secondary"> tailored </span>
            to your child
          </motion.h1>
          <motion.p
            className="text-center lg:text-left text-xl text-muted-foreground max-w-[600px]"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={2}
          >
            1-on-1 live coding lessons where{' '}
            <span className="font-medium">you</span> set the schedule and{' '}
            <span className="font-medium">we</span> build the perfect skill
            roadmap together.
          </motion.p>
          <motion.div
            className="relative z-20 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-4"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={3}
          >
            <Button size="lg" asChild className="dark:text-foreground">
              <Link href="/book-demo"> Create Your Child&apos;s Roadmap</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/roadmaps">Explore Roadmaps</Link>
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
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Expert tutors</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Personalized Learning</span>
            </div>
          </motion.div>
        </div>

        <AnimateInView once={false} delay={0.3} isActive={isActive}>
          <div className="relative aspect-square sm:aspect-video lg:w-[30rem] lg:h-[35rem] mx-auto">
            <Image
              src="/images/gif/hero-slide-1a.gif"
              alt="Kids coding"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </AnimateInView>
      </div>
    </div>
  );
};
export default HeroFirstSlide;
