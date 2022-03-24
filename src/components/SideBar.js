import React from 'react';

import { Icon } from './Icon';

import { data } from './data';

const Sidebar =  () => {
  const { cardList } = data;

  return (
    <div className='Sidebar'>
      { cardList.map((card) => {
        return <Icon key={ card.id } icon={ card.icon } name={ card.name } />;
      }) }
    </div>
  );
};

export { Sidebar };