var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/hello', function(req, res){
	var nm = req.query.nm;
	var ctry = req.query.country;
	res.write("Hello ");
	res.write(nm + "  ");
	res.write(ctry);

	res.end();
});

app.get('/hello1/:nm/:c', function(req, res){
	var nm = req.params.nm;
	var ctry = req.params.c;
	res.write("Hello ");
	res.write(nm + "  ");
	res.write(ctry);

	res.end();
});

app.post("/abcd", function(req, res){
	var nm = req.body.nm;
	var ctry = req.body.country;
	res.send(nm +  "   " + ctry);

});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});