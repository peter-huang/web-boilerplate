require('dotenv').config()

const bodyParser                = require("body-parser");
const express                   = require("express");
const route                     = require("./route/route.js");

const app = express();

/* Change view engine to EJS */
app.set("view engine", "ejs");

/* Enable resources to be accessible in the public directory */
app.use(express.static(__dirname + "/public"))

/* Middleware to parse incoming request bodies to req.body */
app.use(bodyParser.urlencoded({extended: true}));

/* Import default route module */
route(app);

/* Server is up and running */
app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server is running");
})