// @flow
import { v4 as uuid } from 'uuid';

import * as actionTypes from '../../actions/constants';
import type { Actions } from '../../actions/constants';
import type { TradeState } from '../../types/tradeTypes';

export const initialState = {
  tradesData: []
};

const tradesReducer = (state: TradeState = initialState, actions: Actions) => {
  switch (actions.type) {
    case actionTypes.ADD_TRADE:
      return {
        ...state,
        tradesData: [
          ...state.tradesData,
          {
            ...actions.payload,
            id: uuid(),
            timestamp: new Date()
          }
        ]
      };

    case actionTypes.GET_TRADES:
      return {
        ...state,
        // @DESC - Simulates loading of existing trades on load.
        // This would be replaced with api call in real world.
        // This could come from a db or local storage for example.
        tradesData: state.tradesData
      };

    default:
      return state;
  }
};

export default tradesReducer;
