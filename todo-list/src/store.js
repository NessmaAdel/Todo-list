// import {createStore, applyMiddleware, compose} from 'redux';
// import {fromJS} from 'immutable';
// import {routerMiddleware} from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
// import createReducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore(initialState = {}, history) {
//     // Create the store with two middlewares
//     // 1. sagaMiddleware: Makes redux-sagas work
//     // 2. routerMiddleware: Syncs the location/URL path to the state
//     const middlewares = [sagaMiddleware, routerMiddleware(history)];

//     const enhancers = [applyMiddleware(...middlewares)];

//     const store = createStore(createReducer, fromJS(initialState), enhancers);

//     // Extensions
//     store.runSaga = sagaMiddleware.run;
//     store.asyncReducers = {}; // Async reducer registry

//     return store;
// }