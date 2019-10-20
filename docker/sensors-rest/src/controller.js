"use strict";


// Get Readings
module.exports.getReadings = function(request,response) {
    console.log("getSensorInfo.parm:\n" + JSON.stringify(request.params,null,2));
    console.log("getSensorInfo.query:\n" + JSON.stringify(request.query,null,2));
    let sensorID = request.params.sensorID;
    let serviceResponse = {
        sensorID: sensorID,
        temperature: 72.99,
        humidity: 83.11
    }
    response.status(200).send(JSON.stringify(serviceResponse,null,2));
}

// Set Readings
module.exports.setReadings = function(request,response) {
    console.log("Set Readings: " + JSON.stringify(request.params,null,2));
    let type = request.params.type;
    let sensorID = request.params.sensorID;
    let temp = request.params.temp;
    let humidity  = request.params.humidity;
    console.log(`POSTed Data= type=${type} id=${sensorID} temp=${temp} humidity=${humidity}`)
    response.status(204).send({});
}

module.exports.health = function(request,response) {
    response.status(200).send("Sensor REST Service Health Check");
}