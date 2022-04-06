import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { database } from '/home/akmal-izuddin/Desktop/the-odin-project/photo-tagging-app/src/firebase-config.js';

const Scoreboard = ( props ) => {
  const { replayGame } = props;

  const [ scoreArray, setScoreArray ] = useState([]);

  const handleClick = () => {
    replayGame();
    document.getElementById( 'scoreboard-overlay' ).style.display = 'none';
  };

  return (
    <div id='scoreboard-overlay' >
      <div className='scoreboard'>
        <h1>SCOREBOARD</h1>
        <div className='score-container'>
          { scoreArray.map(( obj ) => {
            return <div className='score'>
              <p>{ obj.index + 1 }</p>
              <p>{ obj.name }</p>
              <p>{ obj.time }</p>
              <p>{ obj.date }</p>
            </div>
          }) }
        </div>
        <button onClick={ handleClick }>NEW GAME</button>
      </div>
    </div>
  );
};

export { Scoreboard };