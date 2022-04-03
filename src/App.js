import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Snackbar from '@material-ui/core/Snackbar';

import { Photo } from './components/Photo';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';
import { data } from './components/data';
import { database } from './firebase-config';

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
      <button onClick={ getCoords } >CLICK ME</button>
      <div className='content-container'>
        <Sidebar findItems={ findItems }/>
        <Photo currentItem={ currentItem } setCurrentItem={ setCurrentItem }
        mapCoords={ mapCoords } findItems={ findItems }
        removeFindItems={ removeFindItems } photo={ murataArt }
        onOpen={ onOpen }
        alt=' PHOTO OF POKEMON FANART '/>
      </div>
      <Snackbar open={ openSnackbar } autoHideDuration={ 500 }
      onClose={ closeSnckbar } message={ `${currentItem} is found` } />
    </div>
  );
};

export { App };