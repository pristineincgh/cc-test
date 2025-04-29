export interface VideoStory {
  id: number;
  title: string;
  poster: string;
  src: string;
  alt: string;
}

export const videoStories: VideoStory[] = [
  {
    id: 1,
    title: 'Video Story 1',
    poster: '/videos/vid-1-poster.png',
    src: '/videos/vid-1.mp4',
    alt: '',
  },
  {
    id: 2,
    title: 'Video Story 2',
    poster: '/videos/vid-2-poster.png',
    src: '/videos/vid-2.mp4',
    alt: '',
  },
  {
    id: 3,
    title: 'Video Story 3',
    poster: '/videos/vid-1-poster.png',
    src: '/videos/vid-1.mp4',
    alt: '',
  },
  {
    id: 4,
    title: 'Video Story 4',
    poster: '/videos/vid-2-poster.png',
    src: '/videos/vid-2.mp4',
    alt: '',
  },
];
