var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



var reservationArray = [];
var waitingArray =[];


// =============ROUTES=============
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'))
});

app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'))
});

// =============API ROUTES=============
app.get('/api/tables', function (req, res) {
	res.json(reservationArray);
});

app.get('/api/reserve', function (req, res) {
	res.json(waitingArray);
});

app.post('/api/tables', function (req, res) {
	if (tableData.length < 5) {
		reservationArray.push(req.body);
	}
	else {
		waitingArray.push(req.body);
	}
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});