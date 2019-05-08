import { MOCK_STOCKS, MOCK_STOCK_SYMBOLS } from './data';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

describe('MOCK_STOCKS', () => {
  it('should match snapshot', () => {
    expect(MOCK_STOCKS).toMatchSnapshot();
  });
});

describe('MOCK_STOCK_SYMBOLS', () => {
  it('should match snapshot', () => {
    expect(MOCK_STOCK_SYMBOLS).toMatchSnapshot();
  });
});
