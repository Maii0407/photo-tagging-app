import React, { useState } from 'react';
import { collection, getDoc, getDocs } from 'firebase/firestore';

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

  const getCoords = async () => {
    const data = await getDocs( coordsRef );
    setMapCoords( data.docs.map(( doc ) => ({ ...doc.data() })));
  };

  return (
    <div className='App' >
      <Header header={ `Find That Pokémon` }/>
      <button onClick={ getCoords } >CLICK ME</button>
      <div className='content-container'>
        <Sidebar findItems={ findItems }/>
        <Photo mapCoords={ mapCoords } findItems={ findItems } photo={ murataArt } alt=' PHOTO OF POKEMON FANART '/>
      </div>
    </div>
  );
};

export { App };