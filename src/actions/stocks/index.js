// @flow
import { Dispatch } from 'redux';

import * as actionTypes from '../constants';
import type { GlobalState } from '../../app/reducer';
import type { Stock } from '../../types/stockTypes';
import type { TradeSubmission } from '../../types/tradeTypes';
import StockFactory from './stockFactory';

const stockFactory = StockFactory();

export const getStocks = () => ({
  type: actionTypes.GET_STOCKS
});

export const getStockSymbols = () => ({
  type: actionTypes.GET_STOCK_SYMBOLS
});

export const updateStock = (payload: Array<Stock>) => ({
  type: actionTypes.UPDATE_STOCK,
  payload
});

export const handleUpdateStock = (trade: TradeSubmission) => (
  dispatch: Dispatch,
  getState: () => GlobalState
) => {
  const { stocksData } = getState().stocks;
  const { tradesData } = getState().trades;

  // Ensure price is a number from input.
  const price = parseInt(trade.price, 10);

  // Get all historic trades associated with the stock traded upon.
  const historicalTradeData = tradesData.filter(
    stock => stock.stockSymbol === trade.stockSymbol
  );

  const updatedStocks = stocksData.map(stock => {
    if (stock.stockSymbol === trade.stockSymbol) {
      return {
        ...stock,
        dividendYield: stockFactory.calculateDividendYield(stock, price),
        geometricMean: stockFactory.calculateGeometricMean(historicalTradeData),
        lastPrice: price,
        peRatio: stockFactory.calculatePeRatio(stock, price),
        volumeWeightedStockPrice: stockFactory.calculateVolumeWeightedStockPrice(
          historicalTradeData
        )
      };
    }
    return stock;
  });

  dispatch(updateStock(updatedStocks));
};
