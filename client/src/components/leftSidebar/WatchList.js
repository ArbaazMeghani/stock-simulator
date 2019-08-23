import React from 'react';
import WatchListItem from './WatchListItem';
import { connect } from 'react-redux';
import DefaultWatchList from './DefaultWatchList';

class WatchList extends React.Component {
  generateWatchList = () => {
    if(this.props.user === undefined) {
      return <DefaultWatchList />
    }

    const result = this.props.user.watchList.map(symbol => <WatchListItem symbol={symbol} key={symbol}/>)

    return result;
  }

  render() {
    return (
      <div className="mt-5">
        <h4> Watch List</h4>
        <div className="mt-4">
          {this.generateWatchList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return {
    user: authReducer.user
  };
}

export default connect(mapStateToProps, null)(WatchList);