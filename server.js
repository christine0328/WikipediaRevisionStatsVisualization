var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var session = require('express-session');

var survey = require('./app/routes/survey.server.routes')

var app = express()
app.locals.products=['iphone 7', 'huawei p9', 'Pixel XL', 'Samsung S7'] 
app.locals.surveyresults = {
	fp:[0,0,0,0], mp:[0,0,0,0]
}
app.set('views', path.join(__dirname,'views')); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded())
app.use(session({secret: 'ssshhhhh', cookie:{maxAge:600000}})); //The session will expire in 30 minutes
app.use('/survey', survey) 
app.listen(3000, function () {
	console.log('survey app listening on port 3000!')
})