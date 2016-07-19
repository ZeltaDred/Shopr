'use strict';

var React = require('react');
var API = require('../../helpers/api');
var Link = require('react-router').Link;
var SectionList = require('./SectionList');
var ShoppingStore = require('../../stores/shoppingStore');
var _ = require('lodash');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');


var newSectionName = "";
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
	
	saveTextState: function (event) {
		newSectionName = "";
    	newSectionName = event.target.value;
  	},

	saveSectionState: function (event) {
		var newStore = Object.assign({}, this.state.store);
  		var newSection = {
  		id: "",
  		storeSection: "",
  		items: []
  	};
  	
  	newSection.storeSection = newSectionName;

  	newStore.sections.push(newSection);
  	ShoppingActionCreator.updateStore(newStore);
},

  render: function() {
    return (

          <div className="container">
          <h2>{this.state.store.storeName}</h2>
          <h2>{this.state.name}</h2>
          <h2>{this.state.value}</h2>

          <input
          name={this.state.name}
          placeholder="Add Section"
          value={this.state.value}
          onChange={this.saveTextState}
          />

          <button className="btn btn-primary btn-xs glyphicon glyphicon-plus" 
          value="+"
          onClick = {this.saveSectionState}>
          </button>

        <button className="btn btn-primary btn-sm pull-right" to="/choose-store">
        Move Checked &nbsp;
        <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
        </button>

        <button className="btn btn-primary btn-sm pull-right">
        Delete Checked &nbsp;
        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>

        <SectionList
        store={this.state.store}
        />

        </div>
        );
      }
    });

module.exports = ShoppingListPage;
