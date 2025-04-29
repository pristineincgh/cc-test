import { Button } from '../../ui/button';
import Link from 'next/link';
import { ScrollAnimation } from '../../scroll-animation/ScrollAnimation';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollAnimation type="fade">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  How{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Curiosity Cove
                  </span>{' '}
                  Works
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Our proven four-step approach combines expert tutoring with
                  AI-powered support to create a personalized learning journey
                  for your child.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline connector */}
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40 hidden sm:block" />

              <StepOne />

              <StepTwo />

              <StepThree />

              <StepFour />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ScrollAnimation>
          <section className="pb-16 md:pb-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/book-demo">Book Free Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </section>
  );
};
export default HowItWorks;
