import React from 'react';

export default function WatchListItem( {symbol} ) {
  const handleClick = () => {
    console.log(symbol);
  };
  return (
    <div className="mt-2" onClick={handleClick}>
      <h6> {symbol} </h6>
    </div>
  );
}