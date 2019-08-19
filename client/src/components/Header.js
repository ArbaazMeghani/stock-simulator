import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import AuthButtons from './account/authentication/AuthButtons';
import { connect } from 'react-redux';
import Profile from './account/profile/Profile';
import jwtDecode from 'jwt-decode';

class Header extends React.Component {

  accountArea() {
    if(this.props.token) {
      const decoded = jwtDecode(this.props.token);
      return <Profile />;
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

export default connect(mapStateToProps, null)(Header);