'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectCube, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projectImages = [
  '/st1.jpg',
  '/st2.jpg',
  '/st3.jpg',
  '/st4.jpg',
  '/st5.jpg',
  '/st6.jpg',
  '/st7.jpg',
  '/st8.jpg',
  '/st9.jpg',
];

export default function SwiperProjects() {
  return (
    <div className="w-full h-[500px] lg:h-[500px]">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiperCoverflow h-full"
      >
        {projectImages.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide-cover">
            <img src={src} alt={`Project ${index + 1}`} className="swiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
