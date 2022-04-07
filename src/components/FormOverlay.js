import React, { useState } from 'react';

const Form = ( props ) => {
  const { count, setCount, getScores, saveScore } = props;

  const [ playerName, setPlayerName ] = useState('');

  const closeForm = () => {
    document.getElementById( 'form-overlay' ).style.display = 'none';
    getScores();
    document.getElementById( 'scoreboard-overlay' ).style.display = 'block';
  };

  const submitTime = () => {
    document.getElementById( 'form-overlay' ).style.display = 'none';
    setCount(0);
    getScores();
    document.getElementById( 'scoreboard-overlay' ).style.display = 'block';
  };

  const handleChange = (e) => {
    setPlayerName( e.target.value )
  };

  const handleSubmit = ( nameText ) => {
    submitTime();
    saveScore( nameText );
  };

  return (
    <div id='form-overlay'>
      <form onSubmit={ (e) => { e.preventDefault();
      handleSubmit( playerName ) } }>
        <h1>{ `You finished in ${ count } seconds` }</h1>
        <p>Submit your time in the leaderboard</p>
        <label htmlFor='nameInput' >Enter your username</label>
        <input id='nameInput' type='text' value={ playerName } onChange={ handleChange } />
        <div className='btnContainer'>
          <button onClick={closeForm}>Close</button>
          <button type='submit'>Submit Time</button>
        </div>
      </form>
    </div>
  );
};

export { Form }