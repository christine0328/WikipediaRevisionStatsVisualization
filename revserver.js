/**
 * The file to start a server
 *
 */

var express = require('express');
var path = require('path')

var revroutes = require("./app/routes/revision.server.routes")

var app = express()

app.set('views', path.join(__dirname,'app','views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/revision',revroutes)
app.listen(3000, function () {
	  console.log('Revision app listening on port 3000!')
	})
	
module.exports = app;

//var express = require('express');
//var path = require('path')
//var bodyParser = require('body-parser');
//var session = require('express-session');
//
//var revroutes = require('./app/routes/revision.server.routes')
//
//var app = express()
//
//app.set('views', path.join(__dirname,'views')); 
//app.use(express.static(path.join(__dirname, 'public'))); 
//app.use(bodyParser.json()) 
//app.use(bodyParser.urlencoded())
//app.use(session({secret: 'ssshhhhh', cookie:{maxAge:600000}})); //The session will expire in 30 minutes
//app.use('/revision', revroutes) 
//app.listen(3000, function () {
//	console.log('Revision app listening on port 3000!')
//})
//
//module.exports = app;
