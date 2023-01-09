import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import style from './style.module.css';

function Header() {
  return (
    <Container maxWidth="xs">
      <Grid
        container
        style={{ alignItems: 'center' }}
        spacing={{ xs: 2, md: 1 }}
      >
        <Grid item xs={2} md={2} className={style.headerImageContainer}>
          <Box
            component="img"
            sx={{
              height: 70,
              width: 70,
              maxHeight: { xs: 50, md: 50 },
              maxWidth: { xs: 50, md: 50 },
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            alt="Ursu Yuvajana Vedike"
            src="/assets/logo/OfficialLogo.png"
            onClick={() => {
              window.open('/', '_self');
            }}
          ></Box>
        </Grid>
        <Grid
          item
          container
          xs={10}
          md={10}
          className={style.headerTextContainer}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              className={style.headerText}
              onClick={() => {
                window.open('/', '_self');
              }}
            >
              Ursu Yuvajana Vedike
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              // className={style.headerText}
              variant="subtitle2"
              onClick={() => {
                window.open('/', '_self');
              }}
            >
              A nobel Intiative
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
