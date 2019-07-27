import React from 'react';
import Container from 'react-bootstrap/Container';
import InformationPane from './InformationPane';
import TransactionPane from './TransactionPane';

export default function RightSidebar() {
  return (
    <Container fluid>
      <InformationPane />
      <TransactionPane />
    </Container>
  );
}