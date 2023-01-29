import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import MemberApprovalModal from './MemberApprovalModal';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

function MemberApprovalRow({ user, gender, age }) {
  const theme = useTheme();
  const style = Styles(theme);
  const [openDetail, setOpenDetail] = React.useState(false);
  const obj = {
    phoneNumber: 8620959804,
    email: 'nirajpandey034@gmail.com',
    curr_locality: 'white field',
    curr_city: 'bangalore',
    curr_state: 'karnataka',
    curr_pincode: '867512',
    curr_country: 'india',
    perm_locality: 'athpur',
    perm_city: 'North 24 Parganas',
    perm_pincode: '743125',
    perm_state: 'West Bengal',
    companyName: 'NTT',
    occupation: 'Serviceman',
    school: 'gnti',
    education: ' b tech',
    maritalStatus: 'Single',
    fatherName: 'HK Pandey',
    gender: 'Male',
    bloodGroup: 'B+',
    dob: '1997-04-15',
    fullName: 'Niraj Pandey',
    employed: true,
    sameAddress: false,
    isNRI: false,
  };
  return (
    <>
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
          <Button
            sx={style.button}
            endIcon={<VisibilityIcon />}
            onClick={() => {
              setOpenDetail(true);
            }}
          >
            View Details
          </Button>
          <Button sx={style.button} endIcon={<CheckCircleOutlineIcon />}>
            Approve
          </Button>
        </Stack>
      </Box>
      <MemberApprovalModal
        openModal={openDetail}
        setOpenModal={setOpenDetail}
        obj={obj}
      />
    </>
  );
}

export default MemberApprovalRow;
