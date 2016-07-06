'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');

var StoreForm = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.props.saveStore}>
				<TextInput
					placeholder="Store Name"
					//value={this.props.store.storeName}
					//saveTodoState={this.props.saveStoreState}
					//error={this.props.errors.storename}
				/>
				<button className="btn btn-primary btn-sm" type="submit">
					Save Store &nbsp;
					<span className="glyphicon glyphicon-save" aria-hidden="true"></span>
				</button>
			</form>
		);
	}
});

module.exports = StoreForm;
