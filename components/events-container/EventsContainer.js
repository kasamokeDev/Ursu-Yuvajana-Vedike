import React from 'react';
import { Container } from '@mui/material';

import Title from '../title/Title';

function EventsContainer({title}) {
  return (
    <Container maxWidth="md">
      <Title title={title} />
    </Container>
  );
}

export default EventsContainer;
