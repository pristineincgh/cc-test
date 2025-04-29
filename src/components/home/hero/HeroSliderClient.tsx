'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';
import HeroFirstSlide from './FirstSlideClient';
import HeroSecondSlide from './SecondSlideClient';

// Animation variants for text sliding in from left
export const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.2,
      ease: 'easeOut',
    },
  }),
};

// Animation variants for image fading in
export const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};

// Animation variants for floating effect
export const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  },
};

const HeroSlider = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  return (
    <section>
      <Swiper
        effect={'fade'}
        autoHeight={true}
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Autoplay, EffectFade, Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !mx-2',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="hero-slider w-full h-full"
      >
        <SwiperSlide>
          <HeroFirstSlide isActive={activeSlide === 0} />
        </SwiperSlide>
        <SwiperSlide className="">
          <HeroSecondSlide isActive={activeSlide === 1} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default HeroSlider;
