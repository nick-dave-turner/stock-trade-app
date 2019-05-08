// @flow
import * as actionTypes from '../constants';
import type { TradeSubmission } from '../../types/tradeTypes';

export const addTrade = (payload: TradeSubmission) => ({
  type: actionTypes.ADD_TRADE,
  payload
});

export const getTrades = () => ({
  type: actionTypes.GET_TRADES
});
