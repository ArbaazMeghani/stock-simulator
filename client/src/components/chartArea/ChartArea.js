import React from 'react';
import MainChart from './MainChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class ChartArea extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <Row>
          <Col className="mr-auto mx-4" xs={9}>
            <h5> Symbol: {this.props.symbol} </h5>
          </Col>
          <Col className="mx-4">
            <Button variant="outline-success">
              Watch
            </Button>
          </Col>
        </Row>
        <MainChart />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { simpleReducer } = state;
  return {
    symbol: simpleReducer.symbol
  };
}

export default connect(mapStateToProps, null)(ChartArea);