import React from 'react';
import { Box } from '@mui/material';

function NoticeFocused() {
  return (
    <Box>
      <div class="card text-center">
        <div class="card-header">Notice</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
        <div class="card-footer text-muted">Posted on: 22-01-2023</div>
      </div>
    </Box>
  );
}

export default NoticeFocused;
