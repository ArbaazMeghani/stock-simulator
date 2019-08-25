import React from 'react';
import MainChart from './MainChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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
      <Mutation mutation={addToWatchList} variables={{symbol: this.props.symbol}}>
        {unwatch => <Button onClick={unwatch} variant="outline-success">
          Watch
        </Button>}
      </Mutation>
    );
  }

  watchListButton = () => {
    if(this.props.user && this.props.symbol in this.props.user.watchList) {
      return this.unwatchButton();
    }
    return this.watchButton();
  }

  watchHandler = (watch) => {
    if(this.props.user) {
      watch();
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

export default connect(mapStateToProps, null)(ChartArea);