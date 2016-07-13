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
			<div>
				<h2> DSU Code School 2016 Design Team</h2>
				<ul>
					<li> Matt </li>
					<li> Doug </li>
					<li> ??? </li>
					<li> ??? </li>
				<ul>
				<h2> Technology Stack </h2>
				<ul>
					<li> Javascript </li>
					<li> NodeJS / npm </li>
					<li> Reactjs Single Page Application </li>
					<li> Express Library for HTML functions </li>
					<li> Gulp CI </li>
					<li> BootStrap CSS Framework </li>
				</ul>
			</div>
			
					
				
		);
	}
});

module.exports = AboutPage;
