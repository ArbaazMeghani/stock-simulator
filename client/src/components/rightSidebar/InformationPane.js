import React from 'react';
import Form from 'react-bootstrap/Form';
import InformationValue from './InformationValue';
import { connect } from 'react-redux';

class InformationPane extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <h4> Information </h4>
        <Form className="mt-4">
          <InformationValue label="Symbol" value={this.props.symbol}/>
          <InformationValue label="Company" value="Apple Inc."/>
          <InformationValue label="Price" value="250.00"/>
          <InformationValue label="Open" value="245.00"/>
          <InformationValue label="Close" value="240.00"/>
        </Form>
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