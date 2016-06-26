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
					<li>Drag and drop items</li>
				</ul>
			</div>
		);
	}
});

module.exports = AboutPage;
