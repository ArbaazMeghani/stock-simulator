import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MainChart from './chartArea/MainChart';

export default class Body extends React.Component {
  render() {
    return (
      <Container fluid>
         <Row>
          <Col>Left Sidebar</Col>
          <Col xs={8}> <MainChart /> </Col>
          <Col>Right Sidebar</Col>
        </Row>
      </Container>
    );
  }
}