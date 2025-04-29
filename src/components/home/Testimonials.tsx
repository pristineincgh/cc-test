'use client';

import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import AnimateInView from './AnimatedViewClient';
import { useRef } from 'react';
import { testimonials } from '@/lib/data/testimonialsData';

const Testimonials = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute -z-10 bottom-0 right-0 w-full h-full bg-gradient-to-tr from-primary/20 to-secondary/20 clip-path-opposite" />

      <div className="container px-4 md:px-6">
        <AnimateInView>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <Badge className="mb-4 dark:text-foreground">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Parents and Kids Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from families who have experienced the Curiosity Cove
              difference.
            </p>
          </div>
        </AnimateInView>

        <AnimateInView>
          <div>
            <Carousel
              opts={{ align: 'center', active: true }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={() => plugin.current.play()}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="w-full h-full">
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
                          <p className="text-lg mb-6 flex-1">
                            {testimonial.quote}
                          </p>
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
                              <p className="font-medium">
                                {testimonial.author}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:flex">
                <CarouselPrevious className="cursor-pointer" />
                <CarouselNext className="cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default Testimonials;
