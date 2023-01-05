import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Styles from './style';
import Link from 'next/link';
import TopNavDrawer from './TopNavDrawer';

function TopNav() {
  const theme = useTheme();
  const style = Styles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  React.useEffect(() => {
    console.log(theme.breakpoints.down('sm'));
  }, []);
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <TopNavDrawer />
        ) : (
          <div style={style.navlinks}>
            <Link href="/" style={style.link}>
              Home
            </Link>
            <Link href="/about" style={style.link}>
              About
            </Link>
            <Link href="/memberRegistration" style={style.link}>
              Member Registration
            </Link>
            <Link href="/adminLogin" style={style.link}>
              Admin Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
