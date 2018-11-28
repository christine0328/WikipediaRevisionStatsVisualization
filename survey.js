/**
 * the survey application used in tutorial
 */

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');

var app = express()
var products=['iphone 7', 'huawei p9', 'Pixel XL', 'Samsung S7']
var surveyresults = {
	fp:[0,0,0,0],
	mp:[0,0,0,0]
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
	res.render('survey.ejs',{products:products})
});
app.post('/survey', function(req,res){
	console.log(req.body);
	gender = req.body.gender
	productidx = req.body.vote;
	
	if (gender == 0)
		surveyresults.mp[productidx]++;		//increment the product id (vote) by 1 for male
	else
		surveyresults.fp[productidx]++;		//increment the product id (vote) by 1 for female
	console.log(surveyresults);
	res.render('surveyresult.ejs', {products: products, surveyresults: surveyresults})
});

app.listen(3000, function () {
  console.log('survey app listening on port 3000!')
})