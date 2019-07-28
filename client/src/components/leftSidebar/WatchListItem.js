import React from 'react';

export default function WatchListItem( {symbol} ) {
  return (
    <div className="mt-2">
      <h6> {symbol} </h6>
    </div>
  );
}