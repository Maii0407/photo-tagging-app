import React, { useState } from 'react';

import { Dropdown } from './Dropdown';
import { AreaMap } from './AreaMap';

const Photo = ( props ) => {
  const { findItems,removeFindItems, mapCoords, currentItem, setCurrentItem, onOpen } = props;

  const [ menuState, setMenuState ] = useState('hide');
  const [ menuPos, setMenuPos ] = useState({ left: 0, top: 0 });

//get position for where the dropdown menu will appear
  const getPosition = (e) => {
    setMenuPos( state => ({ ...state, left: e.pageX - 200, top: e.pageY - 49 }));
  };

  const showDropdown = () => {
    if( menuState === 'hide' ) {
      document.getElementById( 'myDropdown' ).style.display = 'block';
      setMenuState( 'show' );
    } else {
      document.getElementById( 'myDropdown' ).style.display = 'none';
      setMenuState( 'hide' );
    }
  };

  const foundItem = ( obj ) => {
    if( currentItem === '' ) {
      return;
    } else if( currentItem === obj.name ) {
      removeFindItems( obj );
      onOpen();
    }
  };

  const handleClick = (e) => {
    getPosition(e);
    showDropdown();
  };

  const handleClickPhoto = (e) => {
    handleClick(e);
    setCurrentItem('');
  };

  const itemSelected = ( obj ) => {
    setCurrentItem( obj.name );
  };

  return (
    <div className='Photo'>
      <img onClick={ handleClickPhoto } src={ props.photo } alt={ props.alt } useMap='#photo-map' />
      <map name='photo-map'>
        { mapCoords.map((item) => {
          return <AreaMap key={ item.id } item={ item } handleClick={ handleClick } itemFunc={ () => { itemSelected( item ) } } />
        }) }
      </map>
      <Dropdown showDropdown={ showDropdown } foundItem={ foundItem } 
      findItems={ findItems } top={ menuPos.top } left={ menuPos.left }/>
    </div>
  );
};

export { Photo };