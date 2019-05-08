import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Routes from './';
import Home from '../components/Home';

export const initialState = {
  stocks: {
    stocksData: [],
    stockSymbols: []
  },
  trades: {
    tradesData: []
  }
};

const mockStore = configureStore();

describe('Routes', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should show Home component from /', () => {
    expect(component.find(Home)).toHaveLength(1);
  });
});
