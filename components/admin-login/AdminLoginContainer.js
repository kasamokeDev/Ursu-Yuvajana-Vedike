import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import Error from '../formError/Error';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Schema/AdminUserSchema';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function AdminLoginContainer() {
  const theme = useTheme();
  const style = Styles(theme);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <Typography variant="h4">
        <strong>Admin Login</strong>
      </Typography>
      <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2} sx={style.formContainer}>
          <Grid item xs={12}>
            <TextField
              sx={style.textField}
              label="Email"
              type="email"
              {...register('email')}
              error={Boolean(errors?.email)}
            ></TextField>
            <Error errorMessage={errors.email?.message} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={style.textField}
              label="Password"
              type="password"
              {...register('password')}
              error={Boolean(errors?.password)}
            ></TextField>
            <Error errorMessage={errors.password?.message} />
          </Grid>

          <Grid
            xs={12}
            item
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button variant="contained" type="submit" sx={style.button}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AdminLoginContainer;
