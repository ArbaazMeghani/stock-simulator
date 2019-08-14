import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class TransactionPane extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <h4> Transaction </h4>
        <Form className="mt-4">
          <Form.Group as={Row}>
            <Form.Label xs={6} column>
              Shares
            </Form.Label>
            <Col>
              <Form.Control type="number" readOnly defaultValue={0} />
            </Col>
          </Form.Group>

          <Form.Group className="mt-5" as={Row}>
            <Form.Label xs={6} column>
              Quantity
            </Form.Label>
            <Col>
              <Form.Control type="number" defaultValue={0} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col>
              <Button variant="success" className="mr-auto mx-4">
                Buy
              </Button>
            </Col>

            <Col>
              <Button variant="danger" className="mx-4">
                Sell
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}