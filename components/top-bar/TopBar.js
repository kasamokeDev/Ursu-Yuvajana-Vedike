import React from 'react';
import { Link } from '@mui/material';

function TopBar() {
  return (
    <div className="d-flex w-100 justify-content-between align-items-center">
      <div className="p-2 text-decoration-underline" role="button">
        <Link href="mailto:kasamoke100@gmail.com">UYV@gmail.com</Link>
      </div>

      <div className="p-2 text-decoration-underline" role="button">
        <Link
          href="#"
          onClick={(e) => {
            window.scrollTo(0, document.body.scrollHeight);
            e.preventDefault();
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
