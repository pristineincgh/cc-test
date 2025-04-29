import MainContent from '@/components/roadmaps/MainContent';
import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmaps',
  description:
    'Explore our curated roadmaps designed to guide young learners on their educational journey.',
};

const Roadmaps = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <ScrollAnimation>
          <div className="py-20 text-center max-w-[800px] mx-auto">
            <Badge className="mb-4 dark:text-foreground">
              Explore Roadmaps
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Customized Roadmaps for Every <br className="hidden sm:block" />{' '}
              Young Learner
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Create personalized learning paths with custom milestones,
              resources, and goals for each kid.
            </p>
          </div>
        </ScrollAnimation>
      </SiteHeader>

      <MainContent />
    </div>
  );
};
export default Roadmaps;
