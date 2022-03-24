import React from 'react';

import { Photo } from './components/Photo';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';

const App = () => {
  return (
    <div className='App' >
      <Header header={ `Find That Pokémon` }/>
      <div className='content-container'>
        <Sidebar/>
        <Photo photo={ murataArt } alt=' PHOTO OF POKEMON FANART ' />
      </div>
    </div>
  );
};

export { App };
