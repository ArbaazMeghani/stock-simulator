import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TransactionInfo({shares, price}) {
  return (
    <>
      <Form.Group as={Row}>
        <Form.Label xs={6} column>
          Shares
        </Form.Label>
        <Col>
          <Form.Control type="number" readOnly defaultValue={shares} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label xs={6} column>
          Price
        </Form.Label>
        <Col>
          <Form.Control type="number" readOnly defaultValue={price} />
        </Col>
      </Form.Group>
    </>
  );
}