import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './router.js'; 
import store from './store.js';

render(
    <Provider store={store}>
        { route }
    </Provider>,
    document.getElementById('root')
);