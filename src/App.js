import React, { useState } from 'react';

import { Photo } from './components/Photo';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';
import { data } from './components/data';

const App = () => {
  const { cardList } = data;

  const [ findItems, setFindItems ] = useState( cardList );

  return (
    <div className='App' >
      <Header header={ `Find That Pokémon` }/>
      <div className='content-container'>
        <Sidebar findItems={ findItems }/>
        <Photo findItems={ findItems } photo={ murataArt } alt=' PHOTO OF POKEMON FANART '/>
      </div>
    </div>
  );
};

export { App };
