import React from 'react';
import { shallow } from 'enzyme';

import TradeForm from './';

const handleAddTradeMock = jest.fn();
const handleGetStockSymbolsMock = jest.fn();
const stockEvent = { target: { name: 'stockSymbol', value: 'TEST' } };
const priceEvent = { target: { name: 'price', value: 20 } };
const quantityEvent = { target: { name: 'quantity', value: 100 } };
const stockSymbolsMock = [{ id: 1, stockSymbol: 'TEST ' }];

describe('TradesForm component', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <TradeForm
        handleAddTrade={handleAddTradeMock}
        handleGetStockSymbols={handleGetStockSymbolsMock}
        stockSymbols={stockSymbolsMock}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call handleGetStockSymbols on load', () => {
    shallow(
      <TradeForm
        handleAddTrade={handleAddTradeMock}
        handleGetStockSymbols={handleGetStockSymbolsMock}
        stockSymbols={stockSymbolsMock}
      />
    );
    expect(handleGetStockSymbolsMock).toHaveBeenCalled();
  });

  describe('When filling in form', () => {
    let component;

    beforeEach(() => {
      component = shallow(
        <TradeForm
          handleAddTrade={handleAddTradeMock}
          handleGetStockSymbols={handleGetStockSymbolsMock}
          stockSymbols={stockSymbolsMock}
        />
      );
    });

    it('should have all state fields empty by default', () => {
      expect(component.instance().state.stockSymbol).toEqual('');
      expect(component.instance().state.price).toEqual(0);
      expect(component.instance().state.quantity).toEqual(0);
    });

    it('should set stockSymbol field', () => {
      component.find("[name='stockSymbol']").simulate('change', stockEvent);
      expect(component.instance().state.stockSymbol).toEqual(
        stockEvent.target.value
      );
    });

    it('should set price field', () => {
      component.find("[name='price']").simulate('change', priceEvent);
      expect(component.instance().state.price).toEqual(priceEvent.target.value);
    });

    it('should set quantity field', () => {
      component.find("[name='quantity']").simulate('change', quantityEvent);
      expect(component.instance().state.quantity).toEqual(
        quantityEvent.target.value
      );
    });

    describe('When submitting the form', () => {
      it('should be able to submit form with fields completed', () => {
        expect(handleAddTradeMock).not.toHaveBeenCalled();
        component.find("[name='stockSymbol']").simulate('change', stockEvent);
        component.find("[name='price']").simulate('change', priceEvent);
        component.find("[name='quantity']").simulate('change', quantityEvent);
        component.find("[name='submit-button']").simulate('click');
        expect(handleAddTradeMock).toHaveBeenCalled();
        expect(component.instance().state.stockSymbol).toEqual('');
        expect(component.instance().state.price).toEqual(0);
        expect(component.instance().state.quantity).toEqual(0);
      });
    });
  });
});
