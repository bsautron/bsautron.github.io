var express = require('express');

var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get('/', function(request, response) { /* request avec les param, toute les methode pour repondre */
	response.render('index');
});

app.listen(3007, function() {
	console.log("Server listening...")
});
