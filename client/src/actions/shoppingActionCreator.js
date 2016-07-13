'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
//var storeApi = require('../mockApi/storeApi');
var  API = require('../helpers/api');


var ShoppingActionCreator = {
	createStore: function (store) {
		var newStorePromise = API.createStore(store);

		newStorePromise.
			then( function(newStore) {
				Dispatcher.dispatch({
				actionType: ActionTypes.CREATE_STORE,
				store: newStore				
			});
		})
		.fail(function(xhr, status, err){
			console.log("failed to create a store");
		})
	},

	deleteStore: function (store) {
		var deleteStorePromise = API.deleteStore(store);

		deleteStorePromise
			.then(function () {
				Dispatcher.dispatch({
					actionType: ActionTypes.DELETE_STORE,
					storeId: store._id
				})
			})
			.fail(function (xhr, status, err) {
				console.log("Delete Store Failed!")
			})


	},

	changeSelected: function(item) {

	},
};

module.exports = ShoppingActionCreator;
