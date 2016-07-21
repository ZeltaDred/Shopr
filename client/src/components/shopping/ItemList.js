'use strict'

var React = require('react');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var Space = ' ';
var Spacer = ' - ';
var newDescriptionName = "";


var ItemList = React.createClass({
  changeSelected: function (item, event) {
    event.preventDefault();
    item.selected ? item.selected = false : item.selected = true;
    ShoppingActionCreator.updateStore(this.props.store);
  },

  saveInputText: function (event) {
    newDescriptionName = "";
    newDescriptionName= event.target.value;
    console.log(event.target.value);
  },

  saveDescription: function (index, event) {
    event.preventDefault();
    var newStore = Object.assign({}, this.props.store);

    var newItem = {
      id: this.props.items[index]._id,
      itemName: this.props.items[index].itemName,
      description: newDescriptionName
    };

    newStore.sections[this.props.sectionIndex].items[index] = newItem;
    newDescriptionName= "";
    ShoppingActionCreator.updateStore(newStore);
    event.target.value = "";
  },

  descriptionIsValid: function () {

  },

  render: function() {
    var listItems = function(item, index) {
      var fontSize = "font-size";
      var fontWeight = "font-weight";
      var fontStyle = "font-style";
      var listStyleType = "list-style-type";
      return (
        <li key={index}
          style={{listStyleType: "upper-roman", fontSize: "1.2em"}}>
            <h4>

              {item.itemName}
            {Spacer}{Space}{Space}{Space}{Space}
              <input
                name = "Input-name"
                type="text"
                onChange= {this.saveInputText}
                onBlur={this.saveDescription.bind(this, index)}
                //className="input-fly"
                value={this.value}
                placeholder = "Add/Edit descrip"
                style={{border: "none", background: "transparent", 
                color: "#000", width: "20%", fontSize: ".8em", 
                fontWeight:"normal", fontStyle: "italic"}}>
              </input>
              <span 
              style={{fontStyle: "italic", fontSize: ".8em"}}
              >
              {Space}{Space}{item.description}
              </span>
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
