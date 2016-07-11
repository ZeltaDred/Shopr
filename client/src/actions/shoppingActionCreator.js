'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var storeApi = require('../mockApi/storeApi');


var ShoppingActionCreator = {
	createStore: function (store) {
		var newStore = storeApi.saveStore(store);

		// make AJAX call

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_STORE,
			store: newStore
		});
	},

	deleteStore: function (store) {

	},

	changeSelected: function(item) {

	},
};

module.exports = ShoppingActionCreator;
