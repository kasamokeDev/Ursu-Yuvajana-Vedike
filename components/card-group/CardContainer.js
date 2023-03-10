import { Typography, Container } from '@mui/material';
import React from 'react';
import Card from './Card';
import Title from '../title/Title';

function CardContainer({ title, data }) {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Title title={title} />
      <div
        className="d-flex flex-column d-sm-flex flex-sm-row flex-wrap bd-highlight mb-3 mt-3 justify-content-evenly align-items-center"
        style={{ width: '100%' }}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </Container>
  );
}

export default CardContainer;
