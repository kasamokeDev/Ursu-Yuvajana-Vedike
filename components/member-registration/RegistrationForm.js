import React from 'react';
import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { schema } from '../Schema/UserSchema';

function RegistrationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });
  const submitForm = (data) => {
    console.log(data);
    dispatch(addUser(data));
    reset();
  };
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        style={{
          textDecoration: 'underline',
          color: 'rgb(69, 69, 181)',
          fontFamily: 'arial, sans-serif',
        }}
      >
        Member Registration
      </Typography>
      <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2}>
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
              {...register('firstName')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Middle Name"
              type="text"
              {...register('middleName')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Last Name"
              type="text"
              {...register('lastName')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField type='date' {...register('dob')}></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Blood Group"
              type="text"
              {...register('bloodGroup')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Gender"></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Aadhar Number"
              type="number"
              {...register('aadharNumber')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="PAN"
              type="text"
              {...register('panNumber')}
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
              Relationship Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Father's Name"
              type="text"
              {...register('fatherName')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Marital Status"
              type="text"
              {...register('maritalStatus')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Spouse Name(If Applicable)"
              type="text"
              {...register('spouseName')}
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
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="School/University Name"
              type="text"
              {...register('academicInstitution')}
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
              Professional Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Occupation"
              type="text"
              {...register('occupation')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Company Name"
              type="text"
              {...register('companyName')}
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
              Geo Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Full Address"
              type="text"
              {...register('address.addressLine1')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="City"
              type="text"
              {...register('address.city')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="State"
              type="text"
              {...register('address.state')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Pin Code"
              type="text"
              {...register('address.pincode')}
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
              Contact Details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Phone Number"
              type="text"
              {...register('phoneNumber')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Alternate Phone Number"
              type="text"
              {...register('altPhoneNumber')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Email Id"
              type="email"
              {...register('email')}
            ></TextField>
          </Grid>
          <Grid
            xs={12}
            item
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{
                width: '50%',
                textTransform: 'none',
                borderRadius: '1rem',
                backgroundColor: 'rgb(45, 132, 204)',
                fontFamily: 'arial, sans-serif',
              }}
            >
              Register User
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default RegistrationForm;
