// Express Dependency
const express = require("express");

// Require the Controllers
const apiRoutes = require("./controllers");
const htmlRoutes = require("./controllers/htmlController")

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8081;

// MIDDLEWARE FUNCTIONS
// Listen to incoming post requests, handle data parsing, and populate the req.body object 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets static folder to retrieve the files in the public folder
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use(htmlRoutes);

// Starts server to begin listening to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

