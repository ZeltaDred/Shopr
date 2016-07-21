'use strict';

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var ItemList = require('./ItemList');
var newItemName = "";
var toastr = require("toastr");

var SectionList = React.createClass({

  saveTextState: function (event) {
    newItemName = "";
    newItemName = event.target.value;
    console.log(event.target.value);

  },



  saveItem: function (index, event) {
    event.preventDefault();
    console.log('key pressed', event.which);
    if(!this.itemIsValid(index)) {
      return;
    }

    var newStore = Object.assign({}, this.props.store);

    var newItem = {
      id: index,
      itemName: newItemName,
      description: ""
    };

    newStore.sections[index].items.push(newItem);

    newItemName= "";

    document.getElementById(index).value=null;

    ShoppingActionCreator.updateStore(newStore);
    toastr.success('Item Created');
    console.log(this.props.store.sections);
  },

  itemIsValid: function (index) {
    var itemInputIsValid = true;
    newItemName = newItemName.trim();
    if (newItemName.length <= 1) {
      itemInputIsValid = false;
      console.log("Item Be Longer than 1 char")
      toastr.error('Item Name to short!');
    } else if (newItemName.length > 15) {
      itemInputIsValid = false;
      console.log("Item Name is to long")
      toastr.error('Item Name is to long!');
    }

    return itemInputIsValid;
  },

  deleteSection: function (index) {
    var deletedSection = "";
    
    var newStore = Object.assign({}, this.props.store);
    deletedSection = (newStore.sections[index].storeSection);
    newStore.sections.splice(index, 1);
    ShoppingActionCreator.updateStore(newStore);
    toastr.success(deletedSection +  " section Deleted")

  },


  render: function() {
    var listSections = function(section, index) {
      return (
        <div className="container" key={section.storeSection}>
          <div>
            <h2 style={{color: "#ffffff"}}>{section.storeSection}
          <button className="btn btn-primary btn-xsm"
              style={{marginRight: "4%"}}
              onClick={this.deleteSection.bind(this, index)}>

              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>

            <button className="btn btn-primary btn-xsm pull-right"
              onClick={this.saveItem.bind(this, index)}
              value="+">
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>

            <input
              id = {index}
              style={{width: "12em", "color": "#333"}}
              placeholder="Add Item"
              type="text"
              className="pull-right"
              value={this.props.value}
              onBlur={this.saveItem.bind(this, index)}
              onChange={this.saveTextState}
              //onKeyPress= {this.saveItem.bind(this, index)}

            />
          </h2>
        </div>
        
          <ItemList
            section={section}
            store={this.props.store}
            items={this.props.store.sections[index].items}
            sectionIndex={index}
          />

      </div>
      );
    };

    return (
        <tr style={{"background-color": "#039BE5"}}>{this.props.store.sections.map(listSections, this)}</tr>
    );
  }
});

module.exports = SectionList;
