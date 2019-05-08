// @flow
import * as actionTypes from '../../actions/constants';
import type { Actions } from '../../actions/constants';
import type { StockState } from '../../types/stockTypes';
import { MOCK_STOCKS, MOCK_STOCK_SYMBOLS } from '../__MOCKS__/data';

export const initialState = {
  stocksData: [],
  stockSymbols: []
};

const reducer = (state: StockState = initialState, actions: Actions) => {
  switch (actions.type) {
    case actionTypes.GET_STOCKS:
      return {
        ...state,
        // @DESC - Simulates loading of existing stocks on load.
        // This would be replaced with api call in real world.
        // This could come from a db or local storage for example.
        stocksData: MOCK_STOCKS
      };

    case actionTypes.GET_STOCK_SYMBOLS:
      return {
        ...state,
        // @DESC - Simulates loading of existing stock symbols on load.
        // This would be replaced with api call in real world.
        // This could come from a db or local storage for example.
        stockSymbols: MOCK_STOCK_SYMBOLS
      };

    case actionTypes.UPDATE_STOCK:
      return {
        ...state,
        stocksData: actions.payload
      };

    default:
      return state;
  }
};

export default reducer;
