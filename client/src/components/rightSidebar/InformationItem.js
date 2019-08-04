import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InformationItem( {label, value} ) {
  return (
    <Row>
      <Col>
        <p> {label} </p>
      </Col>
      <Col>
        <p> <b>{value}</b> </p>
      </Col>
    </Row>
  );
}