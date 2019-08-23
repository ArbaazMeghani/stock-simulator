import React from 'react';
import WatchListItem from './WatchListItem';

export default function DefaultWatchList() {
  return (
    <div>
      <WatchListItem symbol="AAPL"/>
      <WatchListItem symbol="MSFT"/>
      <WatchListItem symbol="FB"/>
      <WatchListItem symbol="GOOG"/>
      <WatchListItem symbol="AMZN"/>
    </div>
  )
}