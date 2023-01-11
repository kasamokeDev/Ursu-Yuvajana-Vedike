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

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TopNavDrawer from './TopNavDrawer';
import Header from '../header/Header';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function TopNav() {
  const theme = useTheme();
  const style = Styles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
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
              <Link href="#" sx={style.link} underline="hover">
                Membership
              </Link>
              <Link href="#" sx={style.link} underline="hover">
                Events & Gallery
              </Link>
              <Link href="#" sx={style.link} underline="hover">
                Notice Board
              </Link>
              <Link href="/about" sx={style.link} underline="hover">
                Our Vision
              </Link>
              <Link
                href="#"
                sx={style.link}
                underline="hover"
              >
                About Us
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
