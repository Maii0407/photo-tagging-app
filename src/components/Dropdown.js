import React from 'react';

const Dropdown = ( props ) => {
  const { cardList } = props;

  return (
    <div className='Dropdown' id='myDropdown' style={{ top: props.top, left: props.left }}>
      <div className='target-box'></div>
      { cardList.map(( item ) => {
        return <div key={ item.id } className='menu-item'>
          <img src={ item.icon } alt={ item.name }/>
          <p>{ item.name }</p>
        </div>
      })}
    </div>
  );
};

export { Dropdown }