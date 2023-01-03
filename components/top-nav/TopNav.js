import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import TopNavDrawer from './TopNavDrawer';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: '10px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  logo: { flexGrow: '1', cursor: 'pointer' },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: '2px',
    '&:hover': { color: 'yellow', borderBottom: '1px solid yellow' },
  },
}));

function TopNav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <TopNavDrawer />
        ) : (
          <div className={classes.navlinks}>
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
            <Link href="/memberRegistration" className={classes.link}>
              Member Registration
            </Link>
            <Link href="/adminLogin" className={classes.link}>
              Admin Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
