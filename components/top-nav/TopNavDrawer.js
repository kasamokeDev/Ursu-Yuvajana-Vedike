import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../header/Header';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function TopNavDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const style = Styles(theme);

  return (
    <>
      <Drawer
        anchor="top"
        sx={{ width: 250, color: '#fff' }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar sx={{ backgroundColor: 'primary.main' }}>
          <CloseIcon onClick={() => setOpenDrawer(false)} />
        </Toolbar>
        <box sx={{ backgroundColor: 'primary.main' }} height="100vh">
          <List height="100vh">
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="#" sx={style.link} underline="hover">
                  Members
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="#" sx={style.link} underline="hover">
                  Events
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="#" sx={style.link} underline="hover">
                  Awards
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/about" sx={style.link} underline="hover">
                  About
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link
                  href="/memberRegistration"
                  sx={style.link}
                  underline="hover"
                >
                  Member Registration
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/adminLogin" sx={style.link} underline="hover">
                  Admin Login
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </box>
      </Drawer>
      <IconButton sx={style.icon} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Header />
    </>
  );
}

export default TopNavDrawer;
