import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { BookOpen, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

const StepThree = () => {
  return (
    <ScrollAnimation type="slide" direction="left" className="mb-16 md:mb-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
            <div className="relative bg-card border rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent-foreground mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Step 3
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Guided Learning</h3>
              <p className="text-muted-foreground">
                The child follows their custom path with 1-on-1 tutor sessions
                and AI-powered support between sessions to reinforce concepts.
              </p>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/tutors">
                    Meet Our Tutors
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-background rounded-full border shadow-lg flex items-center justify-center p-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center animate-pulse-slow">
                <BookOpen className="h-16 w-16 text-accent" />
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-secondary p-3 rounded-lg shadow-lg animate-float">
              <Star className="h-5 w-5 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default StepThree;
