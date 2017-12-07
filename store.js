import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import yyx_middleware_debug_1 from './middlewares/middleware_debug_1';
import yyx_middleware_debug_2 from './middlewares/middleware_debug_2';

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




 /**
  * combine application Reducers to a Big Reducer
    support many reducers mapping different reducer files
  */

var store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(yyx_middleware_debug_1,yyx_middleware_debug_2))
    
);


export default store;