import * as actionTypes from '../../actions/constants';
import reducer, { initialState } from './';

const DATE = new Date(
  'Sat May 04 2019 17:47:10 GMT+0100 (British Summer Time)'
);

const TRADE = {
  id: 1,
  price: 100,
  quantity: 200,
  stockSymbol: 'TEST',
  timestamp: DATE
};

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

describe('Trade Reducer', () => {
  beforeEach(() => {
    const mockedDate = DATE;
    const originalDate = Date;
    global.Date = jest.fn(() => mockedDate);
    global.Date.setDate = originalDate.setDate;
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TRADE', () => {
    expect(
      reducer(initialState, { type: actionTypes.ADD_TRADE, payload: TRADE })
    ).toEqual({
      tradesData: [TRADE]
    });
  });

  it('should handle GET_TRADES', () => {
    expect(reducer(initialState, { type: actionTypes.GET_TRADES })).toEqual({
      tradesData: []
    });
  });
});
