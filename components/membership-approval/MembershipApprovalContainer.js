import React from 'react';
import { Container, Typography, useMediaQuery } from '@mui/material';
import Title from '../title/Title';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import MemberApprovalRow from './MemberApprovalRow';

function MembershipApprovalContainer() {
  const theme = useTheme();
  const style = Styles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const data = [
    {
      user: 'Niraj Pandey',
      gender: 'M',
      age: 25,
    },
    {
      user: 'John Smith',
      gender: 'M',
      age: 27,
    },
    {
      user: 'Alex Nancy',
      gender: 'F',
      age: 30,
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
      {isMobile ? (
        <>
          {data.map((item, index) => (
            <MemberApprovalRow
              key={index}
              user={item.user}
              gender={item.gender}
              age={item.age}
            />
          ))}
        </>
      ) : (
        <Container
          maxWidth="md"
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          {data.map((item, index) => (
            <MemberApprovalRow
              key={index}
              user={item.user}
              gender={item.gender}
              age={item.age}
            />
          ))}
        </Container>
      )}
    </Container>
  );
}

export default MembershipApprovalContainer;
