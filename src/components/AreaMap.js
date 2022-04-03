import React from 'react';

const AreaMap = ( props ) => {
  const { item, itemFunc, handleClick } = props;

  const handleClickArea = (e) => {
    itemFunc();
    handleClick(e);
  };

  return (
    <area shape='rect' coords={ item.coords } alt={ item.name } onClick={ handleClickArea } />
  );
};

export { AreaMap };