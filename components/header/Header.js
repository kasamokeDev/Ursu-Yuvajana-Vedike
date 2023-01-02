import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import style from './style.module.css';

function Header() {
  return (
    <Container maxWidth="sm">
      <Grid container style={{alignItems: 'center'}}>
        <Grid item xs={3} md={4} className={style.headerImageContainer}>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 100, md: 100 },
              maxWidth: { xs: 100, md: 100 },
            }}
            alt="Ursu Yuvajana Vedike"
            src="/assets/logo/officialLogo.png"
          ></Box>
        </Grid>
        <Grid item xs={8} md={8} className={style.headerTextContainer}>
          <Typography className={style.headerText}>Ursu Yuvajana Vedike</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
