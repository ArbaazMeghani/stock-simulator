import React from 'react';
import MainChart from './MainChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { addSymbolToWatchList, removeSymbolFromWatchList } from '../../actions/authAction';

const addToWatchList = gql`
  mutation addToWatchList($symbol: String!) {
    addToWatchList(symbol: $symbol)
  }
`;

const removeFromWatchList = gql`
  mutation removeFromWatchList($symbol: String!) {
    removeFromWatchList(symbol: $symbol)
  }
`;

class ChartArea extends React.Component {
  watchButton = () => {
    return (
      <Mutation mutation={addToWatchList} variables={{symbol: this.props.symbol}}>
        {watch => <Button onClick={() => this.watchHandler(watch)} variant="outline-success">
          Watch
        </Button>}
      </Mutation>
    );
  }

  unwatchButton = () => {
    return (
      <Mutation mutation={removeFromWatchList} variables={{symbol: this.props.symbol}}>
        {unwatch => <Button onClick={() => this.unwatchHandler(unwatch)} variant="outline-success">
          Unwatch
        </Button>}
      </Mutation>
    );
  }

  watchListButton = () => {
    let exists = false;
    if(this.props.user) {
      for(let i = 0; i < this.props.user.watchList.length; i++) {
        if(this.props.symbol === this.props.user.watchList[i]) {
          exists = true;
        }
      }
    }

    if(exists) {
      return this.unwatchButton();
    }
    return this.watchButton();
  }

  watchHandler = (watch) => {
    if(this.props.user) {
      watch();
      this.props.addSymbolToWatchList(this.props.symbol);
    }
    else {
      console.log("Not Logged In");
    }
  }

  unwatchHandler = (unwatch) => {
    if(this.props.user) {
      unwatch();
      this.props.removeSymbolFromWatchList(this.props.symbol);
    }
    else {
      console.log("Not Logged In");
    }
  }

  render() {
    return (
      <div className="mt-2">
        <Row>
          <Col className="mr-auto mx-4" xs={9}>
            <h5> Symbol: {this.props.symbol} </h5>
          </Col>
          <Col className="mx-4">
            {this.watchListButton()}
          </Col>
        </Row>
        <MainChart />
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

const mapDispatchToProps = dispatch => ({
  addSymbolToWatchList: (symbol) => dispatch(addSymbolToWatchList(symbol)),
  removeSymbolFromWatchList: (symbol) => dispatch(removeSymbolFromWatchList(symbol))
 })

export default connect(mapStateToProps, mapDispatchToProps)(ChartArea);