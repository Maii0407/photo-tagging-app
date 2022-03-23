import React from 'react';

const Icon = ( props ) => {
  return (
    <div className='Icon'>
      <img src={ props.icon } alt={ props.name } />
      <p>{ props.name }</p>
    </div>
  );
};

export { Icon };