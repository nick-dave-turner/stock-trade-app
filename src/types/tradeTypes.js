// @flow
export type TradeSubmission = {
  price: number,
  quantity: number,
  stockSymbol: string
};

export type Trade = TradeSubmission & {
  id: string,
  timestamp: Date
};

export type TradeState = {
  tradesData: Array<Trade>
};
