import React from 'react';

const Dropdown = ( props ) => {
  const { findItems, foundItem, showDropdown, onOpen } = props;

  const handleClickMenu = ( obj ) => {
    foundItem( obj );
    showDropdown();
    onOpen();
  }

  return (
    <div className='Dropdown' id='myDropdown' style={{ top: props.top, left: props.left }}>
      <div className='menu'>
        <div className='menu-item'>
          { findItems.map(( item ) => {
            return <p key={ item.id } onClick={ () => { handleClickMenu( item ) } } >{ item.name }</p>
          }) }
        </div>
        <div className='target-box'></div>
      </div>
    </div>
  );
};

export { Dropdown }