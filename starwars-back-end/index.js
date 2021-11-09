"use strict";
var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());

var port = process.env.port || 8080
app.listen(port, () => {
    console.log('Server started on port', port)
})


function setUpRoutes() {
    const routes = require("./routes");
    routes.setup(app);
}

setUpRoutes();

module.exports = app;
