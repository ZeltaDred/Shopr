'use strict';

var React = require('react');

var AboutPage = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Interactive Shopping List App</h1>
				<p>Features</p>
				<ul>
					<li>Add stores</li>
					<li>Organize by sections</li>
					<li>Add items</li>
					<li>Check items off and delete as group</li>
					<li>Move items to another store</li>
				</ul>
				<p>Components</p>
				<ul>
					<li>HomePage & StoreList</li>
					<li>ShoppingListPage & SectionList</li>
					<li>MoveItemsPage</li>
					<li>ManageStorePage & StoreForm</li>
					<li>AboutPage</li>
				</ul>
			</div>
		);
	}
});

module.exports = AboutPage;
