/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function SamplePhotoGallery() {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', textDecoration: 'underline' }}
      >
        Photo Gallery
      </Typography>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay
        onSlideChange={() => {}}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={() => {}}
        className="mt-5"
      >
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="/assets/images/carouselImage1.jpg"
            alt="First slide"
            style={style.carouselImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="/assets/images/carouselImage2.jpg"
            alt="First slide"
            style={style.carouselImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="/assets/images/carouselImage3.jpg"
            alt="First slide"
            style={style.carouselImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="/assets/images/carouselImage1.jpg"
            alt="First slide"
            style={style.carouselImage}
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-5 mb-5">
        <Button sx={style.button}>Show All</Button>
      </div>
    </Container>
  );
}

export default SamplePhotoGallery;
