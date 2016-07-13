'use strict';

var React = require('react');
var Link = require('react-router').Link;
var StoreList = require('./shopping/StoreList');
var ShoppingStore = require('../stores/shoppingStore');

var Stores = React.createClass({
	getInitialState: function () {
		return {
			stores: ShoppingStore.getAllStores()
		}
	},

	componentWillMount: function () {
		ShoppingStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function () {
		ShoppingStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		console.log('onChange in HomePage called');
		this.setState({
			stores: ShoppingStore.getAllStores()
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
