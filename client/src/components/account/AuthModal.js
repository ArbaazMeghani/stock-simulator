import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const style = {
  maxWidth: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10ox"
}

export default function AuthModal() {
  return (
    <Modal show={false} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group style={style}>
            <Form.Control type="text" placeholder="username"/>
          </Form.Group>

          <Form.Group>
            <Form.Control style={style} type="password" placeholder="Password"/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit">Login</Button>
      </Modal.Footer>
    </Modal>
  );
}
