import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; 
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { connect } from 'react-redux';

let uri = ''

if(process.env.NODE_ENV === 'production') {
  uri = '/graphql';
}
else {
  uri = 'http://localhost:4000/graphql'
}

class App extends React.Component {
  client = new ApolloClient({
    uri,
    headers: {
      authorization: this.props.token
    },
    onError: ({ networkError, graphQLErrors }) => {
      console.log(this.props.token);
      console.log('graphQLErrors', graphQLErrors);
      console.log('networkError', networkError);
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
  const { tokenReducer } = state;
  return {
    token: tokenReducer.token
  };
}

export default connect(mapStateToProps, null)(App);
