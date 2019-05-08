// @flow
import React from 'react';

import type { Stock } from '../../types/stockTypes';
import Widget from '../Widget';
import Table from '../Table';

type StocksTableUi = {
  dividendYield: number,
  geometricMean: number,
  peRatio: number,
  stockSymbol: string,
  volumeWeightedStockPrice: number
};

type StocksTableProps = {
  stocksData: Array<Stock>,
  handleGetStocks: () => void
};

const colDefs = [
  'Stock',
  'Dividend Yield',
  'P/E Ratio',
  'Geometric Mean',
  'Volume Weighted Stock Price'
];

export const formatData = (data: Array<Stock>): Array<StocksTableUi> => {
  return data.map(item => ({
    stockSymbol: item.stockSymbol,
    dividendYield: item.dividendYield,
    peRatio: item.peRatio,
    geometricMean: item.geometricMean,
    volumeWeightedStockPrice: item.volumeWeightedStockPrice
  }));
};

export default class StocksTable extends React.Component<StocksTableProps> {
  componentDidMount(): void {
    this.props.handleGetStocks();
  }

  render() {
    return (
      <Widget title="My Stocks">
        <Table colDefs={colDefs} rowData={formatData(this.props.stocksData)} />
      </Widget>
    );
  }
}
