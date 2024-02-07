import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import baseReducers from './reducers';

const middlewares = [thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(baseReducers, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
