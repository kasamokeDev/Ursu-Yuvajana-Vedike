import { Typography, Container } from '@mui/material';
import React from 'react';
import Card from './Card';

function CardContainer() {
  const data = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Goal 1',
      description: 'Desc1',
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Goal 2',
      description: 'desc2',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Goal 3',
      description: 'desc3',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Goal 4',
      description: 'desc4',
    },
  ];
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textDecoration: 'underline',
          color: 'rgb(69, 69, 181)',
          fontFamily: 'arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Our Goal
      </Typography>
      <div
        className="d-flex flex-column d-sm-flex flex-sm-row bd-highlight mb-3 mt-3 justify-content-evenly align-items-center"
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
