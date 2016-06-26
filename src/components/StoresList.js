'use strict';

var React = require('react');
var SectionList = require('./SectionsList');

var StoresList = React.createClass({
	render: function() {
		var stores = this.props.stores;
		var listStores = function(store) {
			return (
				<div key = {store.id}>
					<h4>{store.storeName}</h4>
				<SectionList key={store.id} id={store.id} stores={stores}/>
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

module.exports = StoresList;