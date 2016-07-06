'use strict';

var React = require('react');

var ShoppingListPage = React.createClass({
	render: function() {
		var stores = this.props.stores;

		var listItems = function(item) {
			return (
				<div key={item.id}>
					<li>{item.item}</li>
				</div>
			);
		};

		var listSections = function(section) {
			return (
				<div key={section.id}>
					<li>{section.name}</li>
					<ul>{section.items.map(listItems, this)}</ul>
				</div>
			);
		};


		var listStores = function(store) {
			return (
				<div key = {store.id}>
					<h4>{store.storeName}</h4>
					<ul>{store.sections.map(listSections, this)}</ul>
				</div>
			);
		};

		return (
			<div>
				{stores.map(listStores, this)}
			</div>
		);
		
	}
});

module.exports = ShoppingListPage;