import React from 'react';

const Photo = ( props ) => {
  return (
    <div className='Photo'>
      <img src={ props.photo } alt={ props.alt } />
    </div>
  );
};

export { Photo };