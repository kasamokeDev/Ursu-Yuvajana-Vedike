import React, { useState } from 'react';
import { Drawer, IconButton, Toolbar } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../header/Header';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import Dropdown from './Dropdown';

function TopNavDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const style = Styles(theme);

  return (
    <>
      <Drawer
        anchor="top"
        sx={{ width: '100%', background: 'transparent' }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar>
          <CloseIcon
            onClick={() => setOpenDrawer(false)}
            style={{ color: '#000' }}
          />
        </Toolbar>
        <box sx={{ backgroundColor: 'primary.main' }} height="100vh">
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            elevation={0}
            style={style.link}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Membership</Typography>
            </AccordionSummary>
            <AccordionDetails style={{color: 'red'}}>
              <Dropdown title="All Members" items={[]} hide={true} url="/allMembers" />
            </AccordionDetails>
            <AccordionDetails>
              <Dropdown
                title="Board of directors"
                items={[]}
                hide={true}
                url="/boardOfDirectors"
              />
            </AccordionDetails>
            <AccordionDetails>
              <Dropdown title="Life Members" items={[]} hide={true} url="/lifeMembers" />
            </AccordionDetails>
            <AccordionDetails>
              <Dropdown
                title="Member registration"
                items={[]}
                hide={true}
                url="/memberRegistration"
              />
            </AccordionDetails>
            <AccordionDetails>
              <Dropdown title="Membership FAQ" items={[]} hide={true} url="/membersFAQ" />
            </AccordionDetails>
          </Accordion>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            elevation={0}
            style={style.link}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Events & Gallery</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Dropdown title="Past events" items={[]} hide={true} url="#" />
            </AccordionDetails>
            <AccordionDetails>
              <Dropdown
                title="Upcoming events"
                items={[]}
                hide={true}
                url="#"
              />
            </AccordionDetails>
            <AccordionDetails>
              <Dropdown title="Photo Gallery" items={[]} hide={true} url="/gallery" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionDetails>
              <Dropdown title="Notice Board" items={[]} hide={true} url="#" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionDetails>
              <Dropdown title="Our Vision" items={[]} hide={true} url="#" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionDetails>
              <Dropdown title="About Us" items={[]} hide={true} url="/about" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionDetails>
              <Dropdown
                title="Admin Login"
                items={[]}
                hide={true}
                url="/adminLogin"
              />
            </AccordionDetails>
          </Accordion>
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
