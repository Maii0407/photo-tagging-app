import React, { useState } from 'react';

import { Dropdown } from './Dropdown';

const Photo = ( props ) => {
  const { findItems, mapCoords } = props;

  const [ menuState, setMenuState ] = useState('hide');
  const [ menuPos, setMenuPos ] = useState({ left: 0, top: 0 });

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

  const getCoords = (e) => {
    let x = e.clientX; //horizontal coords
    let y = e.clientY; //vertical coords

    console.log( `hori coords: ${x} verti coords: ${y}` );
  };

  const handleClick = (e) => {
    getPosition(e);
    showDropdown();
  };

  return (
    <div className='Photo'>
      <img onClick={getCoords} src={ props.photo } alt={ props.alt } useMap='#photo-map' />
      <map name='photo-map'>
        { mapCoords.map((item) => {
          return <area key={ item.id } shape='rect' coords={ item.coords } alt={ item.name }/>
        }) }
      </map>
      <Dropdown findItems={ findItems } top={ menuPos.top } left={ menuPos.left }/>
    </div>
  );
};

export { Photo };