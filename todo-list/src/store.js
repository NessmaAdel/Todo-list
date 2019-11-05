// import {createStore, applyMiddleware, compose} from 'redux';
// import {fromJS} from 'immutable';
// import {routerMiddleware} from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
// import createReducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, composeEnhancers(applyMiddleware(thunk)),
);
export default store;
