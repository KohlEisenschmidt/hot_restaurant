// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//empty variables
// endless reservations can be made

var newreservations = []
var waitlist = []
// these are for the html pages

//homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
// tables html page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
// reservations html page
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//api links
app.get("/api/res", function(req, res) {
    res.json(newreservations);
});
  
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

app.get("/api/table", function(req, res) {
    var tablesTaken = req.params.table;
    console.log("--------------" + newreservations)
  
    res.json(newreservations);

  });

  // create new reservations
app.post("/api/reserve", function(req, res) {
    var newreservation = req.body;
    console.log(newreservation)
    newreservation.routeName = newreservation.customerName.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    // newreservations.push(newreservation);

    console.log("this is in our api/reserve route" + newreservations)

    
    if (newreservations.length < 5){
        newreservations.push(newreservation)
     } else {(waitlist.push(newreservation));
        
    }
});

//server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
