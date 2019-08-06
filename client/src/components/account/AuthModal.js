import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';

class AuthModal extends React.Component {
  render() {
    return (
      <Modal show={false} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
          <RegisterForm />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Login</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(AuthModal);