import AnimateInView from '@/components/home/AnimatedViewClient';
import { CustomizedSchedule } from '@/components/home/CustomizedScheduleClient';
import Features from '@/components/home/features/Features';
import ForEveryAgeSection from '@/components/home/ForEveryAgeSection';
import HeroSlider from '@/components/home/hero/HeroSliderClient';
import HowItWorks from '@/components/home/how-it-works/HowItWorks';
import ParentEngagement from '@/components/home/ParentEngagement';
import Testimonials from '@/components/home/Testimonials';
import VideoStoriesCarousel from '@/components/home/VideoStoriesCarouselClient';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <HeroSlider />
      </SiteHeader>

      <ForEveryAgeSection />

      <VideoStoriesCarousel />

      <HowItWorks />

      <CustomizedSchedule />

      <Features />

      <Testimonials />

      <ParentEngagement />

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center p-4 pb-12 lg:pb-24">
        <div className="relative grid place-content-center overflow-hidden w-full max-w-7xl min-h-[35rem] mx-auto rounded-2xl border dark:border-border shadow-lg p-8">
          {/* Background container */}
          <div className="absolute inset-0 z-0 opacity-50 lg:opacity-80">
            {/* Primary blob layer (deep blue) */}
            <div
              className="absolute inset-0 w-full h-full opacity-20 animate-float-slow"
              style={{
                backgroundColor: 'oklch(61.41% 0.21139 256.2152)',
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />

            {/* Secondary blob layer (teal) */}
            <div
              className="absolute inset-0 w-full h-full opacity-15 animate-float-medium"
              style={{
                backgroundColor: 'oklch(72.05% 0.192 149.49)',
                clipPath:
                  'polygon(100% 0%, 80% 10%, 65% 0%, 48% 15%, 35% 0%, 20% 10%, 0% 0%, 0% 45%, 10% 60%, 0% 85%, 15% 100%, 35% 85%, 50% 100%, 65% 85%, 80% 100%, 95% 85%, 100% 100%, 100% 60%, 90% 45%, 100% 30%, 100% 0%)',
                transform: 'scale(1.1) translateY(5%)',
              }}
            />

            {/* Accent blob layer (warm yellow) */}
            <div
              className="absolute inset-0 w-full h-full opacity-10 animate-float-fast"
              style={{
                backgroundColor: 'oklch(85.7% 0.17515 88.3688)',
                clipPath:
                  'polygon(40% 0%, 60% 0%, 80% 20%, 90% 10%, 100% 30%, 100% 70%, 90% 90%, 70% 100%, 30% 100%, 10% 90%, 0% 70%, 0% 30%, 10% 10%, 30% 0%)',
                transform: 'scale(0.9) translateX(10%)',
                filter: 'blur(8px)',
              }}
            />

            {/* Binary pattern */}
            <div className="absolute inset-0 w-full h-full opacity-5 overflow-hidden">
              <div className="binary-pattern select-none text-[10px] text-black font-mono leading-tight">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i}>
                    {Array.from({ length: 50 })
                      .map(() => (Math.random() > 0.5 ? '1' : '0'))
                      .join(' ')}
                  </div>
                ))}
              </div>
            </div>

            {/* Circuit lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M10,30 Q30,5 50,30 T90,30"
                fill="none"
                stroke="oklch(61.41% 0.21139 256.2152)"
                strokeWidth="0.5"
                strokeDasharray="1 2"
              />
              <path
                d="M20,70 Q40,95 60,70 T80,70"
                fill="none"
                stroke="oklch(72.05% 0.192 149.49)"
                strokeWidth="0.5"
                strokeDasharray="1 2"
              />
              <circle
                cx="10"
                cy="30"
                r="1"
                fill="oklch(85.7% 0.17515 88.3688)"
              />
              <circle
                cx="50"
                cy="30"
                r="1"
                fill="oklch(85.7% 0.17515 88.3688)"
              />
              <circle
                cx="90"
                cy="30"
                r="1"
                fill="oklch(85.7% 0.17515 88.3688)"
              />
              <circle
                cx="20"
                cy="70"
                r="1"
                fill="oklch(85.7% 0.17515 88.3688)"
              />
              <circle
                cx="60"
                cy="70"
                r="1"
                fill="oklch(85.7% 0.17515 88.3688)"
              />
              <circle
                cx="80"
                cy="70"
                r="1"
                fill="oklch(85.7% 0.17515 88.3688)"
              />
            </svg>
          </div>

          {/* Content container */}
          <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimateInView>
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/placeholder.png"
                    alt="Kids learning to code"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-multiply" />
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </AnimateInView>
              <AnimateInView delay={0.2}>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Ready to Start Your Child&#39;s Coding Journey?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Join thousands of families who are giving their children the
                    gift of digital literacy and creative problem-solving
                    skills.
                  </p>
                  <ul className="space-y-2 my-4">
                    {[
                      "Fun, interactive lessons tailored to your child's age and skill level",
                      'Supportive community of tutors and fellow learners',
                      "Flexible scheduling to fit your family's busy life",
                      'Real projects that build portfolio-worthy skills',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="rounded-full p-1 bg-secondary/20 text-secondary mt-1">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button size="lg" asChild className="dark:text-foreground">
                      <Link href="/book-demo">Book a free demo</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="dark:hover:text-foreground"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
