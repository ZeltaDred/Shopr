'use strict';

var ajax = require('./ajax');

module.exports = {
	getAllStores: getAllStores,
	createStore: createStore,
	deleteStore: deleteStore,
	updateStore: updateStore
}

function getAllStores () {
	var url = '/shopping';
	var data = {};
	var type = 'GET';

	return ajax(url, data, type);
}

function createStore (store) {
	var url = '/shopping';
	var data = store;

	return ajax(url, data);
}

function deleteStore (store) {
	var url = '/shopping/' + store._id;
	var data = {};
	var type = 'DELETE';

	return ajax(url, data, type);
}

function updateStore (store) {
	var url = '/shopping/' + store._id;
	var data = store;
	var type = 'PUT';

	return ajax(url, data, type);
}
