import React from 'react';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
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

const httpLink = new HttpLink({ uri });

class App extends React.Component {
  authLink = new ApolloLink((operation, forward) => {
    const token = this.props.token;
    
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  
    return forward(operation);
  });

  client = new ApolloClient({
    link: this.authLink.concat(httpLink),
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
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
