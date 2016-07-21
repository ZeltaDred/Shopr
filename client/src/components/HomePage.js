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
		this.setState({
			stores: ShoppingStore.getAllStores()
		});
	},

	render: function() {

		return(
			<div>
				<h2>Stores      
				<Link className="btn btn-primary btn-xsm" to="/manage-store" >
					Add Store &nbsp;
					<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</Link> </h2> 
				<StoreList
					stores={this.state.stores}
				/>
			</div>
		);
	}
});

module.exports = Stores;
