"use strict";

//This file is mocking a web API by hitting hard coded data.
var stores = require('./shoprData').stores;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateStoreId = function() {
  // get the last id and increment by 1, always will keep keys unique
  var newIndex = parseInt(_.last(stores).id) + 1;
  return newIndex.toString();
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var storeApi = {
  getAllStores: function() {
    return _clone(stores);
  },

  getStoreById: function(id) {
    var store = _.find(stores, {id: id});
    return _clone(store);
  },

  saveStore: function(store, change) {
    //pretend an ajax call to web api is made here
    console.log('Saved Store, mocking an AJAX call...');
    var existingStoreIndex;
    if (store.id && change) {
      existingStoreIndex = _.indexOf(stores, _.find(stores, {id: store.id}));
      
      switch (store.done) {
        case false:
          store.done = true;
          break;
        case true:
          store.done = false;
          break;
        default:
          //do nothing
      }
      stores.splice(existingStoreIndex, 1, store);
    }
    if (store.id) {
      existingStoreIndex = _.indexOf(stores, _.find(stores, {id: store.id}));
      stores.splice(existingStoreIndex, 1, store);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new authors in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      store.id = _generateId();
      stores.push(store);
    }

    return _clone(store);
  },

  deleteStore: function(id) {
    console.log('Deleted Store ID ' + id + ', mocking an AJAX call...');
    _.remove(stores, { id: id});
  }
};

module.exports = storeApi;