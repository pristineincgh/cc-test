import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Curiosity Cove collects, uses, and protects your personal information.',
};

const PrivacyPolicy = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <div className="py-20 container px-4 md:px-6">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Last updated: April 14, 2025
            </p>
          </ScrollAnimation>
        </div>
      </SiteHeader>

      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-2xl mt-8 mb-4">Introduction</h2>
            <p>
              At Curiosity Cove, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, use our platform, or
              engage with our services. Please read this privacy policy
              carefully. If you do not agree with the terms of this privacy
              policy, please do not access the site.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when
              registering for our platform, expressing interest in obtaining
              information about us or our products and services, or otherwise
              contacting us.
            </p>

            <h3 className="font-bold text-xl mt-8 mb-4">Personal Data</h3>
            <p>
              The personal information that we collect depends on the context of
              your interactions with us, but may include:
            </p>
            <ul className="list-disc list-inside my-5 ps-6">
              <li className="my-2 ps-1.5">Name</li>
              <li className="my-2 ps-1.5">Email address</li>
              <li className="my-2 ps-1.5">Phone number</li>
              <li className="my-2 ps-1.5">Billing address</li>
              <li className="my-2 ps-1.5">Payment information</li>
              <li className="my-2 ps-1.5">
                Child&apos;s name and age (with parental consent)
              </li>
              <li className="my-2 ps-1.5">
                Educational progress and performance data
              </li>
            </ul>

            <h3 className="font-bold text-xl mt-8 mb-4">
              Automatically Collected Information
            </h3>
            <p>
              When you access our platform, we may automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc list-inside my-5 ps-6">
              <li className="my-2 ps-1.5">Device type</li>
              <li className="my-2 ps-1.5">Browser type</li>
              <li className="my-2 ps-1.5">Operating system</li>
              <li className="my-2 ps-1.5">IP address</li>
              <li className="my-2 ps-1.5">Time spent on pages</li>
              <li className="my-2 ps-1.5">Links clicked</li>
              <li className="my-2 ps-1.5">Pages visited</li>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We may use the information we collect from you for various
              purposes, including to:
            </p>
            <ul className="list-disc list-inside my-5 ps-6">
              <li className="my-2 ps-1.5">Create and manage your account</li>
              <li className="my-2 ps-1.5">Provide and deliver our services</li>
              <li className="my-2 ps-1.5">Process payments and refunds</li>
              <li className="my-2 ps-1.5">Send administrative information</li>
              <li className="my-2 ps-1.5">
                Respond to inquiries and offer support
              </li>
              <li className="my-2 ps-1.5">Personalize user experience</li>
              <li className="my-2 ps-1.5">Improve our platform</li>
              <li className="my-2 ps-1.5">Develop new products and services</li>
              <li className="my-2 ps-1.5">
                Send marketing and promotional communications
              </li>
              <li className="my-2 ps-1.5">Protect against misuse</li>
              <li className="my-2 ps-1.5">Comply with legal obligations</li>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              We take special precautions to protect the privacy of children
              under the age of 13. Our platform is designed for educational use
              by children with parental involvement. We comply with the
              Children&apos;s Online Privacy Protection Act (COPPA) and similar
              regulations worldwide.
            </p>
            <p className="my-5">
              We only collect personal information from children with verifiable
              parental consent. Parents can review, edit, and request deletion
              of their child&apos;s personal information at any time by
              contacting us.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this privacy policy. We will
              retain and use your information to the extent necessary to comply
              with our legal obligations, resolve disputes, and enforce our
              policies.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              Third-Party Services
            </h2>
            <p>
              Our platform may contain links to third-party websites and
              services that are not owned or controlled by Curiosity Cove. We
              have no control over, and assume no responsibility for, the
              content, privacy policies, or practices of any third-party
              websites or services.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              International Data Transfers
            </h2>
            <p>
              Your information may be transferred to, and maintained on,
              computers located outside of your state, province, country, or
              other governmental jurisdiction where the data protection laws may
              differ from those of your jurisdiction. If you are located outside
              the United States and choose to provide information to us, please
              note that we transfer the data to the United States and process it
              there.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc list-inside my-5 ps-6">
              <li className="my-2 ps-1.5">
                The right to access the personal information we have about you
              </li>
              <li className="my-2 ps-1.5">
                The right to request correction of inaccurate personal
                information
              </li>
              <li className="my-2 ps-1.5">
                The right to request deletion of your personal information
              </li>
              <li className="my-2 ps-1.5">
                The right to object to processing of your personal information
              </li>
              <li className="my-2 ps-1.5">The right to data portability</li>
              <li className="my-2 ps-1.5">The right to withdraw consent</li>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="my-5">
              Email: privacy@curiosity Cove.com
              <br />
              Phone: +1 (888) 123-4567
              <br />
              Address: 123 Learning Lane, Tech City, CA 94000
            </p>

            <ScrollAnimation
              delay={0.2}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/terms">View Terms of Service</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
