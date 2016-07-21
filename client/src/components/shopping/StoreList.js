'use strict';

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;
var StoreActionCreator = require('../../actions/shoppingActionCreator');

var LinkStyle = {
  color: "#333"
};

var StoreList = React.createClass({

  deleteStore: function (storeId, event) {
    event.preventDefault();
    StoreActionCreator.deleteStore(storeId);
  },


  render: function() {

    var listStores = function(store, index) {
      var sumItems = 0;
      for(var i = 0; i < store.sections.length; i++) {
        sumItems += store.sections[i].items.length;
      }

      return (
        <tr key = {store._id}>
          <td>
            <Link style={LinkStyle} to={"/shopping-list/" + store._id} style={{"font-size": 30}}>
              {store.storeName}
            </Link>
          </td>
          <td style={{"font-size": 25}}>{sumItems}</td>
          <td>
            <Link className="btn btn-primary btn-xsm" to={"/shopping-list/" + store._id}>
              <span className="glyphicon glyphicon-list-alt"></span>
            </Link>
          </td>
          <td>
            <a href="#" className="btn btn-primary btn-xsm" onClick={this
              .deleteStore
              .bind(this, store)}>
              <span className="glyphicon glyphicon-trash"></span>
            </a>
          </td>
        </tr>
      );
    };

    return(
      <table className="table">
        <thead>
          <tr>
            <th> </th>
            <th>Items</th>
            <th>List</th>
            <th>Delete Store</th>
          </tr>
        </thead>
        <tbody>
          {this.props.stores.map(listStores, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = StoreList;
