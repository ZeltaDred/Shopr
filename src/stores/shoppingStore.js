'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events');
var CHANGE_EVENT = 'change';

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

});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.CREATE_STORE:
      // add a store
      _stores.push(action.store);
      ShoppingStore.emitChange();
      break;
    default:
      // do nothing
  }
})
