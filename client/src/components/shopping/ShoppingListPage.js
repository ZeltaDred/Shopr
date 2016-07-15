'use strict';

var React = require('react');
var API = require('../../helpers/api');
var Link = require('react-router').Link;
var SectionList = require('./SectionList');
var TextInput = require('../common/TextInput');
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
    var field = event.target.name;
    var value = event.target.value;
    var newSection = Object.assign({}, this.state.store);
    
    //put the new section in the sections array  somehow
    newSection[field] = value;

    this.setState({
      store: newSection
    });

    console.log(this.state.store);
    console.log(event.target.name);
    console.log(event.target.value);
  },

  render: function() {
    {/*		return (
          {//	<div>}
          {//<h2>{this.state.store.storeName}</h2>}
          {//				<Link className="btn btn-primary btn-sm" to="/manage-section">}
          { //Add Section &nbsp;}
          {//		<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>}
          {//</Link>} 

          <form>
          <TextInput
          name="Section Name"
          placeholder="Section Name"
          value={this.state.store.storeName.storeSection}
          saveStoreState={this.state.saveStoreState}
          onChange = {this.saveTextInputState}
          />

          <button className="btn btn-primary btn-sm" 
          onClick={this.props.saveStore} value="save section">
          Save Section &nbsp;
          <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
          </button>


          <Link className="btn btn-primary btn-sm" to="/choose-store">
          Move Checked &nbsp;
          <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
          </Link>

          <button className="btn btn-primary btn-sm">
          Delete Checked &nbsp;
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
          </form>

          <SectionList
          store={this.state.store}
          />
          </div>
          );
        */}
        return (

          <div className="container">
          <h2>{this.state.store.storeName}</h2>
          <h2>{this.state.name}</h2>
          <h2>{this.state.value}</h2>

          <input
          name={this.state.name}
          placeholder="Add Section"
          value={this.state.value}
          onChange={this.saveSectionState}
          />

          <button className="btn btn-primary btn-xs glyphicon glyphicon-plus" value="+">
        {/*onclick add a function here*/}
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
