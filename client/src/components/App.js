import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; 
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Body />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
