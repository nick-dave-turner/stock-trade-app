import * as actionTypes from '../constants';
import * as actions from './';

describe('Trade Actions', () => {
  it('should create an action to addTrade', () => {
    const payload = 'TESTING';
    const expectedAction = { type: actionTypes.ADD_TRADE, payload };
    expect(actions.addTrade(payload)).toEqual(expectedAction);
  });

  it('should create an action to getTrades', () => {
    const expectedAction = { type: actionTypes.GET_TRADES };
    expect(actions.getTrades()).toEqual(expectedAction);
  });
});
