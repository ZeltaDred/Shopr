'use strict'

var mongoose = require('mongoose')

var StoreSchema = new mongoose.Schema({
  storeName: { type: String, required: true, unique: true, dropDups: true },
  sections:[
    {
      storeSection: { type: String },
      items:[
        {
          itemName: { type: String },
          description: { type: String },
          selected: { type: Boolean , default: false }
          
        }
      ]
    }
  ]
})

module.exports = mongoose.model("Store", StoreSchema)
