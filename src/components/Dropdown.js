import React from 'react';

const Dropdown = ( props ) => {
  const { cardList } = props;

  return (
    <div className='Dropdown' id='myDropdown' style={{ top: props.top, left: props.left }}>
      <div className='menu'>
        <div className='target-box'></div>
        <div className='menu-item'>
          { cardList.map(( item ) => {
            return <p key={ item.id }>{ item.name }</p>
          }) }
        </div>
      </div>
    </div>
  );
};

export { Dropdown }