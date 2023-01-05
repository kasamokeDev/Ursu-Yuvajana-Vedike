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
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function TopNavDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

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
                <Link href="/" style={Styles(theme).link}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/about" style={Styles(theme).link}>
                  About
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/memberRegistration" style={Styles(theme).link}>
                  Member Registration
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/adminLogin" style={Styles(theme).link}>
                  Admin Login
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </box>
      </Drawer>
      <IconButton
        style={Styles(theme).icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default TopNavDrawer;
