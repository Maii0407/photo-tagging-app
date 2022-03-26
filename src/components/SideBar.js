import React from 'react';

import { Icon } from './Icon';

const Sidebar =  ( props ) => {
  const { cardList } = props;

  return (
    <div className='Sidebar'>
      { cardList.map((item) => {
        return <Icon key={ item.id } icon={ item.icon } name={ item.name } />;
      }) }
    </div>
  );
};

export { Sidebar };