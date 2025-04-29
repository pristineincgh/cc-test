export interface ProgramTutor {
  ageRange: string;
  skillLevel: string;
  image: string;
}

export const programTutors: ProgramTutor[] = [
  {
    ageRange: 'Ages 5-8',
    skillLevel: 'Beginner Friendly',
    image: '/images/kids-learning.png',
  },
  {
    ageRange: 'Ages 9-12',
    skillLevel: 'Intermediate',
    image: '/images/kids-learning-1.png',
  },
  {
    ageRange: 'Ages 13+',
    skillLevel: 'Advanced',
    image: '/images/kids-learning-2.png',
  },
];
