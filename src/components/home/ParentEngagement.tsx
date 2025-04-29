import { Button } from '../ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const ParentEngagement = () => {
  return (
    <section id="resources" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary dark:text-foreground">
                For Parents
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Stay Connected with Your Child&apos;s Progress
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our parent dashboard gives you real-time insights into your
                child&apos;s learning journey, with detailed progress reports
                and personalized recommendations.
              </p>
              <ul className="grid gap-2 my-4">
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Monitor progress and achievements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>View upcoming lessons and activities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Manage subscription and settings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Access personalized learning recommendations</span>
                </li>
              </ul>
              <div>
                <Button
                  type="button"
                  size="lg"
                  className="h-12 px-6 text-lg"
                  asChild
                >
                  <Link href="/book-demo" className="flex items-center gap-2">
                    Book a demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <AnimatedSection
            className="flex items-center justify-center"
            animation="bounce"
          >
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
              <div className="rounded-lg bg-muted p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Parent Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Welcome back! Here&apos;s how Emma is doing this week:
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-background p-4 shadow-sm">
                      <div className="text-sm font-medium">
                        Completed Lessons
                      </div>
                      <div className="text-2xl font-bold text-primary">12</div>
                    </div>
                    <div className="rounded-lg bg-background p-4 shadow-sm">
                      <div className="text-sm font-medium">Badges Earned</div>
                      <div className="text-2xl font-bold text-primary">5</div>
                    </div>
                    <div className="rounded-lg bg-background p-4 shadow-sm">
                      <div className="text-sm font-medium">Time Spent</div>
                      <div className="text-2xl font-bold text-primary">
                        3.5 hrs
                      </div>
                    </div>
                    <div className="rounded-lg bg-background p-4 shadow-sm">
                      <div className="text-sm font-medium">Next Lesson</div>
                      <div className="text-lg font-bold text-primary">
                        Coding Basics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ParentEngagement;
