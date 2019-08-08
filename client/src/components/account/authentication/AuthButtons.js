import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AuthModal from './AuthModal';
import { connect } from 'react-redux';
import { beginAuthAction } from '../../../actions/authAction';

class AuthButtons extends React.Component {
  loginAuthInfo = {
    show: true,
    title: 'Login',
    formType: 0
  }

  registerAuthInfo = {
    show: true,
    title: 'Sign Up',
    formType: 1
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button className="mx-2" variant="secondary" onClick={() => this.props.beginAuthAction(this.loginAuthInfo)}>Login</Button>
          <Button className="mx-2" variant="primary" onClick={() => this.props.beginAuthAction(this.registerAuthInfo)}>Sign Up!</Button>
        </ButtonToolbar>

        <AuthModal />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  beginAuthAction: (authInfo) => dispatch(beginAuthAction(authInfo))
 })

export default connect(null, mapDispatchToProps)(AuthButtons);