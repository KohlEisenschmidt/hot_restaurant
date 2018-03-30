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
var data = {
    res: [],
    waitlist: [],
};
var visitorCount = 0;

// these are for the html pages

//homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    visitorCount++;
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
    res.json(data.res);
});
  
app.get("/api/waitlist", function(req, res) {
    res.json(data.waitlist);
});

app.get("/api/table", function(req, res) {
    var tablesTaken = req.params.table;
  //chosen is tablesTaken
  // characters is table
    if (tablesTaken) {
      console.log(tablesTaken);
  
      for (var i = 0; i < table.length; i++) {
        if (chosen === table[i].routeName) {
          return res.json(table[i]);
        }
      }
      return res.json(false);
    }
    return res.json(table);
  });

  // create new reservations
app.post("/api/reserve", function(req, res) {
    var newreservation = req.body;
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    reservations.push(newreservation);

    res.json(newreservation);
});

//server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
