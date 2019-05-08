import * as actionTypes from '../../actions/constants';
import { mapStateToProps, mapDispatchToProps } from './';

const initialState = {
  stocks: {
    stocksData: [],
    stockSymbols: []
  },
  trades: {
    tradesData: []
  }
};

describe('AppContainer', () => {
  describe('mapStateToProps', () => {
    expect(mapStateToProps(initialState)).toEqual({
      stocksData: [],
      stockSymbols: [],
      tradesData: []
    });
  });

  describe('mapDispatchToProps', () => {
    it('should handleAddTrade dispatch', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).handleAddTrade();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actionTypes.ADD_TRADE
      });
    });

    it('should handleGetStocks dispatch', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).handleGetStocks();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actionTypes.GET_STOCKS
      });
    });

    it('should handleGetStockSymbols dispatch', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).handleGetStockSymbols();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actionTypes.GET_STOCK_SYMBOLS
      });
    });

    it('should handleGetTrades dispatch', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).handleGetTrades();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actionTypes.GET_TRADES
      });
    });
  });
});
