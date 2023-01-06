import React from 'react';
import Card from './Card';

function CardContainer() {
  const data = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Founder1',
      description: 'desc1',
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Founder2',
      description: 'desc2',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png',
      title: 'Founder3',
      description: 'desc3',
    },
  ];
  return (
    <div
      class="d-flex flex-column d-sm-flex flex-sm-row bd-highlight mb-3 mt-3 justify-content-evenly align-items-center"
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
  );
}

export default CardContainer;
