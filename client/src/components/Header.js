import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">Stock Simulator</Navbar.Brand>
        <ButtonToolbar>
          <Button className="mx-2" variant="secondary">Login</Button>
          <Button className="mx-2" variant="primary">Sign Up!</Button>
        </ButtonToolbar>
      </Navbar>
    );
  }
}