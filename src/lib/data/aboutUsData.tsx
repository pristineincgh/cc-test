import { BookOpen, Code, Heart, Lightbulb, Rocket, Users } from 'lucide-react';

export const values = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Innovation',
    description:
      'We constantly evolve our teaching methods and curriculum to incorporate the latest educational research and technology trends.',
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Inclusiveness',
    description:
      'We believe coding is for everyone, regardless of background, gender, or learning style. We design our platform to be accessible to all.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Community',
    description:
      'We foster a supportive community where kids can collaborate, share ideas, and learn from each other.',
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: 'Quality Education',
    description:
      'We maintain high standards in our curriculum, ensuring kids receive a comprehensive education that prepares them for the future.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Empowerment',
    description:
      'We equip kids with the confidence and skills to become creators, not just consumers, of technology.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Practical Skills',
    description:
      'We focus on teaching real-world skills that kids can apply immediately and build upon throughout their lives.',
  },
];

export const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former teacher with 10+ years in EdTech',
    image: '/images/placeholder.png',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Head of Curriculum',
    bio: 'PhD in Computer Science Education',
    image: '/images/placeholder.png',
  },
  {
    name: 'David Chen',
    role: 'Lead Developer',
    bio: 'Full-stack engineer & game developer',
    image: '/images/placeholder.png',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Tutoring',
    bio: 'Manages our global team of 50+ tutors',
    image: '/images/placeholder.png',
  },
];

export const stats = [
  {
    number: '1K+',
    label: 'Kids Taught',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    number: '50+',
    label: 'Countries',
    icon: <Rocket className="h-8 w-8 text-primary" />,
  },
  {
    number: '500K+',
    label: 'Class Hours',
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    number: '98%',
    label: 'Parent Satisfaction',
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
];
