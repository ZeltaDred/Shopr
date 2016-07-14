'use strict'

var Store = require('./model')

module.exports = {

	// CREATE
	create: createStore,
	// READ
	index: indexStore,
	// READ
	show: showStore,
	// UPDATE
	update: updateStore,
	// DELETE
	delete: deleteStore
}

function createStore (req, res)
{
	Store.create({
		storeName: req.body.storeName,
    sections: req.body.sections
	},

	function (err, item) {
		if(err) return reportError(err, res)

		res.status(201).json(item)
	})
}

function indexStore (req, res)
{
	Store.find(function (err, collection){
		if(err) return reportError(err, res)
		res.json(collection)
	})
}

function showStore (req, res)
{
	findStore(req, res, function (item)
	{
		res.json(item)
	})
}

function updateStore (req, res)
{
	findStore(req, res, function (item)
	{
		item.StoreName = req.body.storeName
		item.sections = req.body.sections

		item.save(function (err)
		{
			if(err) return reportError(err, res)

			res.json(item)
		})
	})
}

function deleteStore (req, res)
{
	findStore(req, res, function (item)
	{
		item.remove(function (err)
		{
			if(err) return reportError(err, res)
			res.status(204).end()
		})
	})
}

/**
* @param {function (Store)} success
**/
function findStore (req, res, success)
{
	var id = req.params.id

	Store.findById(id, function (err, item)
	{
		if(err) return reportError(err, res)

		if(!item)
		{
			res.status(404).json({
				error: 'Could not find Store with that id'
			})
		}
		else
		{
			success(item)
		}
	})
}

function reportError (err, res)
{
	if(err.name === 'ValidationError')
	{
		res.status(422).json({
			error: err.toString()
		})
	}
	else if(err.name === 'MongoError' && err.code === 11000)
	{
		res.status(409).json({
		error: err.message
	})
	}
	res.status(500).json({
		error: err.toString()
	})
}
