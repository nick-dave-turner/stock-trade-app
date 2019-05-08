import * as actionTypes from '../../actions/constants';
import reducer, { initialState } from './';
import { MOCK_STOCK_SYMBOLS, MOCK_STOCKS } from '../__MOCKS__/data';

const STOCKS = [
  {
    stockSymbol: 'TEST'
  }
];

describe('Stock Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_STOCKS', () => {
    expect(reducer(initialState, { type: actionTypes.GET_STOCKS })).toEqual({
      stocksData: MOCK_STOCKS,
      stockSymbols: []
    });
  });

  it('should handle GET_STOCK_SYMBOLS', () => {
    expect(
      reducer(initialState, { type: actionTypes.GET_STOCK_SYMBOLS })
    ).toEqual({
      stocksData: [],
      stockSymbols: MOCK_STOCK_SYMBOLS
    });
  });

  it('should handle UPDATE_STOCK', () => {
    expect(
      reducer(initialState, { type: actionTypes.UPDATE_STOCK, payload: STOCKS })
    ).toEqual({
      stocksData: STOCKS,
      stockSymbols: []
    });
  });
});
