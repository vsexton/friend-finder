var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
   
//express 
var app = express();
var port = process.env.PORT || 8080

//expose the public derectory to access css file 
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(port, function() {
  console.log('Friend Finder app is listening on PORT: ' + port);
});