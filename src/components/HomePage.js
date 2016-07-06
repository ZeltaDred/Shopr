'use strict';

var React = require('react');
var storeApi = require('../mockApi/storeApi');
var Link = require('react-router').Link;
var StoreList = require('./shopping/StoreList');

var Stores = React.createClass({
	getInitialState: function () {
		return {
			stores: []
		}
	},

	componentWillMount: function () {
		this.setState({
			stores: storeApi.getAllStores()
		});
	},

	render: function() {
		
		return(
			<div>
				<h2>Stores</h2>
				<Link className="btn btn-primary btn-sm" to="/manage-store">
					Add Store &nbsp;
					<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</Link>
				<StoreList
					stores={this.state.stores}
				/>
			</div>
		);
	}
});

module.exports = Stores;
