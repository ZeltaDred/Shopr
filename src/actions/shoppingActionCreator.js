'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var todoApi = require('../mockApi/storeApi');


var ShoppingActionCreator = {
	createStore: function (store) {
		var newStore = storeApi.saveStore(store);

		// make AJAX call

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_STORE,
			todo: newStore
		});
	},

	deleteStore: function (store) {

	},
};

module.exports = ShoppingActionCreator;
