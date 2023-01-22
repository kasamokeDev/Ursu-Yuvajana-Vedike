import React from 'react';
import { Container, Typography } from '@mui/material';

function UserListContainer({ title }) {
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
      <Typography variant="h4">
        <strong>{title}</strong>
      </Typography>
      <ul class="list-group list-group-light">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">John Doe</div>
            <div class="text-muted">john.doe@gmail.com</div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">Alex Ray</div>
            <div class="text-muted">alex.ray@gmail.com</div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">Kate Hunington</div>
            <div class="text-muted">kate.hunington@gmail.com</div>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default UserListContainer;
