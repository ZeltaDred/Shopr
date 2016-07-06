'use strict';

var React = require('react');
var StoreForm = require('./StoreForm');
var hashHistory = require('react-router').hashHistory;

var ManageStorePage = React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			store: {
				id: '',
				storeName: '',
				
			}
		}
	},

	render: function() {
		return (
			<div>
				<h2>Manage Store</h2>
				<StoreForm

				/>

			</div>
		);
	}
});

module.exports = ManageStorePage;