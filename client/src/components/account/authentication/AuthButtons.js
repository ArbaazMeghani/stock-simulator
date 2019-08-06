import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AuthModal from './AuthModal';

export default class AuthButtons extends React.Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button className="mx-2" variant="secondary">Login</Button>
          <Button className="mx-2" variant="primary">Sign Up!</Button>
        </ButtonToolbar>

        <AuthModal />
      </div>
    );
  }
}