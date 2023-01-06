/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

function HeroCarousel() {
  return (
    <Carousel fade slide style={{ width: '100vw' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carouselImage1.jpg"
          alt="First slide"
          style={{ maxWidth: '100%', height: '15rem', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carouselImage2.jpg"
          alt="Second slide"
          style={{ maxWidth: '100%', height: '15rem', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carouselImage3.jpg"
          alt="Third slide"
          style={{ maxWidth: '100%', height: '15rem', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
