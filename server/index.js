var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/login" ,function(req,res) {
	const username = req.body.username;
	const password = req.body.password;
	return res.json({
		"status":"success",
		"user": {
			"username":username
		},
	});
});


app.get("/*", function(req, res) {
	res.send("Nothing here");
});


app.listen(PORT, function() {
	console.log("Server started on " + PORT);
});