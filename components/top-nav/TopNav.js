import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useMediaQuery,
  Box,
} from '@mui/material';
import TopNavDrawer from './TopNavDrawer';
import Header from '../header/Header';

import { useTheme } from '@mui/material/styles';
import Styles from './style';
import Dropdown from './Dropdown';

function TopNav() {
  const theme = useTheme();
  const style = Styles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <AppBar
      position="static"
      style={{ background: 'transparent', color: '#000' }}
    >
      <CssBaseline />
      <Toolbar>
        {isMobile && <TopNavDrawer />}
        {!isMobile && (
          <>
            <Header />
            <Box sx={style.navlinks}>
              <Dropdown
                title="Membership"
                items={[
                  "<a href='#'style='color: black;font-size: 17px;'>All Members</a>",
                  "<a href='#'style='color: black;font-size: 17px;'>Board of directors</a>",
                  "<a href='#'style='color: black;font-size: 17px;'>Life Members</a>",
                  "<a href='/memberRegistration' style='color: black;font-size: 17px;'>Member registration</a>",
                  "<a href='#' style='color: black;font-size: 17px;'>Membership FAQs</a>",
                ]}
              />
              <Dropdown
                title="Events & Gallery"
                items={[
                  "<a href='#'style='color: black;font-size: 17px;'>Past events</a>",
                  "<a href='#'style='color: black;font-size: 17px;'>Upcoming events</a>",
                  "<a href='#' style='color: black;font-size: 17px;'>Photo Gallery</a>",
                ]}
              />
              <Dropdown title="Notice Board" items={[]} hide={true} />
              <Dropdown title="Our Vision" items={[]} hide={true} />
              <Dropdown title="About Us" items={[]} hide={true} url="/about" />
              <Dropdown
                title="Admin"
                items={[
                  "<a href='/adminLogin' style='color: black;font-size: 17px;'>Login</a>",
                ]}
              />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
