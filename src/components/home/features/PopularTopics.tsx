import Image from 'next/image';
import AnimateInView from '../AnimatedViewClient';
import { Badge } from '@/components/ui/badge';
import { topics } from '@/lib/data/featuresData';

const PopularTopics = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <AnimateInView>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <Badge className="mb-4 dark:text-foreground">Popular Topics</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Learn What Excites You!
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our most popular coding topics and find what sparks your
              child&apos;s interest.
            </p>
          </div>
        </AnimateInView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group flex justify-center items-center gap-4 p-4"
            >
              <div className="flex items-center justify-center rounded-full overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={150}
                  height={150}
                  unoptimized
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl w-fit font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-foreground after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
