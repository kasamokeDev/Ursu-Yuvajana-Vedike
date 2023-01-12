import React from 'react';
import { Container } from '@mui/material';

function TopBar() {
  return (
    <div class="d-flex w-100 justify-content-between">
      <div class="p-2">
        Email: <strong>abc@gmail.com</strong> | Call :{' '}
        <strong>08-01010101</strong>
      </div>
      <div class="d-flex w-50 justify-content-end">
        <div class="p-2 text-decoration-underline" role="button">Know More</div>
        <div class="p-2 text-decoration-underline" role="button">Contact Us</div>
      </div>
    </div>
  );
}

export default TopBar;
