'use strict';

var React = require('react');
var API = require('../../helpers/api');
var Link = require('react-router').Link;
var SectionList = require('./SectionList');
var ShoppingStore = require('../../stores/shoppingStore');
var _ = require('lodash');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var toastr = require('toastr');

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
  	event.preventDefault();
  	if(!this.sectionIsValid()) {
      return;
    }

    var newStore = Object.assign({}, this.state.store);
    var newSection = {
      id: "",
      storeSection: "",
      items: []
    };

    newSection.storeSection = newSectionName;

    newStore.sections.push(newSection);
    newSectionName = '';
    document.getElementById("sectionId").value=null;
    ShoppingActionCreator.updateStore(newStore);
    toastr.success('Section Created!');
  },

  sectionIsValid: function () {
    var sectionInputIsValid = true;
    newSectionName = newSectionName.trim();
    if (newSectionName.length <= 2) {
      sectionInputIsValid = false;
      console.log("Item Be Longer than 1 char")
      toastr.error('Section Name to short!');
    };

    return sectionInputIsValid;
  },

  deleteSelectedItems: function () {
    //console.log(this.state.store.sections);
    var newStore = Object.assign({}, this.state.store);
    var trashArray = [];
    var keepArray = [];

    for(var i = 0; i < newStore.sections.length; i++) {
      for(var j = 0; j < newStore.sections[i].items.length; j++){
        if(newStore.sections[i].items[j].selected === true) {
          trashArray.push(newStore.sections[i].items[j]);
        }else {
          keepArray.push(newStore.sections[i].items[j]);
        }
      }
    }
    for(var i = 0; i < trashArray.length; i++) {
      for(var j = 0; j < newStore.sections.length; j++) {
        for (var k = 0; k < newStore.sections[j].items.length; k++) {
          if(trashArray[i] === newStore.sections[j].items[k]) {
            newStore.sections[j].items.splice(k, 1);
          }
        }
      }
    }

    ShoppingActionCreator.updateStore(newStore);
    toastr.success(trashArray.length + " Item(s) Deleted");
  },

  render: function() {
    return (

      <div className="container">

        <span className="inline"> 

          <h1>{this.state.store.storeName}</h1>

          <h3>
            <input
              id = "sectionId"
              name={this.state.name}
              style={{marginTop: 10, marginLeft: 10, width: 10+'em'}}
              placeholder="Add Section"
              value={this.state.value}
              onChange={this.saveTextState}
              onBlur= {this.saveSectionState}
            />

          <button className="btn btn-primary btn-xsm glyphicon glyphicon-plus" style={{marginLeft: 5}}
            value="+"
            onClick = {this.saveSectionState}>
          </button>

        </h3>

      </span>

      <button className="btn btn-primary btn-xsm pull-right" style={{marginTop: 30, marginLeft: 5, width: 10+'em'}} to="/choose-store">
        Move Checked &nbsp;
        <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
      </button>

      <button className="btn btn-primary btn-xsm pull-right" style={{marginTop: 30}} 
        onClick = {this.deleteSelectedItems}
        >
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
