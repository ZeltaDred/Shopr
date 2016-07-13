'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var  API = require('../helpers/api');

var ShoppingActionCreator = {
	createStore: function (store) {
		var newStorePromise = API.createStore(store);

    // <<<<<<< HEAD
    // newStorePromise.
    //		then( function(newStore) {
    // =======
    //newStorePromise
    // .then(function(newStore) {
    // >>>>>>> origin/matt-branch
    // 			Dispatcher.dispatch({
    // 			actionType: ActionTypes.CREATE_STORE,
    // 		store: newStore
    //		});
    //})
		.fail(function(xhr, status, err) {
			console.log("failed to create a store");
		})
	},

	deleteStore: function (store) {

	},

	changeSelected: function(item) {

	},
};

module.exports = ShoppingActionCreator;
