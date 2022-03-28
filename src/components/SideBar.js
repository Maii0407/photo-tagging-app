import React from 'react';

import { Icon } from './Icon';

const Sidebar =  ( props ) => {
  const { findItems } = props;

  return (
    <div className='Sidebar'>
      { findItems.map((item) => {
        return <Icon key={ item.id } icon={ item.icon } name={ item.name } />;
      }) }
    </div>
  );
};

export { Sidebar };