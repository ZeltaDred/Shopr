'use strict';

var React = require('react');
var storeApi = require('../../mockApi/storeApi');
var Link = require('react-router').Link;
var SectionList = require('./SectionList');
var ShoppingStore = require('../../stores/shoppingStore');

// this is just for development to use mockApi for Walmart
var _storeId = 0;

var ShoppingListPage = React.createClass({
	getInitialState: function () {
		return {
			store: ShoppingStore.getStoreById(_storeId)
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
			store: ShoppingStore.getStoreById(_storeId)
		});
	},

	render: function() {


		return (
			<div>
				<h2>{this.state.store.storeName}</h2>
				<Link className="btn btn-primary btn-sm" to="/manage-section">
					Add Section &nbsp;
					<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</Link>
				<Link className="btn btn-primary btn-sm" to="/choose-store">
					Move Checked &nbsp;
					<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
				</Link>
				<button className="btn btn-primary btn-sm" >
					Delete Checked &nbsp;
					<span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
				</button>
				<SectionList
					store={this.state.store}
				/>
			</div>
		);
	}
});

module.exports = ShoppingListPage;
