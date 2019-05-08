import React from 'react';
import { shallow } from 'enzyme';

import StocksTable, { formatData } from './';
import { v4 as uuid } from 'uuid';

const MOCK_DATA = [
  {
    dividendYield: null,
    fixedDividend: null,
    geometricMean: null,
    id: uuid(),
    lastDividend: 0,
    parValue: 100,
    peRatio: null,
    stockSymbol: 'TEA',
    type: 'common',
    volumeWeightedStockPrice: null
  },
  {
    dividendYield: null,
    fixedDividend: null,
    geometricMean: null,
    id: uuid(),
    lastDividend: 8,
    parValue: 100,
    peRatio: null,
    stockSymbol: 'POP',
    type: 'common',
    volumeWeightedStockPrice: null
  }
];

const MOCK_FORMATTED_DATA = [
  {
    dividendYield: null,
    geometricMean: null,
    peRatio: null,
    stockSymbol: 'TEA',
    volumeWeightedStockPrice: null
  },
  {
    dividendYield: null,
    geometricMean: null,
    peRatio: null,
    stockSymbol: 'POP',
    volumeWeightedStockPrice: null
  }
];

const handleGetStocksMock = jest.fn();

describe('StocksTable component', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <StocksTable
        stocksData={MOCK_DATA}
        handleGetStocks={handleGetStocksMock}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call handleGetStocks on load', () => {
    shallow(
      <StocksTable
        stocksData={MOCK_DATA}
        handleGetStocks={handleGetStocksMock}
      />
    );
    expect(handleGetStocksMock).toHaveBeenCalled();
  });

  describe('When calling formattedData', () => {
    it('should return formatted data', () => {
      const result = formatData(MOCK_DATA);
      expect(result).toEqual(MOCK_FORMATTED_DATA);
    });
  });
});
