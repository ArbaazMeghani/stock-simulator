import React from 'react';
import SearchBar from './SearchBar';
import WatchList from './WatchList';

export default function LeftSidebar() {
  return (
    <div className="mt-2">
      <SearchBar />
      <WatchList />
    </div>
  );
}