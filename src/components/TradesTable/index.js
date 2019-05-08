// @flow
import React from 'react';

import type { Trade } from '../../types/tradeTypes';
import Widget from '../Widget';
import Table from '../Table';

type TradesTableUi = {
  price: number,
  quantity: number,
  stockSymbol: string,
  timestamp: string
};

type TradesTableProps = {
  tradesData: Array<Trade>,
  handleGetTrades: () => void
};

const colDefs = ['Transaction Date', 'Stock', 'Price', 'No. Shares Purchased'];

export const formatData = (data: Array<Trade>): Array<TradesTableUi> => {
  return (
    data
      .map(item => ({
        timestamp: item.timestamp.toLocaleString(),
        stockSymbol: item.stockSymbol,
        price: item.price,
        quantity: item.quantity
      }))
      // @DESC - sort the trades in reverse chronological order.
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  );
};

export default class TradesTable extends React.Component<TradesTableProps> {
  componentDidMount(): void {
    this.props.handleGetTrades();
  }

  render() {
    return (
      <Widget title="Recent Trades">
        <Table colDefs={colDefs} rowData={formatData(this.props.tradesData)} />
      </Widget>
    );
  }
}
