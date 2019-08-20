import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import { beginAuthAction, updateTokenAction } from '../../../actions/authAction';
import gql from 'graphql-tag';

const signup = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      _id,
      username
    }
  }
`;

const login = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  formType() {
    if(this.props.authForm === 0) {
      return <LoginForm switchFormType={this.switchFormType} setUsername={this.setUsername} setPassword={this.setPassword}/>
    }
    return <RegisterForm switchFormType={this.switchFormType} setUsername={this.setUsername} setPassword={this.setPassword} setEmail={this.setEmail}/>
  }

  loginButton() {
    return (
      <Mutation mutation={login} variables={{
        username: this.state.username,
        password: this.state.password
      }}>
        {loginMutation => <Button onClick={() => this.loginHandler(loginMutation)}>{this.props.authTitle}</Button>}
      </Mutation>
    );
  }

  signupButton() {
    return (
      <Mutation mutation={signup} variables={{
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }}>
        {signupMutation => <Button onClick={() => this.signupHandler(signupMutation)}>{this.props.authTitle}</Button>}
      </Mutation>
    );
  }

  formButton() {
    if(this.props.authForm === 0) {
      return this.loginButton();
    }
    return this.signupButton();
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

  setEmail = (email) => {
    this.setState({
      email: email
    });
  }

  loginHandler = (loginMutation) => {
    loginMutation()
    .then(res => {
      this.props.updateTokenAction(res.data.login)
    })
  }

  signupHandler = (signupMutation) => {
    signupMutation()
    .then(res => {
      this.handleClose();
    });
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
          {this.formButton()}
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
  beginAuthAction: (authInfo) => dispatch(beginAuthAction(authInfo)),
  updateTokenAction: (token) => dispatch(updateTokenAction(token))
 })

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);