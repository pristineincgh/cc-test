'use client';

import { Tutor, tutors } from '@/lib/data/tutorsData';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '../ui/card';
import { tutorsFQAs } from '@/lib/data/faqData';
import {
  Clock,
  Code,
  FileText,
  Gamepad2,
  Globe,
  Star,
  Users,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent } from '../ui/dialog';
import { TutorProfileModal } from './TutorProfileModal';
import { motion } from 'motion/react';
import Image from 'next/image';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const TutorsMainContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  // Handle opening the tutor profile modal
  const openTutorProfile = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setIsProfileModalOpen(true);
  };

  // Filter tutors based on search and filters
  const filteredTutors = tutors.filter((tutor) => {
    // Search filter
    const matchesSearch =
      searchQuery === '' ||
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subject) =>
        subject.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Subject filter
    const matchesSubject =
      selectedSubject === 'all' || tutor.subjects.includes(selectedSubject);

    // Age group filter
    const matchesAgeGroup =
      selectedAgeGroup === 'all' || tutor.ageGroups.includes(selectedAgeGroup);

    // Experience filter
    const matchesExperience =
      selectedExperience === 'all' ||
      (selectedExperience === '5+' && tutor.yearsExperience >= 5) ||
      (selectedExperience === '3-5' &&
        tutor.yearsExperience >= 3 &&
        tutor.yearsExperience < 5) ||
      (selectedExperience === '1-3' &&
        tutor.yearsExperience >= 1 &&
        tutor.yearsExperience < 3);

    // Tab filter
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'popular' && tutor.isPopular) ||
      (activeTab === 'new' && tutor.isNew) ||
      (activeTab === 'featured' && tutor.isFeatured);

    return (
      matchesSearch &&
      matchesSubject &&
      matchesAgeGroup &&
      matchesExperience &&
      matchesTab
    );
  });

  // Get subject options from all tutors
  const subjectOptions = Array.from(
    new Set(tutors.flatMap((tutor) => tutor.subjects))
  ).sort();

  // Get age group options from all tutors
  const ageGroupOptions = Array.from(
    new Set(tutors.flatMap((tutor) => tutor.ageGroups))
  ).sort();

  return (
    <>
      {/* Search and Filters */}
      <div className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Input
              placeholder="Search by name, subject, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjectOptions.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Age Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Age Groups</SelectItem>
              {ageGroupOptions.map((ageGroup) => (
                <SelectItem key={ageGroup} value={ageGroup}>
                  {ageGroup}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedExperience}
            onValueChange={setSelectedExperience}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience</SelectItem>
              <SelectItem value="5+">5+ Years</SelectItem>
              <SelectItem value="3-5">3-5 Years</SelectItem>
              <SelectItem value="1-3">1-3 Years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full lg:max-w-3xl mx-auto mb-10"
        >
          <TabsList className="bg-muted-foreground/10 w-full">
            <TabsTrigger value="all">All Tutors</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="new">New Tutors</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Tutors Grid */}
      {filteredTutors.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredTutors.map((tutor) => (
            <motion.div key={tutor.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0">
                <div className="relative">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={tutor.image || '/images/placeholder.png'}
                      alt={tutor.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  {tutor.isPopular && (
                    <Badge className="absolute top-3 right-3 bg-primary">
                      Popular
                    </Badge>
                  )}
                  {tutor.isNew && (
                    <Badge className="absolute top-3 right-3 bg-secondary">
                      New
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{tutor.name}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {tutor.yearsExperience}+ years experience
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {tutor.subjects.slice(0, 3).map((subject, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-primary/10"
                        >
                          {subject}
                        </Badge>
                      ))}
                      {tutor.subjects.length > 3 && (
                        <Badge variant="outline" className="bg-muted">
                          +{tutor.subjects.length - 3}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground line-clamp-3 text-sm mt-2">
                      {tutor.bio}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openTutorProfile(tutor)}
                  >
                    View Profile
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/book-demo">Book Session</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No tutors found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn&apos;t find any tutors matching your search criteria. Try
            adjusting your filters or search query.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
              setSelectedAgeGroup('all');
              setSelectedExperience('all');
              setActiveTab('all');
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Tutor Profile Modal */}
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="md:!max-w-3xl  lg:!max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedTutor && <TutorProfileModal tutor={selectedTutor} />}
        </DialogContent>
      </Dialog>

      {/* Featured Tutor Spotlight */}
      {filteredTutors.some((tutor) => tutor.isFeatured) && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Tutor Spotlight
          </h2>
          <div className="grid md:grid-cols-2 gap-8 bg-muted/30 rounded-xl p-6 md:p-8">
            {tutors
              .filter((tutor) => tutor.isFeatured)
              .slice(0, 1)
              .map((tutor) => (
                <div
                  key={tutor.id}
                  className="flex flex-col md:flex-row gap-6 items-center"
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background">
                    <Image
                      src={
                        tutor.image || '/placeholder.svg?height=400&width=400'
                      }
                      alt={tutor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{tutor.name}</h3>
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="ml-2 font-medium">{tutor.rating}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {tutor.featuredQuote || tutor.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutor.specialties?.map((specialty, i) => (
                        <Badge key={i} className="bg-primary/20 text-primary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => openTutorProfile(tutor)}>
                      Learn More About {tutor.name.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              ))}
            <div className="bg-background rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Why Our Tutors Stand Out
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">
                      <Code className="h-5 w-5" />
                    </div>
                    <span>Real-world industry experience in tech</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <span>Specialized in teaching kids of all ages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">
                      <Gamepad2 className="h-5 w-5" />
                    </div>
                    <span>Make learning fun and engaging</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span>Personalized learning plans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">
                      <Globe className="h-5 w-5" />
                    </div>
                    <span>Available for online and in-person sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Become a Tutor CTA */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 text-center mt-16">
        <h2 className="text-2xl font-bold mb-3">
          Are You Passionate About Teaching Kids to Code?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join our team of expert tutors and help inspire the next generation of
          tech innovators. We&apos;re looking for passionate educators with
          experience in programming and a love for teaching.
        </p>
        <Button size="lg" asChild>
          <Link href="/careers">Apply to Become a Tutor</Link>
        </Button>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tutorsFQAs.map((faq, i) => (
            <Card key={i} className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="link" asChild>
            <Link href="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default TutorsMainContent;
