import React from 'react';

import { Photo } from './components/Photo';
import { Header } from './components/Header';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';

const App = () => {
  return (
    <div className='App' >
      <Header header={ `Find That POKE'MON` }/>
      <Photo photo={ murataArt } alt=' PHOTO OF POKEMON FANART ' />
    </div>
  );
};

export { App };
