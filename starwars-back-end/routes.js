"use strict";

exports.setup = function (app) {
    console.log('Setting up routes..')

    var Person = require('./server/apis/Person/Person.route');
    app.use("/api/v1/person", Person);

};

module.exports = exports;