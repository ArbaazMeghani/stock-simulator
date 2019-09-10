import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import TransactionInfo from './TransactionInfo';
import TransactionOption from './TransactionOption';
import TransactionButtons from './TransactionButtons';

class TransactionPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  findOwnedStock() {
    let stocks = undefined;
    if(this.props.user) {
      for(let i = 0; i < this.props.user.stocks.length; i++) {
        if(this.props.user.stocks[i].symbol === this.props.symbol) {
          stocks = this.props.user.stocks[i];
        }
      }
    }
    return stocks;
  }

  quantityUpdateHandler = (event) => {
    this.setState({
      quantity: event.target.value
    });
  }

  render() {
    const stocks = this.findOwnedStock();
    let shares = 0;
    let price = 0;
    if(stocks) {
      shares = stocks.shares;
      price = stocks.price
    }
    return (
      <div className="mt-5">
        <h4> Transaction </h4>
        <Form className="mt-4">
          <TransactionInfo shares={shares} price={price}/>
          <TransactionOption onChangeHandler={this.quantityUpdateHandler} />
          <TransactionButtons quantity={this.state.quantity}/>
        </Form>
      </div>
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

 export default connect(mapStateToProps, null)(TransactionPane);