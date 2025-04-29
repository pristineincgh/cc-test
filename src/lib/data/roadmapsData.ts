export interface Roadmap {
  id: string;
  title: string;
  description: string;
  is_template: boolean;
  ageGroup?: string; // Only for templates
  topics?: string[]; // Only for templates
  original_template_id?: string; // Only for customized roadmaps
  student_id?: string; // Only if tied to a specific child
  created_by: string;
}

export interface LearningPath {
  id: string;
  roadmap_id: string;
  title: string;
  description: string;
  order_index: number;
  created_by: string;
}

export interface Course {
  id: string;
  learning_path_id: string;
  title: string;
  description: string;
  delivery_mode: string;
  max_session_duration_mins: number;
  order_index: number;
}

export interface Topic {
  id: string;
  course_id: string;
  title: string;
  description: string;
  estimated_duration_sessions: number;
  order_index: number;
}

export const mockRoadmaps: Roadmap[] = [
  {
    id: 'rd-1',
    title: 'Full Stack Developer Track',
    description:
      'Comprehensive path to becoming a full stack developer with a focus on modern web technologies. Students will learn frontend, backend, and database skills through hands-on projects.',
    is_template: true,
    ageGroup: '10-12',
    topics: ['Web Development', 'Programming', 'Databases'],
    created_by: 'CodeKids Team',
  },
  {
    id: 'rd-2',
    title: 'Game Development Journey',
    description:
      'Learn to create exciting games using popular game engines and programming concepts. This roadmap covers game design principles, coding mechanics, and publishing your creations.',
    is_template: true,
    ageGroup: '13-16',
    topics: ['Game Design', 'Programming', '3D Modeling'],
    created_by: 'CodeKids Team',
  },
  {
    id: 'rd-3',
    title: 'Data Science Explorer',
    description:
      'Discover the world of data science through interactive lessons on statistics, data visualization, and machine learning basics adapted for young learners.',
    is_template: true,
    ageGroup: '10-12',
    topics: ['Data Science', 'Statistics', 'Machine Learning'],
    created_by: 'CodeKids Team',
  },
  {
    id: 'rd-4',
    title: 'Mobile App Creator',
    description:
      'Design and build mobile applications for iOS and Android platforms. Learn UI/UX principles and how to publish your apps to app stores.',
    is_template: true,
    ageGroup: '10-12',
    topics: ['Mobile Development', 'UI/UX Design', 'Programming'],
    created_by: 'CodeKids Team',
  },
  {
    id: 'rd-5',
    title: 'Robotics & IoT Fundamentals',
    description:
      'Explore the exciting world of robotics and Internet of Things (IoT) through hands-on projects with microcontrollers and sensors.',
    is_template: true,
    ageGroup: '10-12',
    topics: ['Robotics', 'IoT', 'Electronics'],
    created_by: 'CodeKids Team',
  },
  {
    id: 'rd-6',
    title: "Alex's Custom Web Development Path",
    description:
      'Customized learning path for Alex focusing on web development with extra emphasis on creative design and accessibility.',
    is_template: false,
    original_template_id: 'rd-1',
    student_id: 'st-1',
    created_by: 'Parent User',
  },
];

export const mockLearningPaths: LearningPath[] = [
  {
    id: 'lp-1',
    roadmap_id: 'rd-1',
    title: 'Frontend Fundamentals',
    description:
      'Master HTML, CSS, and JavaScript to build interactive web interfaces',
    order_index: 1,
    created_by: 'CodeKids Team',
  },
  {
    id: 'lp-2',
    roadmap_id: 'rd-1',
    title: 'Backend Development',
    description: 'Learn server-side programming and API development',
    order_index: 2,
    created_by: 'CodeKids Team',
  },
  {
    id: 'lp-3',
    roadmap_id: 'rd-1',
    title: 'Database & Deployment',
    description:
      'Work with databases and learn how to deploy full applications',
    order_index: 3,
    created_by: 'CodeKids Team',
  },
  {
    id: 'lp-4',
    roadmap_id: 'rd-2',
    title: 'Game Design Basics',
    description: 'Learn fundamental concepts of game design and mechanics',
    order_index: 1,
    created_by: 'CodeKids Team',
  },
  {
    id: 'lp-5',
    roadmap_id: 'rd-6',
    title: 'Frontend Fundamentals (Customized)',
    description:
      'Adapted HTML, CSS, and JavaScript curriculum with focus on creative design',
    order_index: 1,
    created_by: 'Parent User',
  },
];

export const mockCourses: Course[] = [
  {
    id: 'cr-1',
    learning_path_id: 'lp-1',
    title: 'HTML & CSS Basics',
    description: 'Introduction to web page structure and styling',
    delivery_mode: 'live session',
    max_session_duration_mins: 60,
    order_index: 1,
  },
  {
    id: 'cr-2',
    learning_path_id: 'lp-1',
    title: 'JavaScript Fundamentals',
    description: 'Core concepts of JavaScript programming language',
    delivery_mode: 'live session',
    max_session_duration_mins: 60,
    order_index: 2,
  },
  {
    id: 'cr-3',
    learning_path_id: 'lp-1',
    title: 'Building Interactive UIs',
    description: 'Create dynamic user interfaces with JavaScript',
    delivery_mode: 'self-paced',
    max_session_duration_mins: 45,
    order_index: 3,
  },
  {
    id: 'cr-4',
    learning_path_id: 'lp-2',
    title: 'Node.js Essentials',
    description: 'Server-side JavaScript with Node.js',
    delivery_mode: 'live session',
    max_session_duration_mins: 60,
    order_index: 1,
  },
  {
    id: 'cr-5',
    learning_path_id: 'lp-5',
    title: 'Creative HTML & CSS',
    description: 'Web design with a focus on creativity and accessibility',
    delivery_mode: 'live session',
    max_session_duration_mins: 45,
    order_index: 1,
  },
];

export const mockTopics: Topic[] = [
  {
    id: 'tp-1',
    course_id: 'cr-1',
    title: 'HTML Document Structure',
    description: 'Understanding the basic structure of HTML documents',
    estimated_duration_sessions: 1,
    order_index: 1,
  },
  {
    id: 'tp-2',
    course_id: 'cr-1',
    title: 'CSS Selectors & Properties',
    description: 'How to select HTML elements and apply styles',
    estimated_duration_sessions: 2,
    order_index: 2,
  },
  {
    id: 'tp-3',
    course_id: 'cr-1',
    title: 'Responsive Design',
    description: 'Making websites work on different screen sizes',
    estimated_duration_sessions: 2,
    order_index: 3,
  },
  {
    id: 'tp-4',
    course_id: 'cr-2',
    title: 'Variables & Data Types',
    description: 'Understanding JavaScript variables and basic data types',
    estimated_duration_sessions: 1,
    order_index: 1,
  },
  {
    id: 'tp-5',
    course_id: 'cr-2',
    title: 'Functions & Control Flow',
    description: 'Creating reusable code blocks and controlling program flow',
    estimated_duration_sessions: 2,
    order_index: 2,
  },
  {
    id: 'tp-6',
    course_id: 'cr-5',
    title: 'Creative CSS Techniques',
    description: 'Advanced styling techniques for engaging web designs',
    estimated_duration_sessions: 2,
    order_index: 1,
  },
];
