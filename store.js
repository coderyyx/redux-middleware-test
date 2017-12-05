import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/**
 * merge to Reducers
 */

import * as reducers from './reducer.js';


/**
 * Logger Middleware
 * import {createLogger} from 'redux-logger';
 * const logger = createLogger();
 */


 /**
  * combine application Reducers to a Big Reducer
    support many reducers mapping different reducer files
  */

var store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk))
    
);


export default store;