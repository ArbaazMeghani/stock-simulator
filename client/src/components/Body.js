import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LeftSidebar from './leftSidebar/LeftSidebar';
import RightSidebar from './rightSidebar/RightSidebar';
import ChartArea from './chartArea/ChartArea';

export default class Body extends React.Component {
  render() {
    return (
      <Container fluid>
         <Row>
          <Col className="border-right"> <LeftSidebar /> </Col>
          <Col xs={8}> <ChartArea /> </Col>
          <Col className="border-left"> <RightSidebar /> </Col>
        </Row>
      </Container>
    );
  }
}