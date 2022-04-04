import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Snackbar from '@material-ui/core/Snackbar';

import { Photo } from './components/Photo';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';
import { Icon } from './components/Icon';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';
import { data } from './components/data';
import { database } from './firebase-config';
import { SnackbarContent } from '@material-ui/core';

const App = () => {
  const { cardList } = data;
  const coordsRef = collection( database, 'imageCoords' );

  const [ findItems, setFindItems ] = useState( cardList );
  const [ mapCoords, setMapCoords ] = useState([]);
  const [ currentItem, setCurrentItem ] = useState('');
  const [ openSnackbar, setOpenSnackbar ] = useState( false );

  const getCoords = async () => {
    const data = await getDocs( coordsRef );
    setMapCoords( data.docs.map(( doc ) => ({ ...doc.data() })));
    document.getElementById( 'overlay' ).style.display = 'none';
  };

  const removeFindItems = ( obj ) => {
    setFindItems( findItems.filter(( val ) => val.name !== obj.name ) );
  };

  const onOpen = () => {
    setOpenSnackbar( true );
  };

  const closeSnckbar = ( e, reason ) => {
    if( 'clickaway' === reason ){
      return;
    } else {
      setOpenSnackbar( false );
    }
  };

  return (
    <div className='App' >
      <Header header={ `Find That Pokémon` }/>
      <div id='overlay'>
        <div className='startContainer'>
          <h1>FIND US</h1>
          <div className='findUsList'>
            { findItems.map(( item ) => {
              return <Icon key={ item.id } icon={ item.icon } name={ item.name } />;
            }) }
          </div>
          <button onClick={ getCoords } > NEW GAME </button>
        </div>
      </div>
      <div className='content-container'>
        <Sidebar findItems={ findItems }/>
        <Photo currentItem={ currentItem } setCurrentItem={ setCurrentItem }
        mapCoords={ mapCoords } findItems={ findItems }
        removeFindItems={ removeFindItems } photo={ murataArt }
        onOpen={ onOpen }
        alt=' PHOTO OF POKEMON FANART '/>
      </div>
      <Snackbar open={ openSnackbar } autoHideDuration={ 700 }
      onClose={ closeSnckbar } anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
        <SnackbarContent style={{ backgroundColor: 'green', }}
        message={ <span id='client-snackbar'>{ `${ currentItem } is found!` }</span> }/>
      </Snackbar>
    </div>
  );
};

export { App };