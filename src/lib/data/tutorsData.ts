export interface Availability {
  [key: string]: boolean;
}

export interface Tutor {
  id: string;
  name: string;
  image: string;
  title: string;
  bio: string;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  subjects: string[];
  specialties?: string[];
  ageGroups: string[];
  languages: string[];
  isPopular?: boolean;
  isFeatured?: boolean;
  featuredQuote?: string;
  availability?: Availability;
  teachingPhilosophy?: string;
  isNew?: boolean;
  experience?: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications?: string[];
  contactInfo?: {
    email: string;
    phoneNumber: string;
    website: string;
  };
}

export const tutors = [
  {
    id: '1',
    name: 'Alex Johnson',
    image: '/images/placeholder.png',
    title: 'Senior Coding Instructor',
    bio: 'Alex has 8+ years of experience teaching coding to kids of all ages. With a background in game development, he makes learning to code fun and engaging through interactive projects.',
    rating: 4.9,
    reviewCount: 42,
    yearsExperience: 8,
    subjects: ['Python', 'JavaScript', 'Game Development', 'Web Design'],
    specialties: ['Game Development', 'Interactive Storytelling', 'App Design'],
    ageGroups: ['7-9', '10-12', '13-16'],
    languages: ['English', 'Spanish'],
    isPopular: true,
    isFeatured: true,
    featuredQuote:
      'I believe every child can learn to code. My goal is to make programming fun and accessible while building problem-solving skills that last a lifetime.',
    availability: {
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: false,
      Sunday: false,
    },
    teachingPhilosophy:
      "I believe in learning by doing. My sessions focus on building real projects that students are excited about, which keeps them engaged and helps concepts stick. I adapt my teaching style to each student's unique learning needs and interests.",
    experience: [
      {
        role: 'Senior Game Developer',
        company: 'Pixel Studios',
        period: '2018 - Present',
        description:
          'Developing educational games and mentoring junior developers.',
      },
      {
        role: 'Computer Science Teacher',
        company: 'Tech Academy',
        period: '2015 - 2018',
        description:
          'Taught programming fundamentals to middle and high school students.',
      },
    ],
    education: [
      {
        degree: 'M.S. Computer Science',
        institution: 'Stanford University',
        year: '2015',
      },
      {
        degree: 'B.S. Game Design',
        institution: 'DigiPen Institute of Technology',
        year: '2013',
      },
    ],
  },
  {
    id: '2',
    name: 'Maya Patel',
    image: '/images/placeholder.png',
    title: 'Web Development Instructor',
    bio: 'Maya specializes in teaching web development to beginners. Her patient approach and creative projects help students build confidence while learning HTML, CSS, and JavaScript.',
    rating: 4.8,
    reviewCount: 36,
    yearsExperience: 5,
    subjects: ['HTML/CSS', 'JavaScript', 'Web Design', 'UI/UX Basics'],
    ageGroups: ['10-12', '13-16'],
    isNew: true,
    languages: ['English', 'Hindi'],
  },
  {
    id: '3',
    name: 'David Kim',
    image: '/images/placeholder.png',
    title: 'Robotics & Python Specialist',
    bio: 'David combines Python programming with robotics to create engaging hands-on learning experiences. His background in mechanical engineering brings a unique perspective to coding education.',
    rating: 4.7,
    reviewCount: 29,
    yearsExperience: 6,
    subjects: ['Python', 'Robotics', 'Arduino', 'Physical Computing'],
    ageGroups: ['10-12', '13-16'],
    isPopular: true,
    languages: ['English', 'Korean'],
  },
  {
    id: '4',
    name: 'Sarah Williams',
    image: '/images/placeholder.png',
    title: 'Creative Coding Instructor',
    bio: 'Sarah focuses on the artistic side of coding, teaching students to create animations, interactive art, and creative coding projects using p5.js and Processing.',
    rating: 4.9,
    reviewCount: 31,
    yearsExperience: 7,
    subjects: ['Creative Coding', 'p5.js', 'Processing', 'Animation'],
    ageGroups: ['7-9', '10-12', '13-16'],
    languages: ['English', 'French'],
  },
  {
    id: '5',
    name: 'Michael Rodriguez',
    image: '/images/placeholder.png',
    title: 'App Development Instructor',
    bio: 'Michael teaches mobile app development using React Native and Flutter. His project-based approach helps students create their own functional apps from concept to completion.',
    rating: 4.6,
    reviewCount: 24,
    yearsExperience: 4,
    subjects: ['App Development', 'React Native', 'Flutter', 'UI Design'],
    ageGroups: ['13-16'],
    isPopular: true,
    languages: ['English', 'Spanish'],
  },
  {
    id: '6',
    name: 'Emma Chen',
    image: '/images/placeholder.png',
    title: 'Scratch & Block Coding Specialist',
    bio: 'Emma specializes in teaching younger children the fundamentals of programming using Scratch and block-based coding. Her energetic teaching style keeps kids engaged and excited about learning.',
    rating: 4.9,
    reviewCount: 45,
    yearsExperience: 6,
    subjects: ['Scratch', 'Block Coding', 'Game Design', 'Animation'],
    ageGroups: ['5-6', '7-9', '10-12'],
    isFeatured: true,
    languages: ['English', 'Mandarin'],
  },
  {
    id: '7',
    name: 'James Wilson',
    image: '/images/placeholder.png',
    title: 'Data Science Instructor',
    bio: 'James introduces older students to the world of data science and machine learning using Python. His real-world examples make complex concepts accessible and interesting.',
    rating: 4.7,
    reviewCount: 19,
    yearsExperience: 5,
    subjects: [
      'Python',
      'Data Science',
      'Machine Learning Basics',
      'Data Visualization',
    ],
    ageGroups: ['13-16'],
    isNew: true,
    languages: ['English'],
  },
  {
    id: '8',
    name: 'Olivia Taylor',
    image: '/images/placeholder.png',
    title: 'Minecraft Modding Instructor',
    bio: "Olivia uses Minecraft modding to teach Java programming concepts. Her approach leverages kids' love of the game to introduce them to coding in an engaging way.",
    rating: 4.8,
    reviewCount: 33,
    yearsExperience: 4,
    subjects: [
      'Java',
      'Minecraft Modding',
      'Game Mechanics',
      '3D Design Basics',
    ],
    ageGroups: ['10-12', '13-16'],
    isPopular: true,
    languages: ['English'],
  },
];
