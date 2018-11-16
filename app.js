'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const app = express();
const routesUser = require('./routes/userRoute');
const routesAuth = require('./routes/authRoute');
const routesAccount = require('./routes/accountRoute');

app.use(cors());

app.use(bodyParser.urlencoded({useNewUrlParser: false}));
app.use(bodyParser.json());

app.use('/api',routesUser);
app.use('/api',routesAuth);
app.use('/api',routesAccount);


module.exports =app;