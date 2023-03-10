/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import NoticeFocused from './NoticeFocused';
import NoticeList from './NoticeList';
import noticeData from '../../staticData/NoticeData';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import Title from '../title/Title';

function NoticeContainer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const style = Styles(theme);
  const focusedNoticeRef = useRef(null);
  const [notices, setNotices] = React.useState(noticeData);
  const [activeNotice, setActiveNotice] = React.useState(noticeData[0]);
  const selectActive = (id) => {
    notices.map((item) => {
      if (item.id === id) setActiveNotice(item);
    });
    const noticeList = notices.map((item) => {
      if (item.id === id) item.status = 'active';
      else item.status = 'disabled';
      return item;
    });
    setNotices(noticeList);
    if (isMobile) focusedNoticeRef.current.scrollIntoView();
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 10,
        mt: 2,
      }}
    >
      <Title title="Notices" />
      {/* {isMobile && (
        <Grid item xs={12} md={3}>
          <NoticeList
            noticeData={notices}
            selectActive={selectActive}
            mobileView={isMobile && true}
          />
        </Grid>
      )} */}
      <Grid container spacing={2} ref={focusedNoticeRef}>
        <Grid item xs={12} md={9}>
          <NoticeFocused notice={activeNotice} />
        </Grid>
        {/* {!isMobile && ( */}
        <Grid item xs={12} md={3}>
          <NoticeList noticeData={notices} selectActive={selectActive} />
        </Grid>
        {/* )} */}
      </Grid>
    </Container>
  );
}

export default NoticeContainer;
