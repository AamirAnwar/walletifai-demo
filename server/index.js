var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = 5000;


//  Allows us to do 'req.body and req.query'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/register", function(req,res) {
	// console.log("Creating a new user now with" + "\nemail:" + req.body.email + "\npassword:" + req.body.password);
	const username = req.body.username;
	const password = req.body.password;
	if (!(username && password)) {
		return res.json({"status":"failed",error:"Missing info"});
	}

	return res.json({
			"status":"success",
			"user": {
				"username":username
			}
		});
});

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


// Fallback Route
app.get("/*", function(req, res) {
	res.send("Nothing here");
});


// Start Server
app.listen(PORT, function() {
	console.log("Server started on " + PORT);
});