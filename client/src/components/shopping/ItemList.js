'use strict'

var React = require('react');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var Space = ' ';
var Spacer = ' - ';

var ItemList = React.createClass({


  changeSelected: function (item, event) {
    event.preventDefault();
    item.selected ? item.selected = false : item.selected = true;
    ShoppingActionCreator.updateStore(this.props.store);
  },

  render: function() {
    var listItems = function(item, index) {
      return (
        <div key={index}>

            <h4>
              {Spacer}{item.itemName}
              <input
                type="checkbox"
                className="pull-right"
                checked={item.selected}
                onChange={this.changeSelected.bind(this, item)}
                name="items"
                value={item._id}
              />
            </h4>
        </div>
      );

    };

    return (
        <ul>{this.props.section.items.map(listItems, this)}</ul>
    );

  }
})

module.exports = ItemList;
