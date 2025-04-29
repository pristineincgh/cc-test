import AnimatedSection from '@/components/home/AnimatedSection';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import TutorsMainContent from '@/components/tutors/MainContent';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutors',
  description:
    'Discover our expert tutors who are passionate about teaching coding to kids of all ages and skill levels.',
};

const Tutors = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <AnimatedSection>
          <div className="py-20 text-center space-y-4">
            <Badge className="mb-2">Expert Educators</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Meet Our Tutors
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our tutors are passionate educators with real-world tech
              experience, dedicated to inspiring the next generation of coders.
            </p>
          </div>
        </AnimatedSection>
      </SiteHeader>

      <div className="container px-4 md:px-6 lg:px-8 py-10 mx-auto">
        <TutorsMainContent />
      </div>
    </div>
  );
};
export default Tutors;
