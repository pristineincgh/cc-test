'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { Badge } from '../ui/badge';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import AnimateInView from './AnimatedViewClient';
import { videoStories } from '@/lib/data/videoStoriesData';

const VideoStoriesCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeVideoPlaying, setActiveVideoPlaying] = useState(false);

  const handlePlay = () => {
    setActiveVideoPlaying(true);
    if (swiperRef.current?.autoplay?.running) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handlePause = () => {
    setActiveVideoPlaying(false);
    if (!swiperRef.current?.autoplay?.running) {
      swiperRef.current?.autoplay.start();
    }
  };

  const handleSlideChange = () => {
    // If a video was playing in the previous slide, pause it
    setActiveVideoPlaying(false);
    // Restart autoplay if it was stopped
    if (!swiperRef.current?.autoplay?.running && !activeVideoPlaying) {
      swiperRef.current?.autoplay.start();
    }
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 checkers-bg -z-10" />
      <div className="container px-4 md:px-6">
        <AnimateInView>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <Badge className="mb-4 dark:text-foreground">
              Real Learning Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Curiosity Cove in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              See how our students are applying their skills to create amazing
              projects.
            </p>
          </div>
        </AnimateInView>

        <Swiper
          className="!pt-5 !pb-14"
          modules={[Autoplay, EffectCoverflow, Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{ clickable: true }}
          effect={'coverflow'}
          grabCursor
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {videoStories.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <MediaPlayer
                  title={video.title}
                  playsInline
                  crossOrigin
                  src={video.src}
                  className="w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
                  onPlay={handlePlay}
                  onPause={handlePause}
                >
                  <MediaProvider>
                    <Poster
                      src={video.poster}
                      alt={video.alt}
                      className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
                    />
                  </MediaProvider>
                  <DefaultVideoLayout
                    icons={defaultLayoutIcons}
                    colorScheme="system"
                  />
                </MediaPlayer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ... rest of your component remains the same ... */}
      </div>
    </section>
  );
};
export default VideoStoriesCarousel;
