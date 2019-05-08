// @flow
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import type { GlobalState } from '../../app/reducer';
import type { TradeSubmission } from '../../types/tradeTypes';

import * as stockActions from '../../actions/stocks';
import * as tradeActions from '../../actions/trades';

import StocksTable from '../../components/StocksTable';
import TradeForm from '../../components/TradeForm';
import TradeTable from '../../components/TradesTable';

export const mapStateToProps = (state: GlobalState) => ({
  stocksData: state.stocks.stocksData,
  stockSymbols: state.stocks.stockSymbols,
  tradesData: state.trades.tradesData
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddTrade: (trade: TradeSubmission) => {
    dispatch(tradeActions.addTrade(trade));
    dispatch(stockActions.handleUpdateStock(trade));
  },
  handleGetStocks: () => dispatch(stockActions.getStocks()),
  handleGetStockSymbols: () => dispatch(stockActions.getStockSymbols()),
  handleGetTrades: () => dispatch(tradeActions.getTrades())
});

const containerCreator = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const StocksTableContainer = containerCreator(StocksTable);
export const TradeFormContainer = containerCreator(TradeForm);
export const TradesTableContainer = containerCreator(TradeTable);
