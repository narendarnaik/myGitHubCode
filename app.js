var express = require('express');
var app = express();
//some javascript business logic


var books = JSON.prse('[{dkfdlkfdjfdkfdata}]);
app.useheader("Access-Control-Allow-Origin", "*");//(function(req,res,next)) {
	
	//res.header("Access-Control-Allow-Origin", "*");
	//http://192.168.14.241:3000/books
	
}

app.get('/', function (request,response){
resonse.send('Hello World!');
console.log("Hi I am inside empty end point");




});

app.get('/print', function(request,response)
{
	console.log("My data *******************Narendar*****" + "");
	
	
	
	
	
});


app.listen(4000, function() {
//port no: 3000 for localhost
console.log('Narendar is running');




});
