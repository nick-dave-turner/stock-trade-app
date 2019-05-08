// @flow
export type Stock = {
  dividendYield: number,
  fixedDividend: number,
  geometricMean: number,
  id: string,
  lastDividend: number,
  lastPrice: number,
  parValue: number,
  peRatio: number,
  stockSymbol: string,
  type: string,
  volumeWeightedStockPrice: number
};

export type StockSymbols = {
  id: string,
  stockSymbol: string
};

export type StockState = {
  stocksData: Array<Stock>,
  stockSymbols: Array<StockSymbols>
};
