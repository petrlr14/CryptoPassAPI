'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routesUser = require('./routes/userRoute');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.use(bodyParser.urlencoded({useNewUrlParser: false}));
app.use(bodyParser.json());

app.use('/api',routesUser);

module.exports =app;