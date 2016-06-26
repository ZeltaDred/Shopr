'use strict';

var React = require('react');

var SectionsList = React.createClass({
	render: function () {
		var stores = this.props.stores;
		var store_id = this.props.id;

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

		return (
			<ul>
				{stores[store_id].sections.map(listSections, this)}
			</ul>
		);
	}
});

module.exports = SectionsList;