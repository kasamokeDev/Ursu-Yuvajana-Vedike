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
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Error from '../formError/Error';
import { useForm, Controller } from 'react-hook-form';
import data from '../../staticData/data';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Schema/UserSchema';
import moment from 'moment';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import { displayRazorpay } from '../../util/Payment';

import MembershipCheckModal from './MembershipCheckModal';

import Title from '../title/Title';

function RegistrationForm() {
  const theme = useTheme();
  const style = Styles(theme);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sameAddress, setSameAddress] = useState(true);
  const [isNRI, setIsNRI] = useState(false);
  const [isEmployed, setIsEmployed] = useState(true);
  const defaultValues = {
    fullName: '',
    dob: '',
    bloodGroup: '',
    gender: '',
    fatherName: '',
    maritalStatus: '',
    education: '',
    school: '',
    occupation: '',
    companyName: '',
    Paddress: {
      locality: '',
      city: '',
      state: '',
      pincode: '',
    },
    Caddress: {
      locality: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
    },
    email: '',
    phoneNumber: '',
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    shouldUnregister: true,
    defaultValues: {
      fullName: '',
      dob: '',
      bloodGroup: '',
      gender: '',
      fatherName: '',
      maritalStatus: '',
      education: '',
      school: '',
      occupation: '',
      companyName: '',
      Paddress: {
        locality: '',
        city: '',
        state: '',
        pincode: '',
      },
      Caddress: {
        locality: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
      },
      email: '',
      phoneNumber: '',
    },
  });
  const submitForm = (data) => {
    console.log({ ...data, dob: moment(data.dob).format('YYYY-MM-DD') }); //this data will be sent to server
    setOpenModal(true);
    setLoading(true);
    reset(defaultValues);
  };
  const continuePayment = () => {
    const data = getValues();
    const result = displayRazorpay(
      `${data.fullName}`,
      data.email,
      data.phoneNumber,
      data.address.locality
    );
    result
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
        mt: 2,
      }}
    >
      <Title title="Member Registration Form" />
      <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2} sx={style.formContainer}>
          <Grid xs={12} item>
            <Typography variant="h6">
              <strong>Personal Details:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              required
              label="Full Name"
              type="text"
              {...register('fullName')}
              error={Boolean(errors?.fullName)}
              sx={{ width: { xs: '100%', sm: 'unset' } }}
            ></TextField>
            <Error errorMessage={errors?.fullName?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              type="date"
              label="Date of Birth"
              InputLabelProps={{ shrink: true }}
              {...register('dob')}
              error={Boolean(errors.dob)}
              sx={{ width: { xs: '100%', sm: '82%' } }}
              required
            ></TextField>
            <Error errorMessage={errors.dob?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="blood-group-select-label" required>
                Blood Group
              </InputLabel>
              <Controller
                control={control}
                name="bloodGroup"
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      labelId="blood-group-select-label"
                      id="blood-group-select"
                      label="Blood Group"
                      error={Boolean(errors.bloodGroup)}
                    >
                      {data.bloodGroups.map((bg) => (
                        <MenuItem value={bg} key={bg}>
                          {bg}
                        </MenuItem>
                      ))}
                    </Select>
                  );
                }}
              />
            </FormControl>
            <Error errorMessage={errors.bloodGroup?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="Gender-select-label" required>
                Gender
              </InputLabel>
              <Controller
                control={control}
                name="gender"
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      labelId="Gender-select-label"
                      id="gender-select"
                      label="Gender"
                      error={Boolean(errors.gender)}
                    >
                      {data.genders.map((gender) => (
                        <MenuItem value={gender} key={gender}>
                          {gender}
                        </MenuItem>
                      ))}
                    </Select>
                  );
                }}
              />
            </FormControl>
            <Error errorMessage={errors.gender?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="Father's Name"
              type="text"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('fatherName')}
              error={Boolean(errors.fatherName)}
              required
            ></TextField>
            <Error errorMessage={errors.fatherName?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="marital-status-select-label" required>
                Marital Status
              </InputLabel>
              <Controller
                control={control}
                name="maritalStatus"
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      labelId="marital-status-select-label"
                      id="marital-status-select"
                      label="Marital Status"
                      error={Boolean(errors.maritalStatus)}
                    >
                      {data.maritalStatus.map((ms) => (
                        <MenuItem value={ms} key={ms}>
                          {ms}
                        </MenuItem>
                      ))}
                    </Select>
                  );
                }}
              />
            </FormControl>
            <Error errorMessage={errors.maritalStatus?.message} />
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h6">
              <strong>Education:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="Education"
              type="text"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('education')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              label="School/University Name"
              {...register('school')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    {...register('employed')}
                    onChange={(e) => {
                      e.target.checked
                        ? setIsEmployed(true)
                        : setIsEmployed(false);
                    }}
                  />
                }
                label="Employed"
              />
            </FormGroup>
          </Grid>
          {isEmployed && (
            <>
              <Grid xs={12} item>
                <Typography variant="h6">
                  <strong>Job Details:</strong>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Occupation"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('occupation')}
                ></TextField>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Company Name"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('companyName')}
                ></TextField>
              </Grid>
            </>
          )}

          <Grid xs={12} item>
            <Typography variant="h6">
              <strong>Address:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: -1 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sameAddress}
                    {...register('sameAddress')}
                    onChange={(e) =>
                      e.target.checked
                        ? (function () {
                            setSameAddress(true);
                            setIsNRI(false);
                          })()
                        : (function () {
                            setSameAddress(false);
                          })()
                    }
                  />
                }
                label="Permanent and Current address is same"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: -1 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isNRI}
                    {...register('isNRI')}
                    onChange={(e) => {
                      e.target.checked
                        ? (function () {
                            setIsNRI(true);
                            setSameAddress(false);
                          })()
                        : (function () {
                            setIsNRI(false);
                            setSameAddress(true);
                          })();
                    }}
                  />
                }
                label="NRI"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <strong>Permanent Address</strong>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="Locality"
              type="text"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('Paddress.locality')}
              error={Boolean(errors.Paddress?.locality)}
              required
            ></TextField>
            <Error errorMessage={errors.Paddress?.locality?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="City"
              type="text"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('Paddress.city')}
              error={Boolean(errors.Paddress?.city)}
              required
            ></TextField>
            <Error errorMessage={errors.Paddress?.city?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: '100% ' }}>
            <FormControl fullWidth sx={{ width: { xs: '100%', sm: '82%' } }}>
              <InputLabel id="address-state-select-label" required>
                State
              </InputLabel>
              <Controller
                control={control}
                name="Paddress.state"
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      labelId="address-state-select-label"
                      id="address-state-select"
                      label="State"
                      error={Boolean(errors.Paddress?.state)}
                    >
                      {data.states.map((state) => (
                        <MenuItem value={state} key={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  );
                }}
              />
              {/* <Select
                labelId="address-state-select-label"
                id="address-state-select"
                label="State"
                {...register('Paddress.state')}
                error={Boolean(errors.Paddress?.state)}
              >
                {data.states.map((state) => (
                  <MenuItem value={state} key={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select> */}
            </FormControl>
            <Error errorMessage={errors.Paddress?.state?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="Pin Code"
              type="text"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('Paddress.pincode')}
              error={Boolean(errors.Paddress?.pincode)}
              required
            ></TextField>
            <Error errorMessage={errors.Paddress?.pincode?.message} />
          </Grid>

          {!sameAddress && !isNRI && (
            <>
              <Grid item xs={12}>
                <strong>Current Address</strong>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Locality"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.locality')}
                  error={Boolean(errors.Caddress?.locality)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.locality?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="City"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.city')}
                  error={Boolean(errors.Caddress?.city)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.city?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="State"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.state')}
                  error={Boolean(errors.Caddress?.state)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.state?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Pin Code"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.pincode')}
                  error={Boolean(errors.Caddress?.pincode)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.pincode?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Country"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.country')}
                  error={Boolean(errors.Caddress?.country)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.country?.message} />
              </Grid>
            </>
          )}
          {isNRI && (
            <>
              <Grid item xs={12}>
                <strong>Current Address</strong>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Locality"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.locality')}
                  error={Boolean(errors.Caddress?.locality)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.locality?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="City"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.city')}
                  error={Boolean(errors.Caddress?.city)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.city?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="State"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.state')}
                  error={Boolean(errors.Caddress?.state)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.state?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Pin Code"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.pincode')}
                  error={Boolean(errors.Caddress?.pincode)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.pincode?.message} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ width: { xs: '100%', sm: 'unset' } }}
              >
                <TextField
                  label="Country"
                  type="text"
                  sx={{ width: { xs: '100%', sm: 'unset' } }}
                  {...register('Caddress.country')}
                  error={Boolean(errors.Caddress?.country)}
                  required
                ></TextField>
                <Error errorMessage={errors.Caddress?.country?.message} />
              </Grid>
            </>
          )}
          <Grid xs={12} item>
            <Typography variant="h6">
              <strong>Contact Details:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="Email Id"
              type="email"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('email')}
              error={Boolean(errors.email)}
              required
            ></TextField>
            <Error errorMessage={errors.email?.message} />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <TextField
              label="Phone Number"
              type="text"
              sx={{ width: { xs: '100%', sm: 'unset' } }}
              {...register('phoneNumber')}
              error={Boolean(errors.phoneNumber)}
            ></TextField>
            <Error errorMessage={errors.phoneNumber?.message} />
          </Grid>
          <Grid
            xs={12}
            item
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <LoadingButton
              variant="outlined"
              type="submit"
              sx={style.button}
              loading={loading}
            >
              Become a member
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
