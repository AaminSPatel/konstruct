'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const heroImages = [
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

export default function SwiperCube() {
  return (
    <div className="w-full flex justify-center relative z-30">

      <div className="
        w-[240px]
        sm:w-[300px]
        md:w-[360px]
        lg:w-[420px]
        xl:w-[460px]
        aspect-square

      ">

        <Swiper
          effect="cube"
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 10,
            shadowScale: 0.94,
          }}
         /*  pagination={{ clickable: true }} */
          modules={[EffectCube, Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="h-full w-full  scale-110"
        >

          {heroImages.map((src, index) => (
            <SwiperSlide key={index}>

              <div className="
                w-full h-full
                overflow-hidden
                border-[6px]
                border-zinc-800/80
                shadow-2xl
               
                
              ">

                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  );
}
