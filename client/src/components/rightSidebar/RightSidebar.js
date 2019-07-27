import React from 'react';
import InformationPane from './InformationPane';
import TransactionPane from './TransactionPane';

export default function RightSidebar() {
  return (
    <div className="mt-5">
      <InformationPane />
      <TransactionPane />
    </div>
  );
}