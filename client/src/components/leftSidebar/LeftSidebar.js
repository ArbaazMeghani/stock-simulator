import React from 'react';
import SearchBar from './SearchBar';
import WatchList from './WatchList';
import Container from 'react-bootstrap/Container';

export default function LeftSidebar() {
  return (
    <Container fluid>
      <SearchBar />
      <WatchList />
    </Container>
  );
}