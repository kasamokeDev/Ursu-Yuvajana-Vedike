/* eslint-disable @next/next/no-img-element */
import { Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import CarouselCaption from './CarouselCaption';

function HeroCarousel() {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <Carousel fade slide style={{ width: '100vw' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carouselImage1.jpg"
          alt="First slide"
          style={style.carouselImage}
        />
        <Carousel.Caption>
          <CarouselCaption caption="Slide One" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carouselImage2.jpg"
          alt="Second slide"
          style={style.carouselImage}
        />
        <Carousel.Caption>
          <CarouselCaption caption="Slide 2" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carouselImage3.jpg"
          alt="Third slide"
          style={style.carouselImage}
        />
        <Carousel.Caption>
          <CarouselCaption caption="Slide 3" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
