import React from 'react';
import { Box } from '@mui/material';

function NoticeFocused({ notice }) {
  return (
    <Box>
      <div className="card text-center">
        <div className="card-header">{notice.title}</div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">
            {notice.body}
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
        <div className="card-footer text-muted">Posted on: {notice.postedOn}</div>
      </div>
    </Box>
  );
}

export default NoticeFocused;
