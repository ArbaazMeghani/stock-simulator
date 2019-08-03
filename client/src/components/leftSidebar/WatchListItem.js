import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';

class WatchListItem extends React.Component {
  handleClick = () => {
    this.props.simpleAction(this.props.symbol);
  };

  render() {
    return (
      <Col className="mt-2" as={Button} onClick={this.handleClick} variant="light" >
        <h6> {this.props.symbol} </h6>
      </Col>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: (symbol) => dispatch(simpleAction(symbol))
 })

export default connect(null, mapDispatchToProps)(WatchListItem);