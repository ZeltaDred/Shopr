'use strict'

var React = require('react');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');
var Space = ' ';
var Spacer = ' - ';
var newDescriptionName= "";

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

  render: function() {
    var listItems = function(item, index) {
      var fontSize = "font-size";
      var fontWeight = "font-weight";
      var fontStyle = "font-style";
      var listStyleType = "list-style-type";
      return (
        <tr key={index}>
          <td>
              {item.itemName}
          </td>

            <td style={{overflow: "hidden"}}>
              <span 
              style={{fontStyle: "italic", fontSize: ".8em"}}>
              {Space}{Space}{item.description}
              </span>
            </td>

          <td>

              <input
                id = {index}
                type="text"
                onChange= {this.saveInputText}
                onBlur={this.saveDescription.bind(this, index)}
                value={this.props.value}
                placeholder = "Add/Edit description"
                style={{color: "#000", 
                fontSize: ".8em", fontWeight:"normal", 
                fontStyle: "italic"}}>
              </input>

            </td>

            <td>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={this.changeSelected.bind(this, item)}
                name="items"
                value={item._id}
              />
            </td>
          </tr>
      );

    };

    return ( 
      <table //className="container" 
        className="table" style={{"tableLayout": "fixed", 
        marginBottom: 0}}>
        <thead style={{"font-size": "1.5em"}}>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Checkbox</th>
          </tr>
        </thead>
        <tbody>
        {this.props.section.items.map(listItems, this)}
        </tbody>
      </table>

    );

  }
})

module.exports = ItemList;
