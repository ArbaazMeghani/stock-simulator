import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TransactionOption({onChangeHandler}) {
  return (
    <Form.Group className="mt-4" as={Row}>
      <Form.Label xs={6} column>
        Quantity
      </Form.Label>
      <Col>
        <Form.Control type="number" onChange={onChangeHandler} defaultValue={0}/>
      </Col>
    </Form.Group>
  );
}