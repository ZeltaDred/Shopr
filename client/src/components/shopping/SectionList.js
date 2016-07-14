'use strict';

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');

var SectionList = React.createClass({

  changeSelected: function (item, event) {
    event.preventDefault();
    item.selected ? item.selected = false : item.selected = true;
    ShoppingActionCreator.updateStore(this.props.store);
  },

  render: function() {
    var listItems = function(item) {
      return (
        <div key={item._id}>
        <label>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={this.changeSelected.bind(this, item)}
            name="items"
            value={item._id}
          />
          {item.itemName}
        </label>
        </div>
      );
    };

    var listSections = function(section) {
      return (
        <div className="container" key={section.storeSection}>
          <h3>
            {section.storeSection}
            <button className="btn btn-primary btn-sm pull-right">
  					  Add Item &nbsp;
  					  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
  				  </button>
          </h3>
          {section.items.map(listItems, this)}
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
