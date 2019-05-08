import * as actionTypes from '../constants';
import * as actions from './';

import {
  MOCK_STOCKS,
  MOCK_TRADES,
  MOCK_TRADE,
  MOCK_RESULT
} from '../__MOCKS__/data';

describe('Stock Actions', () => {
  it('should create an action to getStocks', () => {
    const expectedAction = { type: actionTypes.GET_STOCKS };
    expect(actions.getStocks()).toEqual(expectedAction);
  });

  it('should create an action to getStockSymbols', () => {
    const expectedAction = { type: actionTypes.GET_STOCK_SYMBOLS };
    expect(actions.getStockSymbols()).toEqual(expectedAction);
  });

  it('should create an action to updateStock', () => {
    const payload = 'TESTING';
    const expectedAction = { type: actionTypes.UPDATE_STOCK, payload };
    expect(actions.updateStock(payload)).toEqual(expectedAction);
  });
});

describe('Stock handleUpdateStock thunk', () => {
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  getStateMock.mockReturnValue({
    stocks: {
      stocksData: MOCK_STOCKS
    },
    trades: {
      tradesData: MOCK_TRADES
    }
  });

  beforeEach(() => {
    actions.handleUpdateStock(MOCK_TRADE)(dispatchMock, getStateMock);
  });

  it('should', () => {
    expect(dispatchMock).toHaveBeenCalledWith({
      payload: MOCK_RESULT,
      type: 'update_stock'
    });
  });
});
