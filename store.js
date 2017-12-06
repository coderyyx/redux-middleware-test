import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/**
 * merge to Reducers
 */

import * as reducers from './reducer.js';



// Logger Middleware
import {createLogger} from 'redux-logger';
const logger = createLogger();
 
/**
 * redux middleware debug
 */

const yyx_middleware_debug = ({ getState }) => next => (action) => {
  // return null;
  console.log('********************');
  let preState = getState();
  console.log(preState);
  next(action);
  console.log('********************');
  let nextState = getState();
  console.log(nextState);
}

const yyx_middleware_debug_2 = ({ getState }) => next => (action) => {
  // return null;
  console.log('--------------------');
  let preState = getState();
  console.log(preState);
  next(action);
  console.log('--------------------');
  let nextState = getState();
  console.log(nextState);
}
 /**
  * combine application Reducers to a Big Reducer
    support many reducers mapping different reducer files
  */

var store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk,yyx_middleware_debug,yyx_middleware_debug_2,logger))
    
);


export default store;