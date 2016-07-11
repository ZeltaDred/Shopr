'use strict'

var Item = require('./model')

module.exports = {

	// CREATE
	create: createItem,
	// READ
	index: indexItem,
	// READ
	show: showItem,
	// UPDATE
	update: updateItem,
	// DELETE
	delete: deleteItem
}

function createItem (req, res)
{
	Item.create({
		listItem: req.body.listItem,
    storeSection: req.body.storeSection,
		storeName: req.body.storeName,
		selected: req.body.selected
	},

	function (err, item) {
		if(err) return reportError(err, res)

		res.status(201).json(item)
	})
}

function indexItem (req, res)
{
	Item.find(function (err, collection){
		if(err) return reportError(err, res)
		res.json(collection)
	})
}

function showItem (req, res)
{
	findItem(req, res, function (item)
	{
		res.json(item)
	})
}

function updateItem (req, res)
{
	findItem(req, res, function (item)
	{
		item.listItem = req.body.listItem
		item.storeSection = req.body.storeSection
		item.storeName = req.body.storeName
    item.selected = req.body.selected

		item.save(function (err)
		{
			if(err) return reportError(err, res)

			res.json(item)
		})
	})
}

function deleteItem (req, res)
{
	findItem(req, res, function (item)
	{
		item.remove(function (err)
		{
			if(err) return reportError(err, res)
			res.status(204).end()
		})
	})
}

/**
* @param {function (item)} success
**/
function findItem (req, res, success)
{
	var id = req.params.id

	Item.findById(id, function (err, item)
	{
		if(err) return reportError(err, res)

		if(!item)
		{
			res.status(404).json({
				error: 'Could not find item with that id'
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
