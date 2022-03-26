import React from 'react';

import { Photo } from './components/Photo';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';
import { data } from './components/data';

const App = () => {
  const { cardList } = data;

  return (
    <div className='App' >
      <Header header={ `Find That Pokémon` }/>
      <div className='content-container'>
        <Sidebar cardList={ cardList }/>
        <Photo cardList={ cardList } photo={ murataArt } alt=' PHOTO OF POKEMON FANART '/>
      </div>
    </div>
  );
};

export { App };
