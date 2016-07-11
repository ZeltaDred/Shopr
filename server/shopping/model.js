'use strict'

var mongoose = require('mongoose')

var ItemSchema = new mongoose.Schema({
  listItem: {type: String, required: true},
  storeSection: {type: String, required: true},
  storeName: {type: String, required: true},
  selected: {type: Boolean, default: false},
})

module.exports = mongoose.model("Store", ItemSchema)
