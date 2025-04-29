import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
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
import { CalendarDays, Mail, Phone } from 'lucide-react';
import { BiSolidChat } from 'react-icons/bi';
import Link from 'next/link';

import { contactFAQs as faqs } from '@/lib/data/faqData';

const ContactUs = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <ScrollAnimation>
          <div className="py-20 text-center max-w-[800px] mx-auto">
            <Badge className="mb-4 dark:text-foreground">Let&apos;s Talk</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Get in touch with us for <br className="hidden sm:block" /> more
              information
            </h1>
          </div>
        </ScrollAnimation>
      </SiteHeader>

      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollAnimation type="slide" direction="left">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We are here to answer any questions you may have about our
                    programs. Whether you want to learn more about our courses,
                    instructors, or anything else, we are here to help.
                  </p>
                  <div className="mt-4">
                    <h2 className="text-2xl font-bold text-primary dark:text-accent">
                      Contact Info
                    </h2>
                    <ul className="grid gap-4 my-4">
                      <li className="w-fit">
                        <h3 className="text-xl font-semibold">Email us</h3>
                        <p className="text-muted-foreground">
                          For general inquiries and support
                        </p>
                        <Link
                          href="mailto:4K3b9@example.com"
                          className="flex items-center gap-5 text-primary dark:text-accent hover:underline"
                        >
                          <span>
                            <Mail className="h-5 w-5" />
                          </span>
                          <span>info@curiositycove.com</span>
                        </Link>
                      </li>
                      <li className="w-fit">
                        <h3 className="text-xl font-semibold">Call us</h3>
                        <p className="text-muted-foreground">
                          Monday to Friday, 9am to 5pm
                        </p>
                        <Link
                          href="tel:+1234567890"
                          className="flex items-center gap-5 text-primary dark:text-accent hover:underline"
                        >
                          <Phone className="h-5 w-5" />
                          +1 (234) 567-890
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="slide" direction="right">
              <div className="space-y-5 w-[20rem] mx-auto">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <BiSolidChat className="h-14 w-14 text-slate-400" />
                    <p className="mt-4">Chat with our team</p>
                    <div className="w-[10rem] mx-auto mt-5">
                      <Button className="w-full">Let&apos;s Chat</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <CalendarDays className="h-14 w-14 text-slate-400" />
                    <p className="mt-4">Get a product demo</p>
                    <div className="w-[10rem] mx-auto mt-4">
                      <Button className="w-full" asChild>
                        <Link href="/book-demo">Book a demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our programs and
                services.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="max-w-[800px] mx-auto text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Start Your Child&apos;s Coding Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
                Join thousands of families who are giving their children the
                gift of digital literacy and creative problem-solving skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/book-demo">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
