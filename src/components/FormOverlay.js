import React from 'react';

const Form = ( props ) => {
  const { count, setCount } = props;

  const closeForm = () => {
    document.getElementById( 'form-overlay' ).style.display = 'none';
  };

  const submitTime = (e) => {
    e.preventDefault()

    document.getElementById( 'form-overlay' ).style.display = 'none';
    setCount(0);
  };

  return (
    <div id='form-overlay'>
      <form onSubmit={ submitTime }>
        <h1>{ `You finished in ${ count } seconds` }</h1>
        <p>Submit your time in the leaderboard</p>
        <label htmlFor='nameInput' >Enter your username</label>
        <input id='nameInput' type='text' />
        <div className='btnContainer'>
          <button onClick={closeForm}>Close</button>
          <button type='submit'>Submit Time</button>
        </div>
      </form>
    </div>
  );
};

export { Form }