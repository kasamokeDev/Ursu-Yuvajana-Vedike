import React from 'react';
import { Divider } from '@mui/material';
function NoticeList({ noticeData, selectActive, mobileView = false }) {
  return (
    <ul
      className={
        mobileView
          ? 'list-group list-group-light'
          : 'list-group list-group-light'
      }
    >
      {noticeData?.map((item, index) => {
        return (
          <>
            <li
              key={index}
              className={
                item.status === 'active'
                  ? 'list-group-item px-3 border-0 active'
                  : 'list-group-item px-3 border-0'
              }
              style={{ cursor: 'pointer' }}
              aria-current={item.status === 'active' ? 'true' : 'false'}
              onClick={() => {
                selectActive(item.id);
              }}
            >
              {item.title}
            </li>
            <Divider />
          </>
        );
      })}
    </ul>
  );
}

export default NoticeList;
