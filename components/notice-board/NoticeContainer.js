import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import NoticeFocused from './NoticeFocused';
import NoticeList from './NoticeList';
import noticeData from '../../staticData/NoticeData';

function NoticeContainer() {
  return (
    <Container maxWidth="lg" sx={{mt: 2}}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <NoticeFocused />
        </Grid>
        <Grid item xs={12} md={3}>
          <NoticeList noticeData={noticeData}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NoticeContainer;
