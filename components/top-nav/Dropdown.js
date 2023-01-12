import React from 'react';
import { Box, Link } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function Dropdown({ title, items = [], hide = false, url = '' }) {
  const theme = useTheme();
  const style = Styles(theme);
  const [dropItems, setDropItems] = React.useState();
  React.useEffect(() => {
    setDropItems(items);
  }, [items]);
  return (
    <div>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        elevation={0}
        style={style.link}
      >
        {!hide ? (
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ maxHeight: '3rem', minHeight: '3rem' }}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
        ) : (
          <Typography
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(url, '_self');
            }}
          >
            {title}
          </Typography>
        )}

        <div style={{ position: 'absolute', zIndex: 3, background: '#FFF' }}>
          {dropItems?.map((item, index) => {
            return (
              <AccordionDetails key={index}>
                <Box dangerouslySetInnerHTML={{ __html: `${item}` }} />
              </AccordionDetails>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
}

export default Dropdown;
