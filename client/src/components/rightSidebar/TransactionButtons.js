import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import { buyStock, sellStock } from '../../actions/authAction';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const buyShares = gql`
  mutation buyStock($symbol: String!, $price: Float!, $quantity: Int!) {
    buyStock(username: $symbol, email: $price, password: $quantity)
  }
`;

const sellShares = gql`
  mutation sellStock($symbol: String!, $price: Float!, $quantity: Int!) {
    sellStock(username: $symbol, email: $price, password: $quantity)
  }
`;

class TransactionButtons extends React.Component {
  render() {
    return (
      <>
        <Form.Group as={Row}>
          <Col>
            <Button variant="success" className="mr-auto mx-4">
              Buy
            </Button>
          </Col>

          <Col>
            <Button variant="danger" className="mx-4">
              Sell
            </Button>
          </Col>
        </Form.Group>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { simpleReducer, authReducer } = state;
  return {
    symbol: simpleReducer.symbol,
    user: authReducer.user
  };
}

const mapDispatchToProps = dispatch => ({
  buyStock: (symbol) => dispatch(buyStock(symbol)),
  sellStock: (symbol) => dispatch(sellStock(symbol))
})

 export default connect(mapStateToProps, mapDispatchToProps)(TransactionButtons);