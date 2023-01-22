import React from 'react';

function NoticeList({ noticeData }) {
  return (
    <ul className="list-group list-group-light">
      {noticeData.map((item, index) => {
        return (
          <li
            key={index}
            className={
              item.status === 'active'
                ? 'list-group-item px-3 border-0 active'
                : 'list-group-item px-3 border-0'
            }
            aria-current={item.status === 'active' ? 'true' : 'false'}
          >
            {item.body}
          </li>
        );
      })}
    </ul>
  );
}

export default NoticeList;
