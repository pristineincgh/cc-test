import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import SiteHeader from '@/components/site-header/SiteHeaderClient';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Curiosity Cove platform.',
};

const TermsOfService = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <div className="py-20 container px-4 md:px-6">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Terms of Service
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
            <h2 className="font-bold text-2xl mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity
              (&quot;you&quot;) and Curiosity Cove (&quot;we,&quot;
              &quot;us&quot; or &quot;our&quot;), concerning your access to and
              use of the Curiosity Cove website and platform.
            </p>
            <p className="my-5">
              By accessing or using the platform, you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, then
              you may not access the platform.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the platform is our proprietary
              property and all source code, databases, functionality, software,
              website designs, audio, video, text, photographs, and graphics on
              the platform (collectively, the &quot;Content&quot;) and the
              trademarks, service marks, and logos contained therein (the
              &quot;Marks&quot;) are owned or controlled by us or licensed to
              us, and are protected by copyright and trademark laws and various
              other intellectual property rights.
            </p>
            <p className="my-5">
              The Content and Marks are provided on the platform &quot;AS
              IS&quot; for your information and personal use only. Except as
              expressly provided in these Terms of Service, no part of the
              platform and no Content or Marks may be copied, reproduced,
              aggregated, republished, uploaded, posted, publicly displayed,
              encoded, translated, transmitted, distributed, sold, licensed, or
              otherwise exploited for any commercial purpose whatsoever, without
              our express prior written permission.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              3. User Representations
            </h2>
            <p>By using the platform, you represent and warrant that:</p>
            <ol className="list-decimal list-inside my-5 ps-6">
              <li className="my-2 ps-1.5">
                All registration information you submit will be true, accurate,
                current, and complete.
              </li>
              <li className="my-2 ps-1.5">
                You will maintain the accuracy of such information and promptly
                update such registration information as necessary.
              </li>
              <li className="my-2 ps-1.5">
                You have the legal capacity and you agree to comply with these
                Terms of Service.
              </li>
              <li className="my-2 ps-1.5">
                You are not a minor in the jurisdiction in which you reside, or
                if a minor, you have received parental permission to use the
                platform.
              </li>
              <li className="my-2 ps-1.5">
                You will not access the platform through automated or non-human
                means, whether through a bot, script or otherwise.
              </li>
              <li className="my-2 ps-1.5">
                You will not use the platform for any illegal or unauthorized
                purpose.
              </li>
              <li className="my-2 ps-1.5">
                Your use of the platform will not violate any applicable law or
                regulation.
              </li>
            </ol>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              4. User Registration
            </h2>
            <p>
              You may be required to register with the platform. You agree to
              keep your password confidential and will be responsible for all
              use of your account and password. We reserve the right to remove,
              reclaim, or change a username you select if we determine, in our
              sole discretion, that such username is inappropriate, obscene, or
              otherwise objectionable.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              5. Subscription and Billing
            </h2>
            <p>
              We offer various subscription plans for access to our platform. By
              selecting a subscription plan, you agree to pay the subscription
              fees indicated for that plan. Subscription fees are billed in
              advance on a recurring basis, depending on the billing cycle you
              select.
            </p>
            <p className="my-5">
              You may cancel your subscription at any time, and you will
              continue to have access to the platform through the end of your
              billing period. All payments are non-refundable, except as
              expressly provided in these Terms of Service.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">6. Free Trial</h2>
            <p>
              We may, at our sole discretion, offer a subscription with a free
              trial for a limited period of time. You may be required to enter
              your billing information to sign up for the free trial. If you do
              enter your billing information when signing up for a free trial,
              you will not be charged until the free trial has expired.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              7. Prohibited Activities
            </h2>
            <p>
              You may not access or use the platform for any purpose other than
              that for which we make it available. The platform may not be used
              in connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="my-5">As a user of the platform, you agree not to:</p>
            <ol className="list-decimal list-inside my-5 ps-6">
              <li className="my-2 ps-1.5">
                Systematically retrieve data or other content from the platform
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li className="my-2 ps-1.5">
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li className="my-2 ps-1.5">
                Circumvent, disable, or otherwise interfere with
                security-related features of the platform.
              </li>
              <li className="my-2 ps-1.5">
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the platform.
              </li>
              <li className="my-2 ps-1.5">
                Use any information obtained from the platform in order to
                harass, abuse, or harm another person.
              </li>
              <li className="my-2 ps-1.5">
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li className="my-2 ps-1.5">
                Use the platform in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li className="my-2 ps-1.5">
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming, that interferes with any
                party&apos;s uninterrupted use and enjoyment of the platform or
                modifies, impairs, disrupts, alters, or interferes with the use,
                features, functions, operation, or maintenance of the platform.
              </li>
            </ol>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              8. User Generated Content
            </h2>
            <p>
              The platform may invite you to chat, contribute to, or participate
              in blogs, message boards, online forums, and other functionality,
              and may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the platform, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, &quot;Contributions&quot;).
            </p>
            <p className="my-5">
              Any Contributions you transmit to us will be treated as
              non-confidential and non-proprietary. When you create or make
              available any Contributions, you thereby represent and warrant
              that the Contributions are not prohibited by these Terms of
              Service.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the
              platform immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms of Service.
            </p>
            <p className="my-5">
              If you wish to terminate your account, you may simply discontinue
              using the platform, or contact us to request account deletion.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              10. Modifications and Interruptions
            </h2>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the platform at any time or for any reason at our sole discretion
              without notice. We also reserve the right to modify or discontinue
              all or part of the platform without notice at any time.
            </p>
            <p className="my-5">
              We will not be liable to you or any third party for any
              modification, suspension, or discontinuance of the platform.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of
              the United States. Curiosity Cove and yourself irrevocably consent
              that the courts of the United States shall have exclusive
              jurisdiction to resolve any dispute which may arise in connection
              with these terms.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">
              12. Dispute Resolution
            </h2>
            <p>
              You agree to irrevocably submit all disputes related to Terms or
              the relationship established by this Agreement to the jurisdiction
              of the United States courts. Curiosity Cove shall also maintain
              the right to bring proceedings as to the substance of the matter
              in the courts of the country where you reside or, if these Terms
              are entered into in the course of your trade or profession, the
              state of your principal place of business.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">13. Corrections</h2>
            <p>
              There may be information on the platform that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the platform at any time, without prior notice.
            </p>

            <h2 className="font-bold text-2xl mt-8 mb-4">14. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the platform or to
              receive further information regarding use of the platform, please
              contact us at:
            </p>
            <p className="my-5">
              Email: legal@curiosity Cove.com
              <br />
              Phone: +1 (888) 123-4567
              <br />
              Address: 123 Learning Lane, Tech City, CA 94000
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TermsOfService;
