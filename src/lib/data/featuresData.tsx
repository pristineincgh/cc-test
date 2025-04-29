import { Bot, Database, Laptop, LineChart, Route, Users } from 'lucide-react';

export const features = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Live Interactive Lessons',
    description:
      'Engaging live sessions with expert tutors who make learning fun and interactive.',
    delay: 0.1,
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'AI-Powered Tutoring',
    description:
      "Personalized learning with our AI tutor that adapts to each child's pace and style.",
    delay: 0.2,
  },
  {
    icon: <Route className="h-10 w-10 text-primary" />,
    title: 'Customized Roadmaps',
    description:
      'Create personalized learning paths with custom milestones, resources, and goals for each kid.',
    delay: 0.3,
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'Progress Tracking',
    description:
      'Real-time tracking for parents and kids to monitor learning progress and achievements.',
    delay: 0.4,
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'Project-Based Learning',
    description:
      'Build real projects that teach practical skills while fostering creativity and problem-solving.',
    delay: 0.5,
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Parent Involvement',
    description:
      "Tools for parents to stay involved, monitor progress, and support their child's learning journey.",
    delay: 0.6,
  },
];

export const topics = [
  {
    title: 'Web Development',
    description:
      'Learn to build stunning websites and web applications using HTML, CSS, and JavaScript.',
    image: '/images/gif/web-developer.gif',
  },
  {
    title: 'Mobile App Development',
    description:
      'Create mobile apps for iOS and Android using Flutter, React Native, and Swift.',
    image: '/images/gif/mobile-dev.gif',
  },
  {
    title: 'UI/UX Design',
    description:
      'Design stunning user interfaces and experiences using Figma and Adobe XD.',
    image: '/images/gif/ui-ux.gif',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Dive into the world of AI and machine learning with Python and TensorFlow.',
    image: '/images/gif/ai.gif',
  },
  {
    title: 'Digital Marketing',
    description:
      'Learn the art of digital marketing, SEO, and social media strategies.',
    image: '/images/gif/digital-marketing.gif',
  },
  {
    title: 'Programming Fundamentals',
    description:
      'Master the fundamentals of programming using Python, JavaScript, C++ etc.',
    image: '/images/gif/algorithm.gif',
  },
];
