import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Navbar.Text className="mr-auto">Created by: Arbaaz Meghani</Navbar.Text>
      <Button variant="outline-light" href="https://github.com/ArbaazMeghani/stock-simulator">Source Code</Button>
    </Navbar>
  );
}