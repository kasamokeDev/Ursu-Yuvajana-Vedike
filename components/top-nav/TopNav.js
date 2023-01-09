import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
  Link,
  Box,
} from '@mui/material';
import TopNavDrawer from './TopNavDrawer';
import Header from '../header/Header';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function TopNav() {
  const theme = useTheme();
  const style = Styles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <TopNavDrawer />
        ) : (
          <>
            <Header />
            <Box sx={style.navlinks}>
              <Link href="/" sx={style.link} underline="hover">
                Home
              </Link>
              <Link href="/about" sx={style.link} underline="hover">
                About
              </Link>
              <Link
                href="/memberRegistration"
                sx={style.link}
                underline="hover"
              >
                Member Registration
              </Link>
              <Link href="/adminLogin" sx={style.link} underline="hover">
                Admin Login
              </Link>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
