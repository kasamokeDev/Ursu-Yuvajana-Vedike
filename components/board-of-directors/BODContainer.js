import React from 'react';
import CardContainer from '../card-group/CardContainer';
import data from '../../staticData/BODdata';
import UserListContainer from '../user-list/UserListContainer';

function BODContainer() {
  return <UserListContainer title="Board Of Directors" data={data} />;
}

export default BODContainer;
