import React from 'react';
import { Box } from '@mui/material';

function NoticeFocused({ notice }) {
  return (
    <Box>
      <div class="card text-center">
        <div class="card-header">{notice.title}</div>
        <div class="card-body">
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <p class="card-text">
            {notice.body}
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
        <div class="card-footer text-muted">Posted on: {notice.postedOn}</div>
      </div>
    </Box>
  );
}

export default NoticeFocused;
