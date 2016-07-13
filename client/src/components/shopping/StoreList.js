'use strict';

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;

var StoreList = React.createClass({

	render: function() {

		var listStores = function(store) {
			var sumItems = 0;
			for(var i = 0; i < store.sections.length; i++) {
				sumItems += store.sections[i].items.length;
			}

			return (
				<tr key = {store._id}>
					<td>{store.storeName}</td>
					<td>{sumItems}</td>
					<td>
						<Link className="btn btn-primary btn-sm" to="/shopping-list">
							<span className="glyphicon glyphicon-list-alt"></span>
						</Link>
					</td>
					<td>
						<a href="#" className="btn btn-primary btn-sm">
							<span className="glyphicon glyphicon-trash"></span>
						</a>
					</td>
				</tr>
			);
		};

		return(
			<table className="table">
				<thead>
					<tr>
						<th>Store</th>
						<th>Items</th>
						<th>List</th>
						<th>Delete Store</th>
					</tr>
				</thead>
				<tbody>
					{this.props.stores.map(listStores, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = StoreList;
