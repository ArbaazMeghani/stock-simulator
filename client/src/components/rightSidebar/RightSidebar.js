import React from 'react';
import InformationPane from './InformationPane';
import TransactionPane from './TransactionPane';

export default function RightSidebar() {
  return (
    <div className="mt-2">
      <InformationPane />
      <TransactionPane />
      <div style={ {height:"50px"} }>

      </div>
    </div>
  );
}