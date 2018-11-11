'use strict'

const express = require('express');
const UserCtrl = require('../controllers/userController');
const api = express.Router();
const auth = require('../middleware/auth');

api.get('/users',auth,UserCtrl.getAllUsers);

module.exports = api;