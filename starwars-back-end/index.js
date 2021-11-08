"use strict";
var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());

var port = process.env.port || 5002
app.listen(port, () => {
    console.log('Server started on port', port)
})

app.use(bodyParser.json({ limit: "1000mb" }));

function setUpRoutes() {
    const routes = require("./routes");
    routes.setup(app);
}

setUpRoutes();

module.exports = app;
