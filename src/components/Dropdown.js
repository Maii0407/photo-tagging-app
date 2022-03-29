import React from 'react';

const Dropdown = ( props ) => {
  const { findItems } = props;

  return (
    <div className='Dropdown' id='myDropdown' style={{ top: props.top, left: props.left }}>
      <div className='menu'>
        <div className='menu-item'>
          { findItems.map(( item ) => {
            return <p key={ item.id }>{ item.name }</p>
          }) }
        </div>
        <div className='target-box'></div>
      </div>
    </div>
  );
};

export { Dropdown }