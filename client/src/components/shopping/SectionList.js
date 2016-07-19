'use strict';

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var ItemList = require('./ItemList');
var newItemName = "";

var SectionList = React.createClass({

  saveTextState: function (event) {
    newItemName = "";
    newItemName = event.target.value;
    console.log(event.target.value);

  },

  saveItem: function (index, event) {
    var newStore = Object.assign({}, this.props.store);
    
    var newItem = {
      id: index,
      itemName: newItemName
    };

    newStore.sections[index].items.push(newItem);

    //this is something we could put in another 
    //function below.
    newItemName= "";
    //is using the undex ok with the id?

    document.getElementById(index).value=null;

    ShoppingActionCreator.updateStore(newStore);
  },


  render: function() {
    var listSections = function(section, index) {
      return (
      <div className="container" key={section.storeSection}>
          <h4>
          {section.storeSection}

              <input
                id = {index}
                placeholder="Add Item"
                type="text"
                value={this.props.value}
                onChange={this.saveTextState}
              />

              <button className="btn btn-primary btn-sm"
                onClick={this.saveItem.bind(this, index)}
                value="+"
              >
              
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
          </h4>
          
          <ItemList
            section={section}
            store={this.props.store}
          />
      </div>
      );
    };

  return (
    <div>

    <ul>{this.props.store.sections.map(listSections, this)}</ul>

    
    </div>
  );
  }
});

module.exports = SectionList;
