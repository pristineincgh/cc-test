import { ScrollAnimation } from '@/components/scroll-animation/ScrollAnimation';
import SiteHeader from '@/components/site-header/SiteHeaderClient';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { stats, team, values } from '@/lib/data/aboutUsData';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Curiosity Cove, our mission, values, and the team dedicated to empowering kids through coding.',
};

const AboutUs = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader>
        <div className="container px-4 md:px-6 py-20 grid gap-6 lg:grid-cols-5 lg:gap-12 items-center">
          <ScrollAnimation className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <Badge className="w-fit dark:text-foreground">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our Mission to Make Coding{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Accessible to All Kids
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                We believe every child deserves the opportunity to learn digital
                skills in a fun, engaging, and supportive environment.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2} className="lg:col-span-3">
            <div className="relative h-[400px] w-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-3xl -z-10" />

              <div className="sm:hidden">
                <Image
                  src="/images/kids-learning-3.jpg"
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
                    href="/images/kids-learning-3.jpg"
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
          </ScrollAnimation>
        </div>
      </SiteHeader>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <Badge className="mb-4 dark:text-foreground">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                How Curiosity Cove Began
              </h2>
              <p className="text-muted-foreground text-lg">
                From a small idea to a global platform helping thousands of kids
                learn to code.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation type="slide" direction="left">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/history.jpg"
                  alt="Curiosity Cove history"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="slide" direction="right">
              <div className="space-y-6">
                <p className="text-lg">
                  Curiosity Cove was founded in 2020 by a team of educators,
                  software engineers, and parents who saw a gap in how coding
                  was being taught to children.
                </p>
                <p className="text-lg">
                  We noticed that most coding platforms were either too
                  simplistic or too complex, failing to grow with children as
                  they developed their skills. We set out to create a platform
                  that would make coding accessible, engaging, and adaptable to
                  each child&apos;s learning journey.
                </p>
                <p className="text-lg">
                  Starting with just 50 students in our first virtual classroom,
                  we&apos;ve now grown to serve over 10,000 young coders across
                  the globe, with a team of dedicated tutors and a constantly
                  evolving curriculum.
                </p>
                <p className="text-lg font-medium">
                  Our mission remains the same: to empower the next generation
                  with the digital skills they need to thrive in an increasingly
                  technology-driven world.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted dark:bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <Badge className="mb-4 dark:text-foreground">Our Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground text-lg">
                The core principles that guide everything we do at Curiosity
                Cove.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground mt-2">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <Badge className="mb-4 dark:text-foreground">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Meet the People Behind CodeKids
              </h2>
              <p className="text-muted-foreground text-lg">
                Our diverse team of educators, engineers, and designers are
                passionate about creating the best learning experience for kids.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="overflow-hidden h-full py-0">
                  <div className="relative h-64">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground mt-2">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="dark:hover:text-foreground"
            >
              View Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-3xl">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="max-w-[800px] mx-auto text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Join the Curiosity Cove Family
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
                Start your child&apos;s coding journey today and give them the
                skills they need for tomorrow&apos;s world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/book-demo">Get a free demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="dark:border-slate-500 dark:hover:text-foreground"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
