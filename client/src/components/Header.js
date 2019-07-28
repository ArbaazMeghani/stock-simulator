import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import AuthButtons from './account/AuthButtons';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">Stock Simulator</Navbar.Brand>
        <AuthButtons />
      </Navbar>
    );
  }
}