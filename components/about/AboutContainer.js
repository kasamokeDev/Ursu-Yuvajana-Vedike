import React from 'react';
import { Container, Grid, Typography, Box, Divider, Chip } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function AboutContainer() {
  const theme = useTheme();
  const style = Styles(theme);
  return (
    <Container maxWidth="lg" sx={style.aboutContainer}>
      <Grid container spacing={2} sx={style.aboutGridContainer}>
        <Grid item xs={12} sx={style.aboutDividerContainer}>
          <Divider>
            <Chip label="Parampara" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography sx={style.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
            pharetra dui. Sed rhoncus viverra orci, ac accumsan nisi. Duis
            suscipit quam sed eros malesuada tincidunt. Suspendisse potenti.
            Donec enim tellus, iaculis ac lacinia ut, semper nec augue. Cras
            pharetra nunc vel felis rhoncus malesuada. Fusce vitae bibendum
            lacus. Integer hendrerit commodo est, lobortis mollis metus molestie
            ac. Nulla ac magna at tellus iaculis dapibus a vel odio. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In at lorem tellus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec nec massa accumsan ipsum
            vestibulum rutrum id eget neque. Mauris auctor magna eget gravida
            ultrices. Sed hendrerit mattis tincidunt. Praesent sollicitudin nunc
            id risus semper sollicitudin. Praesent vulputate velit non urna
            aliquam, vitae rhoncus est hendrerit. Integer in lorem pharetra nisi
            blandit finibus. Aenean convallis eu magna ac auctor. Mauris iaculis
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={style.aboutImage}
            alt="The house from the offer."
            src="/assets/images/aboutImage1.jpg"
          />
        </Grid>
        <Grid item xs={12} sx={style.aboutDividerContainer}>
          <Divider>
            <Chip label="Pratishtha" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={style.aboutImage}
            alt="The house from the offer."
            src="/assets/images/aboutImage2.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={style.aboutText}>
          <Typography sx={style.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
            pharetra dui. Sed rhoncus viverra orci, ac accumsan nisi. Duis
            suscipit quam sed eros malesuada tincidunt. Suspendisse potenti.
            Donec enim tellus, iaculis ac lacinia ut, semper nec augue. Cras
            pharetra nunc vel felis rhoncus malesuada. Fusce vitae bibendum
            lacus. Integer hendrerit commodo est, lobortis mollis metus molestie
            ac. Nulla ac magna at tellus iaculis dapibus a vel odio. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In at lorem tellus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec nec massa accumsan ipsum
            vestibulum rutrum id eget neque. Mauris auctor magna eget gravida
            ultrices. Sed hendrerit mattis tincidunt. Praesent sollicitudin nunc
            id risus semper sollicitudin. Praesent vulputate velit non urna
            aliquam, vitae rhoncus est hendrerit. Integer in lorem pharetra nisi
            blandit finibus. Aenean convallis eu magna ac auctor. Mauris iaculis
          </Typography>
        </Grid>
        <Grid item xs={12} sx={style.aboutDividerContainer}>
          <Divider>
            <Chip label="Anushasan" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={5} sx={style.aboutText}>
          <Typography sx={style.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
            pharetra dui. Sed rhoncus viverra orci, ac accumsan nisi. Duis
            suscipit quam sed eros malesuada tincidunt. Suspendisse potenti.
            Donec enim tellus, iaculis ac lacinia ut, semper nec augue. Cras
            pharetra nunc vel felis rhoncus malesuada. Fusce vitae bibendum
            lacus. Integer hendrerit commodo est, lobortis mollis metus molestie
            ac. Nulla ac magna at tellus iaculis dapibus a vel odio. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In at lorem tellus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec nec massa accumsan ipsum
            vestibulum rutrum id eget neque. Mauris auctor magna eget gravida
            ultrices. Sed hendrerit mattis tincidunt. Praesent sollicitudin nunc
            id risus semper sollicitudin. Praesent vulputate velit non urna
            aliquam, vitae rhoncus est hendrerit. Integer in lorem pharetra nisi
            blandit finibus. Aenean convallis eu magna ac auctor. Mauris iaculis
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={style.aboutImage}
            alt="The house from the offer."
            src="/assets/images/aboutImage3.jpg"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutContainer;
