var express = required('express');
var myapp = express();
//some javascript business logic

myapp.get('/', function (request,response){
res.send('Hello World!');
console.log("Hi I am inside empty end point");
});

myapp.get('/print', function(request,response)
{
	console.log("dfkdjfdkfdf---------Narendar");
	
});


myapp.listen(3000, function() {
//port no: 3000 for localhost
console.log('Example');
});
