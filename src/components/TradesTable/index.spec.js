import React from 'react';
import { shallow } from 'enzyme';

import TradesTable, { formatData } from './';

const MOCK_DATA = [
  {
    id: 'ABC12345',
    price: 100,
    quantity: 200,
    stockSymbol: 'TEST',
    timestamp: new Date(
      'Sat May 04 2019 17:47:10 GMT+0100 (British Summer Time)'
    )
  },
  {
    id: 'ABC12345',
    price: 100,
    quantity: 200,
    stockSymbol: 'TEST',
    timestamp: new Date(
      'Sun May 05 2019 17:47:10 GMT+0100 (British Summer Time)'
    )
  },
  {
    id: 'ABC12345',
    price: 100,
    quantity: 200,
    stockSymbol: 'TEST',
    timestamp: new Date(
      'Sun May 05 2019 12:12:10 GMT+0100 (British Summer Time)'
    )
  }
];

const MOCK_FORMATTED_DATA = [
  {
    price: MOCK_DATA[1].price,
    quantity: MOCK_DATA[1].quantity,
    stockSymbol: MOCK_DATA[1].stockSymbol,
    timestamp: MOCK_DATA[1].timestamp.toLocaleString()
  },
  {
    price: MOCK_DATA[2].price,
    quantity: MOCK_DATA[2].quantity,
    stockSymbol: MOCK_DATA[2].stockSymbol,
    timestamp: MOCK_DATA[2].timestamp.toLocaleString()
  },
  {
    price: MOCK_DATA[0].price,
    quantity: MOCK_DATA[0].quantity,
    stockSymbol: MOCK_DATA[0].stockSymbol,
    timestamp: MOCK_DATA[0].timestamp.toLocaleString()
  }
];

const handleGetTradesMock = jest.fn();

describe('TradesTable component', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <TradesTable
        tradesData={MOCK_DATA}
        handleGetTrades={handleGetTradesMock}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call handleGetTrades on load', () => {
    shallow(
      <TradesTable
        tradesData={MOCK_DATA}
        handleGetTrades={handleGetTradesMock}
      />
    );
    expect(handleGetTradesMock).toHaveBeenCalled();
  });

  describe('When calling formattedData', () => {
    it('should return formatted data', () => {
      const result = formatData(MOCK_DATA);
      expect(result).toEqual(MOCK_FORMATTED_DATA);
    });
  });
});
