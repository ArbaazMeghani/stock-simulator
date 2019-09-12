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
    buyStock(symbol: $symbol, price: $price, quantity: $quantity)
  }
`;

const sellShares = gql`
  mutation sellStock($symbol: String!, $price: Float!, $quantity: Int!) {
    sellStock(symbol: $symbol, price: $price, quantity: $quantity)
  }
`;

class TransactionButtons extends React.Component {
  render() {
    return (
      <>
        <Form.Group as={Row}>
          <Col>
            <Mutation mutation={buyShares} variables={{
              symbol: this.props.symbol,
              price: 100.0,
              quantity: parseInt(this.props.quantity)
            }}>
              {buy => <Button onClick={buy} variant="success" className="mr-auto mx-4">Buy</Button>}
            </Mutation>
          </Col>

          <Col>
            <Mutation mutation={sellShares} variables={{
              symbol: this.props.symbol,
              price: 100.0,
              quantity: parseInt(this.props.quantity)
            }}>
              {sell => <Button onClick={sell} variant="danger" className="mx-4">Sell</Button>}
            </Mutation>
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