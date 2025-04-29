import FAQList from '@/components/faq/FAQListClient';
import AnimatedSection from '@/components/home/AnimatedSection';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently Asked Questions. Get answers to common questions.',
};

const FAQs = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <AnimatedSection>
          <div className="py-20 text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our programs,
              courses, and platform.
            </p>
          </div>
        </AnimatedSection>
      </SiteHeader>

      <FAQList />
    </div>
  );
};
export default FAQs;
