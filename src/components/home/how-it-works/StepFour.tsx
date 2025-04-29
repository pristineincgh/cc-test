import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import { LineChart, Star } from 'lucide-react';

const StepFour = () => {
  return (
    <ScrollAnimation type="slide" direction="right" className="mb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-background rounded-full border shadow-lg flex items-center justify-center p-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center animate-pulse-slow">
                <LineChart className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-accent p-3 rounded-lg shadow-lg animate-bounce-slow">
              <Star className="h-5 w-5 text-accent-foreground" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="relative bg-card border rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mr-4">
                  <LineChart className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Step 4
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Regular assessments and milestone celebrations keep the child
                motivated. Parents can also track progress in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default StepFour;
