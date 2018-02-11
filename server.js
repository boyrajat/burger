// dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Port and environmental variable
var PORT = process.env.PORT || 3000;

// Express boiler plate
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(express.static(process.cwd() + "/public"));

// Handlebars boilerplate
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give access to server
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

// Listen on port and confirm in terminal
app.listen(PORT, function() {
    console.log("Server has started");
});