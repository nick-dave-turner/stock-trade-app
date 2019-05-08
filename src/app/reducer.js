// @flow
import { combineReducers } from 'redux';

import type { StockState } from '../types/stockTypes';
import type { TradeState } from '../types/tradeTypes';

import stockReducer from '../reducers/stocks';
import tradeReducer from '../reducers/trades';

export type GlobalState = {
  stocks: StockState,
  trades: TradeState
};

export default combineReducers({
  stocks: stockReducer,
  trades: tradeReducer
});
