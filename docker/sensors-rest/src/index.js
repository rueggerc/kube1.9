
var express = require("express");
var bodyParser = require("body-parser");
var controller = require("./controller");

// Setup
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));


// Get Sensor Data
app.route("/sensor/:type/:sensorID")
  .get(controller.getReadings);

// Set Sensor Data
app.route("/sensor/:type/:sensorID/:temp/:humidity")
  .post(controller.setReadings);


// Health Check
app.route("/sensor/health")
  .get(controller.health);


// Server
let server = app.listen(3000, function() {
    console.log("Sensor REST Server running on port 3000");
});