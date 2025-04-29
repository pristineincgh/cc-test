import {
  BookOpen,
  Calendar,
  LineChart,
  MapPin,
  MessageSquare,
  Route,
  Star,
} from 'lucide-react';

export const steps = [
  {
    step: 1,
    title: 'Initial Assessment',
    description:
      "Parents schedule a video call with our expert tutors to discuss their child's interests, goals, and learning style.",
    icon: <Calendar className="h-6 w-6" />,
    visualIcon: <MessageSquare className="h-16 w-16 text-primary" />,
    floatingIcon: <Star className="h-5 w-5 text-accent-foreground" />,
    buttonText: 'Schedule Assessment',
    buttonHref: '/book-demo',
    color: 'primary' as const,
    direction: 'left' as const,
    cardOnLeft: false, // Card on right, visual on left
  },
  {
    step: 2,
    title: 'Create Custom Roadmap',
    description:
      "Collaborate with tutors to design a personalized learning path aligned with the child's goals.",
    icon: <Route className="h-6 w-6" />,
    visualIcon: <Route className="h-16 w-16 text-secondary" />,
    floatingIcon: <MapPin className="h-5 w-5 text-primary-foreground" />,
    buttonText: 'Explore Learning Paths',
    buttonHref: '/programs',
    color: 'secondary' as const,
    direction: 'right' as const,
    cardOnLeft: true, // Card on left, visual on right
  },
  {
    step: 3,
    title: 'Guided Learning',
    description:
      'The child follows their custom path with 1-on-1 tutor sessions and AI-powered support between sessions to reinforce concepts.',
    icon: <BookOpen className="h-6 w-6" />,
    visualIcon: <BookOpen className="h-16 w-16 text-accent" />,
    floatingIcon: <Star className="h-5 w-5 text-secondary-foreground" />,
    buttonText: 'Meet Our Tutors',
    buttonHref: '/tutors',
    color: 'accent' as const,
    direction: 'left' as const,
    cardOnLeft: false, // Card on right, visual on left
  },
  {
    step: 4,
    title: 'Progress Tracking',
    description:
      'Regular assessments and milestone celebrations keep the child motivated. Parents can also track progress in real-time.',
    icon: <LineChart className="h-6 w-6" />,
    visualIcon: <LineChart className="h-16 w-16 text-primary" />,
    floatingIcon: <Star className="h-5 w-5 text-accent-foreground" />,
    color: 'primary' as const,
    direction: 'right' as const,
    cardOnLeft: true, // Card on left, visual on right
  },
];
