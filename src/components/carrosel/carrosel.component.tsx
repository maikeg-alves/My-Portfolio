import React from 'react';
import { Swiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { ContainerProps } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Carrosel({ children }: ContainerProps) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="aqui"></div>
        {children}
      </Swiper>
    </>
  );
}
