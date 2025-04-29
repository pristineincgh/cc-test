import { programTutors } from '@/lib/data/forEveryAgeData';
import { Badge } from '../ui/badge';
import AnimateInView from './AnimatedViewClient';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const ForEveryAgeSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimateInView>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <Badge className="mb-4 dark:text-foreground">For Every Age</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Programs & Tutors for Every Age
            </h2>
            <p className="text-muted-foreground text-lg">
              Find the perfect program and tutor match for your child&apos;s age
              and skill level.
            </p>
          </div>
        </AnimateInView>

        <div className="flex flex-col sm:flex-row lg:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programTutors.map((ageGroup, index) => (
            <AnimateInView key={index} delay={index * 0.1} className="w-full">
              <div className="relative box-border w-full xl:w-[24rem] 2xl:w-[26rem] h-[15rem] bg-gradient-to-br from-primary/10 to-secondary/10 border shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-sm rounded-[17px] text-center transition-all duration-500 flex items-center justify-center select-none font-bold hover:transform overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground dark:from-background to-transparent" />
                <div className="absolute inset-0 -z-10">
                  <Image
                    src={ageGroup.image}
                    alt={ageGroup.ageRange}
                    fill
                    className="object-cover rounded-[17px] group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="relative z-20">
                  <Badge className="w-fit mb-2 bg-primary text-primary-foreground dark:text-foreground">
                    {ageGroup.ageRange}
                  </Badge>
                  <h3 className="text-white font-bold text-xl">
                    {ageGroup.skillLevel}
                  </h3>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="dark:text-foreground">
            <Link href="/programs">Browse All Roadmaps</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ForEveryAgeSection;
