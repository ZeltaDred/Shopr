'use strict';

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var ItemList = require('./ItemList');
var newItemName = "";
//var newIndex = 0

var SectionList = React.createClass({

  saveTextState: function (event) {
    newItemName = "";
    newItemName = event.target.value;

  },

  saveItem: function (index, event) {
    var newStore = Object.assign({}, this.props.store);
    
    var newItem = [{
      id: index,
      itemName: newItemName
    }];
    
    newStore.sections[index].items.push(newItem);
    ShoppingActionCreator.updateStore(newStore);

},


  render: function() {



    var listSections = function(section, index) {
      return (
      <div className="container" key={section.storeSection}>
          <h3>
          {section.storeSection}

              <input
                placeholder="Add Item"
                value={this.props.value}
                onChange={this.saveTextState}
              />

              <button className="btn btn-primary btn-sm"
                onClick={this.saveItem.bind(this, index)}
                value="+"
              >
              
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
          </h3>
          {/*{section.items.map(listItems, this)}*/}
          
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
