import React from 'react';

const Scoreboard = ( props ) => {
  const { replayGame, scoreArray } = props;

  const handleClick = () => {
    replayGame();
    document.getElementById( 'scoreboard-overlay' ).style.display = 'none';
  };

  return (
    <div id='scoreboard-overlay' >
      <div className='scoreboard'>
        <h1>SCOREBOARD</h1>
        <div className='score-container'>
          <table>
            <thead>
              <tr>
                <th>PLACE</th>
                <th>NAME</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              { scoreArray.map(( obj ) => {
                return <tr key={ scoreArray.indexOf( obj ) } className='score'>
                  <td>{ scoreArray.indexOf( obj ) + 1 }</td>
                  <td>{ obj.name }</td>
                  <td>{ `${obj.time} SECONDS` }</td>
                </tr>
              }) }
            </tbody>
          </table>
        </div>
        
        <button onClick={ handleClick }>NEW GAME</button>
      </div>
    </div>
  );
};

export { Scoreboard };