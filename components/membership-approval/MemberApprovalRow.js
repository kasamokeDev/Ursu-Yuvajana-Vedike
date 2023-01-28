import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function MemberApprovalRow({ user, gender, age }) {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <Box sx={style.rowContainer}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, md: 2 }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography>
          <strong>{user}</strong>
        </Typography>
        <Typography>{gender}</Typography>
        <Typography>{age} years</Typography>
        <Button sx={style.button}>View Details</Button>
        <Button sx={style.button}>Approve</Button>
      </Stack>
    </Box>
  );
}

export default MemberApprovalRow;
