import React from 'react';
import { Container, Typography } from '@mui/material';
import Title from '../title/Title';

import MemberApprovalRow from './MemberApprovalRow';

function MembershipApprovalContainer() {
  const data = [
    {
      user: 'Niraj Pandey',
      gender: 'M',
      age: 25,
    },
    {
      user: 'Niraj Pandey',
      gender: 'M',
      age: 25,
    },
    {
      user: 'Niraj Pandey',
      gender: 'M',
      age: 25,
    },
  ];
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
      <Title title="Membership Approval Dashboard" />
      {data.map((item, index) => (
        <MemberApprovalRow
          key={index}
          user={item.user}
          gender={item.gender}
          age={item.age}
        />
      ))}
    </Container>
  );
}

export default MembershipApprovalContainer;
