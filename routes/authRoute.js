'use strict'

const express = require('express');
const AuthCtrl = require('../controllers/authController');
const api = express.Router();

api.post('/signUp',AuthCtrl.signUp);
api.post('/signIn',AuthCtrl.signIn);

module.exports = api;