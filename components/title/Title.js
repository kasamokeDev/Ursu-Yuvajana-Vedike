import React from 'react';
import { Typography } from '@mui/material';

function Title({ title = '', description = '' }) {
  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        <strong>{title}</strong>
      </Typography>
      {description !== '' && (
        <Typography variant="body" style={{ textAlign: 'center' }}>
          <strong>{description}</strong>
        </Typography>
      )}
    </>
  );
}

export default Title;
