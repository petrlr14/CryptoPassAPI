'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routesUser = require('./routes/userRoute');

app.use(bodyParser.urlencoded({useNewUrlParser: false}));
app.use(bodyParser.json());

app.use('/api',routesUser);

module.exports =app;