import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';

class AuthModal extends React.Component {
  formType() {
    if(this.props.authForm === 0) {
      return <LoginForm />
    }
    return <RegisterForm />
  }

  render() {
    return (
      <Modal show={this.props.authShow} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.authTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.formType()}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Login</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return {
    authShow: authReducer.show,
    authTitle: authReducer.title,
    authForm: authReducer.formType
  };
}

export default connect(mapStateToProps, null)(AuthModal);