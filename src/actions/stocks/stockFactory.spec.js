import StockFactory from './stockFactory';
import { MOCK_TRADES } from '../__MOCKS__/data';

const stockFactory = StockFactory();

describe('Stock Factory', () => {
  describe('When calling calculateDividendYield', () => {
    describe('When type is common', () => {
      const stock = {
        type: 'common',
        lastDividend: 8,
        fixedDividend: 0,
        parValue: 100
      };
      const price = 10;
      const result = 0.8;
      it('should return expected value', () => {
        expect(stockFactory.calculateDividendYield(stock, price)).toEqual(
          result
        );
      });
    });

    describe('When type is preferred', () => {
      const stock = {
        type: 'preferred',
        lastDividend: 8,
        fixedDividend: 0,
        parValue: 100
      };
      const price = 10;
      const result = 0;
      it('should return expected value', () => {
        expect(stockFactory.calculateDividendYield(stock, price)).toEqual(
          result
        );
      });
    });
  });

  describe('When calling calculatePeRatio', () => {
    describe('When lastDividend === 0', () => {
      const stock = { lastDividend: 0 };
      const price = 10;
      const result = 0;
      it('should return expected value', () => {
        expect(stockFactory.calculatePeRatio(stock, price)).toEqual(result);
      });
    });

    describe('When lastDividend > 0', () => {
      const stock = { lastDividend: 8 };
      const price = 10;
      const result = 1.25;
      it('should return expected value', () => {
        expect(stockFactory.calculatePeRatio(stock, price)).toEqual(result);
      });
    });
  });

  describe('When calling calculateGeometricMean', () => {
    const result = 9.486832980505138;
    it('should return expected value', () => {
      expect(stockFactory.calculateGeometricMean(MOCK_TRADES)).toEqual(result);
    });
  });

  describe('When calling calculateVolumeWeightedStockPrice', () => {
    const result = 9.25;
    it('should return expected value', () => {
      expect(
        stockFactory.calculateVolumeWeightedStockPrice(MOCK_TRADES)
      ).toEqual(result);
    });
  });
});
