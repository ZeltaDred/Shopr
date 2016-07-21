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

  saveDescription: function () {
    console.log("We need to work on getting the value to change");
    console.log(this.props.value);

  },

  render: function() {
    var listItems = function(item, index) {
      var fontSize = "font-size";
      var fontWeight = "font-weight";
      var fontStyle = "font-style";
      return (
        <li key={index}>
            <h4>

              {item.itemName}
            {Spacer}{Space}{Space}{Space}{Space}
              <input
                type="text"
                onChange= {this.saveDescription}
                className="input-fly"
                value={this.props.value}
                placeholder = "Add A description"
                style={{border: "none", background: "transparent", 
                color: "#000", width: "70%", fontSize: ".8em", 
                fontWeight:"normal", fontStyle: "italic"}}>
              </input>
              <input
                type="checkbox"
                className="pull-right"
                checked={item.selected}
                onChange={this.changeSelected.bind(this, item)}
                name="items"
                value={item._id}
              />
            </h4>
        </li>
      );

    };

    return (
        <ul>{this.props.section.items.map(listItems, this)}</ul>
    );

  }
})

module.exports = ItemList;
