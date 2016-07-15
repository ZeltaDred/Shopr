'use strict';

var React = require('react');
var API = require('../../helpers/api');
var Link = require('react-router').Link;
var SectionList = require('./SectionList');
var ShoppingStore = require('../../stores/shoppingStore');
var _ = require('lodash');

var TextInput = require('../common/TextInput');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');

var storeId;

var ShoppingListPage = React.createClass({
	getInitialState: function () {
		return {
			store: ShoppingStore.getStoreById(storeId)
		}
	},

	componentWillMount: function () {
		storeId = this.props.params.id;

		if(storeId) {
			this.setState({
				store: ShoppingStore.getStoreById(storeId)
			});
		}
		ShoppingStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function () {
		ShoppingStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		this.setState({
			store: ShoppingStore.getStoreById(storeId)
		});

		
	},

	saveSectionState: function (event) {
		var feild = event.target.name;
		var value = event.target.value;
		var newSection = Object.assign({}, this.state.store);
//put the new section in the sections array  somehow
		newSection[feild] = value;



		this.setState({
			store: newSection
		});

		
		console.log(this.state.store);
	},

	render: function() {

		return (
			<div>
				<div className="container">
					<h2>{this.state.store.storeName}</h2>
					
					<Link className="btn btn-primary btn-sm pull-right" to="/choose-store">
						Move Checked &nbsp;
						<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
					</Link>

					<button className="btn btn-primary btn-sm pull-right">
						Delete Checked &nbsp;
						<span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
					</button>
				</div>

				<div className="container">
					<h4>Add Section</h4>
					<form>
			        	<input
						name={this.state.name}
						placeholder="Add Section"
						value={this.state.value}
						onChange={this.saveSectionState}
						/>
						<button className="btn btn-primary btn-sm glyphicon glyphicon-plus" 
						//onClick run a function
						value="+">
						</button>
					</form>
				</div>

				<SectionList
					store={this.state.store}
				/>
			</div>
		);
	}
});

module.exports = ShoppingListPage;
