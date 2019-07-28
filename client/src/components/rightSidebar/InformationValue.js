import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InformationValue( {label, value} ) {
  return (
    <Form.Group as={Row}>
      <Form.Label xs={6} column>
        {label}
      </Form.Label>
      <Col>
        <Form.Control type="text" readOnly defaultValue={value} />
      </Col>
    </Form.Group>
  );
}