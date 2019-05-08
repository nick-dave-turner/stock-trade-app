// @flow
import type { Stock } from '../../types/stockTypes';
import type { Trade } from '../../types/tradeTypes';

const StockFactory = () => {
  const calculateDividendYield = (stock: Stock, price: number) => {
    return stock.type === 'common'
      ? stock.lastDividend / price
      : (stock.fixedDividend * stock.parValue) / price;
  };

  const calculatePeRatio = (stock: Stock, price: number) => {
    // Not sure if lastDividend is the correct value to use here?
    return stock.lastDividend > 0 ? price / stock.lastDividend : 0;
  };

  const calculateGeometricMean = (trades: Array<Trade>): number => {
    // Firstly get all prices for each trade.
    const prices = trades.map(item => parseInt(item.price, 10));
    // Then get the total sum of each price times the last
    const value = prices.reduce((a, b) => a * b);
    // Finally return the sqr N of the value over prices.length.
    return Math.pow(value, 1 / prices.length);
  };

  const calculateVolumeWeightedStockPrice = (trades: Array<Trade>): number => {
    // Firstly return an array of price * quantity for each trade.
    const totals = trades.map(
      item => parseInt(item.price, 10) * parseInt(item.quantity, 10)
    );
    // Then return the sum of that array.
    const sumTotals = totals.reduce((a, b) => a + b);

    // Secondly return an array of quantity values for each trade.
    const quantities = trades.map(item => parseInt(item.quantity, 10));
    // Then return the sum of that array.
    const sumQuantities = quantities.reduce((a, b) => a + b);

    // Finally return the value of totals / quantities
    return sumTotals / sumQuantities;
  };

  return {
    calculateDividendYield,
    calculatePeRatio,
    calculateGeometricMean,
    calculateVolumeWeightedStockPrice
  };
};

export default StockFactory;
