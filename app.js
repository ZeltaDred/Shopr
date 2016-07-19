'use strict'

var express = require('express')
var morgan = require('morgan')
var skipper = require('skipper')
var mongoose = require('mongoose')
var passport = require('passport')
var colors = require('colors')
var path = require('path')

// configure Mongoose
mongoose.connect('mongodb://localhost/cevans')

mongoose.connection.on('connected', function () {
	console.log("Connected to db...".green)
})

mongoose.connection.on('error', function () {
	console.log("Connected to db failed!\n".red)
})

// require('./config/passport')

// configure Express
var app = express()

// set up statics
app.use(express.static(__dirname + '/dist'))

app.use(morgan('dev'))
app.use(skipper())
// app.use(passport.initialize())


app.use('/shopping', require('./server/shopping/routes'))
app.use('/users', require('./server/user/routes'))

app.get('/favicon.ico', function (req,res){
	res.sendFile(path.join(__dirname, '/dist/favicon.ico'))
	})

app.get('*', function (req, res)
{
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(8062, function ()
{
	console.log('Listening on localhost:8062')
})
