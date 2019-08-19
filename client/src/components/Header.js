import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import AuthButtons from './account/authentication/AuthButtons';
import { connect } from 'react-redux';
import Profile from './account/profile/Profile';
import jwtDecode from 'jwt-decode';
import { saveUserAction } from '../actions/authAction';

class Header extends React.Component {

  accountArea() {
    if(this.props.token) {
      const decoded = jwtDecode(this.props.token);
      this.props.saveUserAction(decoded.user);
      return <Profile username={decoded.user.username}/>;
    }
    return <AuthButtons />;
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">Stock Simulator</Navbar.Brand>
        {this.accountArea()}
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return {
    token: authReducer.token
  };
}

const mapDispatchToProps = dispatch => ({
  saveUserAction: (user) => dispatch(saveUserAction(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Header);