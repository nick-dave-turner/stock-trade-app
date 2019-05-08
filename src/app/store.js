// @flow
import { createStore, applyMiddleware } from 'redux';

import middleware from './middleware';
import rootReducer from './reducer';

export default createStore(rootReducer, applyMiddleware(...middleware));
