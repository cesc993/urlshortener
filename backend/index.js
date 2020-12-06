const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/api');
const cors = require('cors');

global.session = [];

// parser form-data o json data
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', urlRoutes);

// handling middleware
app.use(function (err, req, res, next) {
    res.status(400).send({
        error: err.message
    });
});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});