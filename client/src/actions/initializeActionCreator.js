'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var API = require('../helpers/api');
var ActionTypes = require('../constants/actionTypes');

var InitializeActionCreator = {

	initializeApp: function () {
		var storesPromise = API.getAllStores();
		
		storesPromise
			.then(function (stores) {
				Dispatcher.dispatch({
					actionType: ActionTypes.INITIALIZE,
					initialData: {
						stores: stores
					}
				});
			});
	}
};

module.exports = InitializeActionCreator;
