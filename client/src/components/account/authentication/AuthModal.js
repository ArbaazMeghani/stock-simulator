import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { beginAuthAction } from '../../../actions/authAction';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  formType() {
    if(this.props.authForm === 0) {
      return <LoginForm switchFormType={this.switchFormType} setUsername={this.setUsername} setPassword={this.setPassword}/>
    }
    return <RegisterForm switchFormType={this.switchFormType} setUsername={this.setUsername} setPassword={this.setPassword} setEmail={this.setEmail}/>
  }

  handleClose = () => {
    this.props.beginAuthAction({show: false});
  }

  switchFormType = () => {
    if(this.props.authForm === 0) {
      this.props.beginAuthAction(this.props.registerAuthInfo);
    }
    else {
      this.props.beginAuthAction(this.props.loginAuthInfo);
    }
  }

  setUsername = (username) => {
    this.setState({
      username: username
    });
  }

  setPassword = (password) => {
    this.setState({
      password: password
    });
  }

  setEmail= (email) => {
    this.setState({
      email: email
    });
  }

  submitHandler = () => {
    console.log("Submitting auth form");
    console.log(this.props.authTitle);
  }

  render() {
    return (
      <Modal show={this.props.authShow} aria-labelledby="contained-modal-title-vcenter" centered onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.authTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.formType()}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={this.submitHandler}>{this.props.authTitle}</Button>
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

const mapDispatchToProps = dispatch => ({
  beginAuthAction: (authInfo) => dispatch(beginAuthAction(authInfo))
 })

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);