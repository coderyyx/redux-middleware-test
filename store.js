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

const yyx_middleware_debug = function(){
  return null;
}

 /**
  * combine application Reducers to a Big Reducer
    support many reducers mapping different reducer files
  */

var store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk,logger))
    
);


export default store;