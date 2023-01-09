import React from 'react';
import { Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function CarouselCaption({ caption }) {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <>
      <Typography sx={style.slideType1} variant="h3">
        {caption}
      </Typography>
      <Typography sx={style.slideType1} variant="body1">
        {caption}
      </Typography>
    </>
  );
}

export default CarouselCaption;
