import React from 'react';
import { connect } from 'react-redux';
import InformationItem from './InformationItem';

class InformationPane extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <h4> Information </h4>
        <div className="mt-4">
          <InformationItem label="Symbol" value={this.props.symbol}/>
          <InformationItem label="Company" value={"Apple Inc."}/>
          <InformationItem label="Price" value={250}/>
          <InformationItem label="Open" value={235}/>
          <InformationItem label="Close" value={255}/>
          <InformationItem label="Vol." value={"1.38%"}/>
        </div>
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

export default connect(mapStateToProps, null)(InformationPane);