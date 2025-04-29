import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight, MessageSquare, Star } from 'lucide-react';
import Link from 'next/link';

const StepOne = () => {
  return (
    <ScrollAnimation type="slide" direction="left" className="mb-16 md:mb-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="relative bg-card border rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Step 1
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Initial Assessment</h3>
              <p className="text-muted-foreground">
                Parents schedule a video call with our expert tutors to discuss
                their child&apos;s interests, goals, and learning style.
              </p>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/book-demo">
                    Schedule Assessment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-background rounded-full border shadow-lg flex items-center justify-center p-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center animate-pulse-slow">
                <MessageSquare className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-accent p-3 rounded-lg shadow-lg animate-bounce-slow">
              <Star className="h-5 w-5 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default StepOne;
