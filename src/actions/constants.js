// @ flow
export type Actions = {
  type: string,
  payload: any
};

// STOCKS
export const GET_STOCKS = 'get_stocks';
export const GET_STOCK_SYMBOLS = 'get_stock_symbols';
export const UPDATE_STOCK = 'update_stock';

// TRADES
export const ADD_TRADE = 'add_trade';
export const GET_TRADES = 'get_trades';
