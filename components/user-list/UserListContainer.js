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
      <div className="row">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div className="col-xl-4 col-lg-6 mb-4" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.title}</p>
                        <p className="text-muted mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/*
      <ul className="list-group list-group-light">
        
         <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">John Doe</div>
            <div className="text-muted">john.doe@gmail.com</div>
          </div>
        </li> */}
      {/* <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">Alex Ray</div>
            <div className="text-muted">alex.ray@gmail.com</div>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">Kate Hunington</div>
            <div className="text-muted">kate.hunington@gmail.com</div>
          </div>
        </li> 
      </ul> */}
    </Container>
  );
}

export default UserListContainer;
