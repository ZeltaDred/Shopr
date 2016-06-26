'use strict';

var React = require('react');
var storeApi = require('../mockApi/storeApi');
var StoresList = require('./StoresList');

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
					<StoresList stores={this.state.stores}/>
			</div>
		);
	}
});

module.exports = Stores;
