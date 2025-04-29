'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Calendar,
  Clock,
  Code,
  GraduationCap,
  Languages,
  Star,
  ThumbsUp,
  Users,
  Video,
} from 'lucide-react';
import { Availability, Tutor } from '@/lib/data/tutorsData';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export function TutorProfileModal({ tutor }: { tutor: Tutor }) {
  // Format availability for display
  const formatAvailability = (availability: Availability) => {
    if (!availability) return 'Contact for availability';

    return (
      Object.entries(availability)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, available]) => available)
        .map(([day]) => day)
        .join(', ')
    );
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image */}
        <div className="md:w-1/3">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={tutor.image || '/images/placeholder.png'}
              alt={tutor.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Basic Info */}
        <div className="md:w-2/3 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <DialogTitle className="text-3xl font-bold">
                {tutor.name}
              </DialogTitle>
              <DialogDescription className="text-lg">
                {tutor.title || 'Coding Tutor'}
              </DialogDescription>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tutor.subjects.map((subject, i) => (
              <Badge key={i} variant="outline" className="bg-primary/10">
                {subject}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{tutor.yearsExperience}+ years teaching experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>Ages: {tutor.ageGroups.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-muted-foreground" />
              <span>Languages: {tutor.languages?.join(', ') || 'English'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Available:{' '}
                {tutor.availability
                  ? formatAvailability(tutor.availability)
                  : 'Contact for availability'}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-muted-foreground">{tutor.bio}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="flex-1 md:flex-none" asChild>
              <Link href="/book-demo">Book a Session</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs for additional information */}
      <Tabs defaultValue="about">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              About {tutor.name.split(' ')[0]}
            </h3>
            <p className="text-muted-foreground">
              {tutor.bio + ' ' + tutor.bio}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Specialties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(tutor.specialties || tutor.subjects).map((specialty, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Teaching Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  icon: <Video className="h-4 w-4 text-primary" />,
                  label: 'Online Sessions',
                },
                {
                  icon: <Users className="h-4 w-4 text-primary" />,
                  label: '1-on-1 Tutoring',
                },
                {
                  icon: <BookOpen className="h-4 w-4 text-primary" />,
                  label: 'Project-Based Learning',
                },
                {
                  icon: <ThumbsUp className="h-4 w-4 text-primary" />,
                  label: 'Interactive Exercises',
                },
              ].map((method, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {method.icon}
                  </div>
                  <span>{method.label}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="experience" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {(
                tutor.experience || [
                  {
                    role: 'Senior Software Engineer',
                    company: 'Tech Innovations Inc.',
                    period: '2018 - Present',
                    description:
                      'Developing educational software and mentoring junior developers.',
                  },
                  {
                    role: 'Computer Science Teacher',
                    company: 'Westlake High School',
                    period: '2015 - 2018',
                    description:
                      'Taught programming fundamentals to high school students.',
                  },
                ]
              ).map((exp, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold">{exp.role}</h4>
                  <div className="flex justify-between text-sm">
                    <span>{exp.company}</span>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="space-y-4">
              {(
                tutor.education || [
                  {
                    degree: 'M.S. Computer Science',
                    institution: 'Stanford University',
                    year: '2015',
                  },
                  {
                    degree: 'B.S. Computer Engineering',
                    institution: 'MIT',
                    year: '2013',
                  },
                ]
              ).map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <div className="flex justify-between text-sm">
                      <span>{edu.institution}</span>
                      <span className="text-muted-foreground">{edu.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(
                tutor.certifications || [
                  'Google Certified Educator',
                  'Microsoft Certified Trainer',
                  'Apple Teacher Certification',
                  'Code.org Certified Educator',
                ]
              ).map((cert, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Student Reviews</h3>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(tutor.rating)
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{tutor.rating}</span>
              <span className="text-muted-foreground ml-1">
                ({tutor.reviewCount || '24'} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                name: 'Sarah J.',
                rating: 5,
                date: '2 months ago',
                comment:
                  "My daughter was struggling with coding concepts in school, but after just a few sessions with this tutor, she's now excelling and even helping her classmates! The personalized approach made all the difference.",
              },
              {
                name: 'Michael T.',
                rating: 5,
                date: '4 months ago',
                comment:
                  'Exceptional teaching style that really connects with kids. My son looks forward to every session and has built some impressive projects already. Highly recommend!',
              },
              {
                name: 'Priya K.',
                rating: 4,
                date: '1 month ago',
                comment:
                  'Very knowledgeable and patient. Great at explaining complex concepts in simple terms that my 10-year-old can understand. Would definitely recommend to other parents.',
              },
            ].map((review, i) => (
              <div
                key={i}
                className="border-b border-border pb-4 last:border-0"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline">View All Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-4 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              Have questions about {tutor.name.split(' ')[0]}&apos;s teaching
              style or availability?
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button>Book a Session</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
