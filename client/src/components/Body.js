import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MainChart from './chartArea/MainChart';
import LeftSidebar from './leftSidebar/LeftSidebar';
import RightSidebar from './rightSidebar/RightSidebar';

export default class Body extends React.Component {
  render() {
    return (
      <Container fluid>
         <Row>
          <Col className="border-right"> <LeftSidebar /> </Col>
          <Col xs={8}> <MainChart /> </Col>
          <Col className="border-left"> <RightSidebar /> </Col>
        </Row>
      </Container>
    );
  }
}