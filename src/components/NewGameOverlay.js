import React from 'react';

import { Icon } from './Icon';

const NewGame = ( props ) => {
  const { findItems, startGame } = props;

  return (
    <div id='overlay'>
      <div className='startContainer'>
          <h1>FIND US</h1>
          <div className='findUsList'>
            { findItems.map(( item ) => {
              return <Icon key={ item.id } icon={ item.icon } name={ item.name } />;
            }) }
          </div>
          <button onClick={ startGame } > NEW GAME </button>
        </div>
    </div>
  );
};

export { NewGame };