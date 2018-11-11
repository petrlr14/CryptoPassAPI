'use strict'

const express = require('express');
const AuthCtrl = require('../controllers/authController');
const api = express.Router();

api.post('/signUp',AuthCtrl.signUp);
api.get('/signIn',AuthCtrl.signIn);

module.exports = api;