import React from 'react';
import { Container, Typography } from '@mui/material';
import Title from '../title/Title';

function UserListContainer({ title, data = [] }) {
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
      <Title title={title}></Title>
      <div class="row">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div class="col-xl-4 col-lg-6 mb-4" key={item.id}>
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        <p class="fw-bold mb-1">{item.title}</p>
                        <p class="text-muted mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/*
      <ul class="list-group list-group-light">
        
         <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">John Doe</div>
            <div class="text-muted">john.doe@gmail.com</div>
          </div>
        </li> */}
      {/* <li class="list-group-item d-flex justify-content-between align-items-center">
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
      </ul> */}
    </Container>
  );
}

export default UserListContainer;
