'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HomePage = require('./components/HomePage');
var AboutPage = require('./components/about/AboutPage');
var App = require('./components/App');
var ManageStorePage = require('./components/shopping/ManageStorePage');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/manage-store" component={ManageStorePage} />
	</Route>
);

module.exports = routes;
