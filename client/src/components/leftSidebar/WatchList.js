import React from 'react';
import WatchListItem from './WatchListItem';

export default class WatchList extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <h4> Watch List</h4>
        <div className="mt-4">
          <WatchListItem symbol="AAPL"/>
          <WatchListItem symbol="MSFT"/>
          <WatchListItem symbol="FB"/>
          <WatchListItem symbol="GOOG"/>
          <WatchListItem symbol="AMZN"/>
        </div>
      </div>
    );
  }
}