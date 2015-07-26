import express from 'express';

let app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get('/', (request, response) => { /* request avec les param, toute les methode pour repondre */
	response.render('index');
});

app.listen(3000, () => {
	console.log("Server listening...")
});
