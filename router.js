import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory,hashHistory} from 'react-router';
import Home from './components/home';
import Navs from './components/navsContainer';

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}/>
            <Route path="nsc" component={Navs}/>
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;