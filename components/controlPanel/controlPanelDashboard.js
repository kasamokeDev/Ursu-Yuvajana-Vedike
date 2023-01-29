/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container, Button } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function ControlPanelDashboard() {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 10,
        mt: 2,
      }}
    >
      <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        <div class="col">
          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              class="card-img-top"
              alt="Request Approval"
            />
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title text-center">
                <strong>Member Request Approval</strong>
              </h5>
              <p class="card-text text-center">
                Approve pending membership requests
              </p>
              <Button
                sx={style.button}
                onClick={() => {
                  window.open('/controlPanel/membershipApproval', '_self');
                }}
              >
                Enter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ControlPanelDashboard;
