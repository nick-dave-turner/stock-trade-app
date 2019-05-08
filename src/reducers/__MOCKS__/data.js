import { v4 as uuid } from 'uuid';

export const MOCK_STOCKS = [
  {
    dividendYield: 0,
    fixedDividend: 0,
    geometricMean: 0,
    id: uuid(),
    lastDividend: 0,
    lastPrice: 0,
    parValue: 100,
    peRatio: 0,
    stockSymbol: 'TEA',
    type: 'common',
    volumeWeightedStockPrice: 0
  },
  {
    dividendYield: 0,
    fixedDividend: 0,
    geometricMean: 0,
    id: uuid(),
    lastDividend: 8,
    lastPrice: 0,
    parValue: 100,
    peRatio: 0,
    stockSymbol: 'POP',
    type: 'common',
    volumeWeightedStockPrice: 0
  },
  {
    dividendYield: 0,
    fixedDividend: 0,
    geometricMean: 0,
    id: uuid(),
    lastDividend: 23,
    lastPrice: 0,
    parValue: 60,
    peRatio: 0,
    stockSymbol: 'ALE',
    type: 'common',
    volumeWeightedStockPrice: 0
  },
  {
    dividendYield: 0,
    fixedDividend: 2,
    geometricMean: 0,
    id: uuid(),
    lastDividend: 8,
    lastPrice: 0,
    parValue: 100,
    peRatio: 0,
    stockSymbol: 'GIN',
    type: 'preferred',
    volumeWeightedStockPrice: 0
  },
  {
    dividendYield: 0,
    fixedDividend: 0,
    geometricMean: 0,
    id: uuid(),
    lastDividend: 13,
    lastPrice: 0,
    parValue: 250,
    peRatio: 0,
    stockSymbol: 'JOE',
    type: 'common',
    volumeWeightedStockPrice: 0
  }
];

export const MOCK_STOCK_SYMBOLS = MOCK_STOCKS.map(stock => {
  return {
    id: stock.id,
    stockSymbol: stock.stockSymbol
  };
});
