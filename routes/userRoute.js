'use strict'

const express = require('express');
const UserCtrl = require('../controllers/userController');
const api = express.Router();
const app = express();

console.log('making this');
app.use(cors());

api.post('/insertUser',UserCtrl.signUp);
api.get('/users',UserCtrl.getAllUsers);

module.exports = api;