import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class Body extends React.Component {
  render() {
    return (
      <Container fluid>
         <Row>
          <Col style={{backgroundColor: "red"}}>Left Sidebar</Col>
          <Col style={{backgroundColor: "green"}} xs={8}>Chart Area</Col>
          <Col style={{backgroundColor: "blue"}}>Right Sidebar</Col>
        </Row>
      </Container>
    );
  }
}