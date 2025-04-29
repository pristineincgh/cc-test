import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Route } from 'lucide-react';
import Link from 'next/link';

const StepTwo = () => {
  return (
    <ScrollAnimation type="slide" direction="right" className="mb-16 md:mb-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-background rounded-full border shadow-lg flex items-center justify-center p-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center animate-pulse-slow">
                <Route className="h-16 w-16 text-secondary" />
              </div>
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary p-3 rounded-lg shadow-lg animate-float">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl" />
            <div className="relative bg-card border rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mr-4">
                  <Route className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Step 2
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Create Custom Roadmap</h3>
              <p className="text-muted-foreground">
                Collaborate with tutors to design a personalized learning path
                aligned with the child&apos;s goals.
              </p>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/programs">
                    Explore Learning Paths
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default StepTwo;
