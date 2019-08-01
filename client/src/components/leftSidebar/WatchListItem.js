import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';

class WatchListItem extends React.Component {
  handleClick = () => {
    this.props.simpleAction(this.props.symbol);
  };

  render() {
    return (
      <div className="mt-2" onClick={this.handleClick}>
        <h6> {this.props.symbol} </h6>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: (symbol) => dispatch(simpleAction(symbol))
 })

export default connect(null, mapDispatchToProps)(WatchListItem);