const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');


// app setting
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");


// usage
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "img")));
app.use("/themify-icons",express.static(__dirname + '/themify-icons'));
app.use("/public", express.static(path.join(__dirname, "public")));


// route
app.use('/', require('./routes/ActivityLog'));


// start server
app.listen(PORT, () => {
    console.log("Server start at 127.0.0.1:" + PORT);
});