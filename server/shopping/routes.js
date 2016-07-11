'use strict'

var controller = require('./controller')
var router = require('express').Router()
var passport = require('passport')

// router.use(passport.authenticate('basic', { session: false }))

// create
router.post('/', controller.create)
// index
router.get('/', controller.index)
// show
router.get('/:id', controller.show)
// update
router.put('/:id', controller.update)
// delete
router.delete('/:id', controller.delete)

module.exports = router
