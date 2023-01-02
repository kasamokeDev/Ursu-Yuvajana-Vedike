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
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
  link: { textDecoration: 'none', color: 'blue', fontSize: '20px' },
  icon: { color: 'white' },
  logo: { flexGrow: '1', cursor: 'pointer' },
  draw: { background: 'red' },
}));

function TopNavDrawer() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="top"
        sx={{ width: 250, color: '#fff' }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar sx={{ backgroundColor: 'primary.main' }}>
          <CloseIcon onClick={() => setOpenDrawer(false)}/>
        </Toolbar>
        <box sx={{ backgroundColor: 'primary.main' }} height="100vh">
          <List height="100vh">
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="/" className={classes.link}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/about" className={classes.link}>
                  About
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/adminLogin" className={classes.link}>
                  Admin Login
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>
                <Link href="/" className={classes.link}>
                  contact
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </box>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default TopNavDrawer;
