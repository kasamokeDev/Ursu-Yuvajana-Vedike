import React from 'react';
import { Container, Typography } from '@mui/material';
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function MessageContainer() {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{
          textDecoration: 'underline',
          color: 'rgb(69, 69, 181)',
          fontFamily: 'arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Messages from our past Directors
      </Typography>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay
        onSlideChange={() => {}}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={() => {}}
        className="mt-5"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default MessageContainer;
