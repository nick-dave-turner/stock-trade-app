// @flow
import React from 'react';
import styled from 'styled-components';

import type { StockSymbols } from '../../types/stockTypes';
import type { TradeSubmission } from '../../types/tradeTypes';
import Widget from '../Widget';

const FormRow = styled.div`
  margin-top: 10px;

  &:first-child {
    margin: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0 none;
  background: #ededed;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0 none;
  background: #ededed;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0 none;
  background: #337ab7;
  color: #ffffff;
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
  }
`;

type TradeFormProps = {
  handleAddTrade: TradeSubmission => void,
  handleGetStockSymbols: () => void,
  stockSymbols: Array<StockSymbols>
};

type TradeFormState = TradeSubmission & {};

export default class TradeForm extends React.Component<
  TradeFormProps,
  TradeFormState
> {
  state = {
    price: 0,
    quantity: 0,
    stockSymbol: ''
  };

  componentDidMount(): void {
    this.props.handleGetStockSymbols();
  }

  handleInputChange = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitTrade = () => {
    this.props.handleAddTrade({ ...this.state });
    this.setState({
      price: 0,
      quantity: 0,
      stockSymbol: ''
    });
  };

  render() {
    const { quantity, stockSymbol, price } = this.state;

    return (
      <Widget title="Make a trade">
        <form>
          <FormRow>
            <Select
              placeholder="Stock"
              name="stockSymbol"
              onChange={this.handleInputChange}
              value={stockSymbol}
            >
              <option>Choose Stock</option>
              {this.props.stockSymbols.map(symbol => {
                return (
                  <option key={symbol.id} value={symbol.stockSymbol}>
                    {symbol.stockSymbol}
                  </option>
                );
              })}
            </Select>
          </FormRow>
          <FormRow>
            <Input
              placeholder="Price"
              name="price"
              type="number"
              onChange={this.handleInputChange}
              value={price > 0 ? price : ''}
            />
          </FormRow>
          <FormRow>
            <Input
              placeholder="Quantity"
              name="quantity"
              type="number"
              onChange={this.handleInputChange}
              value={quantity > 0 ? quantity : ''}
            />
          </FormRow>
          <FormRow>
            <Button
              type="submit"
              name="submit-button"
              disabled={quantity === 0 || stockSymbol === '' || price === 0}
              onClick={this.handleSubmitTrade}
            >
              Submit trade
            </Button>
          </FormRow>
        </form>
      </Widget>
    );
  }
}
