'use strict'

const express = require('express');
const AuthCtrl = require('../controllers/authController');
const auth = require('../middleware/auth.js');
const api = express.Router();

api.post('/signUp',AuthCtrl.signUp);

module.exports = api;