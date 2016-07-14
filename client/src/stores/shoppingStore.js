'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events');
var CHANGE_EVENT = 'change';
var toastr = require('toastr');
var _ = require('lodash');

var _stores = [];

var ShoppingStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllStores: function () {
    return _stores;
  },

  getStoreById: function (storeId) {
    return _.find(_stores, {_id: storeId})
  },

});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _stores = action.initialData.stores;
      ShoppingStore.emitChange();
      break;
    case ActionTypes.CREATE_STORE:
      // add a store
      _stores.push(action.store);
      ShoppingStore.emitChange();
      break;
    case ActionTypes.DELETE_STORE:
      //delete a store
      _.remove(_stores, {_id: action.storeId})
      ShoppingStore.emitChange();
      toastr.info("Deleted Store");
      break;
      case ActionTypes.UPDATE_STORE:
  			var existingStore = _.find(_stores, {_id: action.store._id});
  			var existingStoreIndex = _.indexOf(_stores, existingStore);
  			_stores.splice(existingStoreIndex, 1, action.store);
  			ShoppingStore.emitChange();
  			break;
    default:
      // do nothing
  }
});

module.exports = ShoppingStore;
