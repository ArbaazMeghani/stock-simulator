import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Row>
        <Col> Balance: {this.props.balance} </Col>
        <Col> <Button className="mx-2" variant="secondary"> {this.props.username} </Button> </Col>
        </Row>
      </>
    );
  }
}