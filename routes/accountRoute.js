'use strict'

const express = require('express');
const accountCtrl = require('../controllers/accountController');
const api = express.Router();
const auth = require('../middleware/auth');

api.post('/newAccount',auth,accountCtrl.newAccount);

module.exports = api;