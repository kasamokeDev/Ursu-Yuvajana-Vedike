import React from 'react';
import { Stack, Typography, Container, Divider } from '@mui/material';

function ModalDataRow({ property, value }) {
  return (
    <Container maxWidth="md">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ marginRight: { xs: 'unset', sm: 'auto' } }}>
          <strong>{property}</strong>
        </Typography>
        <Typography sx={{ marginLeft: { xs: 'unset', sm: 'auto' } }}>
          {value}
        </Typography>
      </Stack>
      <Divider sx={{ width: '100%' }} />
    </Container>
  );
}

export default ModalDataRow;
