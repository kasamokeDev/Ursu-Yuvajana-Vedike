import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Error from '../formError/Error';
import { useForm } from 'react-hook-form';
import data from '../../staticData/data';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Schema/UserSchema';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import { displayRazorpay } from '../../util/Payment';

import MembershipCheckModal from './MembershipCheckModal';

function RegistrationForm() {
  const theme = useTheme();
  const style = Styles(theme);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    setOpenModal(true);
    setLoading(true);
  };
  const continuePayment = () => {
    const data = getValues();
    const result = displayRazorpay(
      `${data.name.firstName} ${data.name.middleName} ${data.name.lastName}`,
      data.email,
      data.phoneNumber,
      data.address.addressLine1
    );
    result.then((res)=>{
      console.log(res);
    })
    .catch((err)=>{console.log(err)})
    setLoading(false);
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 10,
      }}
    >
      <Typography
        variant="h4"
        style={{
          textDecoration: 'underline',
          color: 'rgb(69, 69, 181)',
          fontFamily: 'arial, sans-serif',
        }}
      >
        Become a member
      </Typography>
      <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2} sx={style.formContainer}>
          <Grid xs={12} item>
            <Typography
              variant="h6"
              style={{
                textDecoration: 'underline',
                color: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Personal Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="First Name"
              type="text"
              {...register('name.firstName')}
              error={Boolean(errors.name?.firstName)}
            ></TextField>
            <Error errorMessage={errors.name?.firstName?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Middle Name"
              type="text"
              {...register('name.middleName')}
              error={Boolean(errors.name?.middleName)}
            ></TextField>
            <Error errorMessage={errors.name?.middleName?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Last Name"
              type="text"
              {...register('name.lastName')}
              error={Boolean(errors.name?.lastName)}
            ></TextField>
            <Error errorMessage={errors.name?.lastName?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <TextField
              type="date"
              {...register('dob')}
              error={Boolean(errors.dob)}
              sx={{ width: { xs: '100%', sm: '82%' } }}
            ></TextField>
            <Error errorMessage={errors.dob?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="blood-group-select-label">Blood Group</InputLabel>
              <Select
                labelId="blood-group-select-label"
                id="blood-group-select"
                label="Blood Group"
                {...register('bloodGroup')}
                error={Boolean(errors.bloodGroup)}
              >
                {data.bloodGroups.map((bg) => (
                  <MenuItem value={bg} key={bg}>
                    {bg}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Error errorMessage={errors.bloodGroup?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="Gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                label="Gender"
                {...register('gender')}
                error={Boolean(errors.gender)}
              >
                {data.genders.map((gender) => (
                  <MenuItem value={gender} key={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Error errorMessage={errors.gender?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Aadhar Number"
              type="number"
              {...register('aadharNumber')}
              error={Boolean(errors.aadharNumber)}
            ></TextField>
            <Error errorMessage={errors.aadharNumber?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="PAN"
              type="text"
              {...register('panNumber')}
              error={Boolean(errors.panNumber)}
            ></TextField>
            <Error errorMessage={errors.panNumber?.message} />
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h6"
              style={{
                textDecoration: 'underline',
                color: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Relationship Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Father's Name"
              type="text"
              {...register('fatherName')}
              error={Boolean(errors.fatherName)}
            ></TextField>
            <Error errorMessage={errors.fatherName?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="marital-status-select-label">
                Marital Status
              </InputLabel>
              <Select
                labelId="marital-status-select-label"
                id="marital-status-select"
                label="Marital Status"
                {...register('maritalStatus')}
                error={Boolean(errors.maritalStatus)}
              >
                {data.maritalStatus.map((ms) => (
                  <MenuItem value={ms} key={ms}>
                    {ms}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Error errorMessage={errors.maritalStatus?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Spouse Name(If Applicable)"
              type="text"
              {...register('spouseName')}
              error={Boolean(errors.spouseName)}
            ></TextField>
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h6"
              style={{
                textDecoration: 'underline',
                color: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Academic Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Highest Qualification"
              type="text"
              {...register('qualification')}
              error={Boolean(errors.qualification)}
            ></TextField>
            <Error errorMessage={errors.qualification?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="School/University Name"
              type="text"
              {...register('academicInstitution')}
              error={Boolean(errors.academicInstitution)}
            ></TextField>
            <Error errorMessage={errors.academicInstitution?.message} />
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h6"
              style={{
                textDecoration: 'underline',
                color: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Professional Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Occupation"
              type="text"
              {...register('occupation')}
              error={Boolean(errors.occupation)}
            ></TextField>
            <Error errorMessage={errors.occupation?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Company Name"
              type="text"
              {...register('companyName')}
              error={Boolean(errors.companyName)}
            ></TextField>
            <Error errorMessage={errors.companyName?.message} />
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h6"
              style={{
                textDecoration: 'underline',
                color: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Geo Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Full Address"
              type="text"
              {...register('address.addressLine1')}
              error={Boolean(errors.address?.addressLine1)}
            ></TextField>
            <Error errorMessage={errors.address?.addressLine1?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="City"
              type="text"
              {...register('address.city')}
              error={Boolean(errors.address?.city)}
            ></TextField>
            <Error errorMessage={errors.address?.city?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="address-state-select-label">State</InputLabel>
              <Select
                labelId="address-state-select-label"
                id="address-state-select"
                label="State"
                {...register('address.state')}
                error={Boolean(errors.address?.state)}
              >
                {data.states.map((state) => (
                  <MenuItem value={state} key={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Error errorMessage={errors.address?.state?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Pin Code"
              type="text"
              {...register('address.pincode')}
              error={Boolean(errors.address?.pincode)}
            ></TextField>
            <Error errorMessage={errors.address?.pincode?.message} />
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h6"
              style={{
                textDecoration: 'underline',
                color: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Contact Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Phone Number"
              type="text"
              {...register('phoneNumber')}
              error={Boolean(errors.phoneNumber)}
            ></TextField>
            <Error errorMessage={errors.phoneNumber?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Alternate Phone Number"
              type="text"
              {...register('altPhoneNumber')}
              error={Boolean(errors.altPhoneNumber)}
            ></TextField>
            <Error errorMessage={errors.altPhoneNumber?.message} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Email Id"
              type="email"
              {...register('email')}
              error={Boolean(errors.email)}
            ></TextField>
            <Error errorMessage={errors.email?.message} />
          </Grid>
          <Grid
            xs={12}
            item
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <LoadingButton
              variant="contained"
              type="submit"
              sx={style.button}
              loading={loading}
            >
              Pay Rs.500 and Register
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
      {openModal && (
        <MembershipCheckModal
          isOpen={openModal}
          setOpenModal={setOpenModal}
          setLoading={setLoading}
          continuePayment={continuePayment}
        />
      )}
    </Container>
  );
}

export default RegistrationForm;
