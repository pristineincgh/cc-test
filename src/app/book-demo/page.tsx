import AnimateInView from '@/components/home/AnimatedViewClient';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { demoExpectations, testimonials } from '@/lib/data/bookDemoData';
import HubSpotCalendar from '@/components/book-demo/HubSpotCalendar';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Book a demo with Curiosity-Cove to explore our cloud-native educational technology platform designed for kids.',
};

const BookDemo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader>
        <div className="overflow-hidden container px-4 md:px-6 py-20 grid gap-6 lg:grid-cols-5 lg:gap-12 items-center">
          <AnimateInView className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <Badge className="w-fit bg-primary/20 text-primary dark:text-foreground">
                Free Demo
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Book a Demo & Discover{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fun Learning for Kids!
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                See how our platform makes learning engaging and effective for
                kids ages 5-16. Our friendly team will walk you through
                everything!
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['Interactive', 'Personalized', 'Safe', 'Fun'].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-background/80 text-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2} className="lg:col-span-3">
            <div className="relative h-[400px] w-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-3xl -z-10" />

              <div className="sm:hidden">
                <Image
                  src="/images/little-boy-doing-school-online.jpg"
                  alt="Kids learning to code"
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="960"
                  height="540"
                >
                  <defs>
                    <clipPath id="shapeClip">
                      <path d="M742.848 158.048c66.5 68 113.3 194.6 70.1 257.2-43.1 62.6-176.2 61.1-311 62.1-134.7.9-271.1 4.3-332.4-68.7-61.4-73.1-47.7-222.7 20.5-291.6 68.2-68.9 190.9-57.2 295.4-46.7 104.5 10.5 190.8 19.8 257.4 87.7" />
                    </clipPath>

                    {/* Gradient Definition */}
                    <linearGradient
                      id="myGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0080ff" />
                      <stop offset="100%" stopColor="#21c45d" />
                    </linearGradient>
                  </defs>

                  <image
                    href="/images/little-boy-doing-school-online.jpg"
                    width="100%"
                    height="100%"
                    clipPath="url(#shapeClip)"
                  />

                  <path
                    fill="url(#myGradient)"
                    d="M742.848 158.048c66.5 68 113.3 194.6 70.1 257.2-43.1 62.6-176.2 61.1-311 62.1-134.7.9-271.1 4.3-332.4-68.7-61.4-73.1-47.7-222.7 20.5-291.6 68.2-68.9 190.9-57.2 295.4-46.7 104.5 10.5 190.8 19.8 257.4 87.7"
                    opacity={0}
                  />
                </svg>
              </div>
            </div>
          </AnimateInView>
        </div>
      </SiteHeader>

      {/* Demo Scheduling Section */}
      <section id="schedule" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <AnimateInView>
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold mb-6">
                    What You&apos;ll See in Your Demo
                  </h2>
                  <ul className="space-y-4">
                    {demoExpectations.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Demo Details
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 30 minutes with a learning specialist</li>
                      <li>
                        • Personalized to your child&apos;s age & interests
                      </li>
                      <li>• No obligation, completely free</li>
                      <li>• Available on desktop or mobile</li>
                    </ul>
                  </div>
                </div>
              </AnimateInView>
            </div>

            {/* HubSpot Calendar */}
            <div className="lg:col-span-3">
              <AnimateInView delay={0.2}>
                <Card className="overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <HubSpotCalendar />
                  </CardContent>
                </Card>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimateInView>
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <Badge className="mb-4">Trusted By</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Join Thousands of Happy Families
              </h2>
              <p className="text-muted-foreground text-lg">
                Parents, teachers, and schools love our platform. Here&apos;s
                what they have to say.
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimateInView key={index} delay={testimonial.delay}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <svg
                          className="h-8 w-8 text-primary/40"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-lg mb-6 flex-1">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || '/placeholder.svg'}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>
            ))}
          </div>

          <div className="mt-16">
            <AnimateInView delay={0.2}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium mb-2">
                  Featured In & Trusted By
                </h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  >
                    <div className="h-12 w-24 bg-muted rounded-md flex items-center justify-center">
                      <span className="text-muted-foreground font-medium">
                        Logo {i}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <AnimateInView>
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <Badge className="mb-4">Questions?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about our demo process and platform.
              </p>
            </div>
          </AnimateInView>

          <div className="max-w-3xl mx-auto">
            <AnimateInView delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: 'How long is the demo session?',
                    answer:
                      "Our demo sessions typically last 30 minutes. This gives us enough time to show you the key features of our platform and answer any questions you might have. If you need more time, we're happy to schedule a follow-up session.",
                  },
                  {
                    question: 'Is there a free trial after the demo?',
                    answer:
                      "Yes! After your demo, you'll receive access to a 7-day free trial of our platform. This gives you and your child the opportunity to explore all features and see how our learning tools work in real-world scenarios.",
                  },
                  {
                    question: 'Do I need to prepare anything for the demo?',
                    answer:
                      "No preparation is needed! Just come with any questions you might have. If you'd like to make the most of your demo, you can think about your child's learning goals or challenges beforehand so we can tailor the demonstration to your specific needs.",
                  },
                  {
                    question: 'Can my child join the demo session?',
                    answer:
                      'We encourage children to join the demo if possible. This gives them a chance to see the platform firsthand and even try out some activities. Our demo specialists are great with kids and will make sure the session is engaging for them.',
                  },
                  {
                    question: 'What if I need to reschedule my demo?',
                    answer:
                      "No problem at all! You can reschedule your demo through the confirmation email you'll receive after booking. If you need assistance, you can also contact our support team who will be happy to help you find a new time that works for your schedule.",
                  },
                  {
                    question:
                      "Will the demo be personalized to my child's age and interests?",
                    answer:
                      "Yes, our demos are personalized based on the information you provide. We'll focus on content and features relevant to your child's age group and learning interests, ensuring you see exactly how the platform will benefit your specific situation.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Still have questions?
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Our Support Team</Link>
                </Button>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimateInView>
            <Card className="overflow-hidden border-none bg-gradient-to-r from-primary/20 to-secondary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-6 md:grid-cols-2 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Ready to See Learning Come Alive?
                    </h2>
                    <p className="text-lg mb-6">
                      Book your free demo today and discover how our platform
                      can spark a love for learning in your child.
                    </p>
                    <Button size="lg" asChild>
                      <Link href="#schedule">Book Your Demo Now</Link>
                    </Button>
                  </div>
                  <div className="relative h-[200px] md:h-[300px]">
                    <Image
                      src="/images/happy-kid-learning.webp"
                      alt="Happy kid learning"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>
      </section>
    </div>
  );
};
export default BookDemo;
