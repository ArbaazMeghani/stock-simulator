import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; 
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { connect } from 'react-redux';

class App extends React.Component {
  client = new ApolloClient({
    uri: '/graphql',
    headers: {
      authorization: this.props.token
    }
  });

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Header />
        <Body />
        <Footer />
      </ApolloProvider>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return {
    token: 'TOKEN'
  };
}

export default connect(mapStateToProps, null)(App);
