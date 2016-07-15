'use strict'

var React = require('react');
var ShoppingActionCreator = require('../../actions/shoppingActionCreator');

var ItemList = React.createClass({
	

	changeSelected: function (item, event) {
	    event.preventDefault();

	    // from this.props.store, find our section


	    // from  section.items, find our item as itemStore

	    
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

  	return (
		<div>
			<ul>{this.props.section.items.map(listItems, this)}</ul>
		</div>
		);
	    
	}
})

module.exports = ItemList;