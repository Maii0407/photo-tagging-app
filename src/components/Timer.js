import React from 'react';

const Timer = ( props ) => {
  const { count } = props;
  return (
    <div className='Timer'>
      <h1>{ `${ count } SECONDS` }</h1>
    </div>
  );
};

export { Timer };