'use strict'

const express = require('express');
const accountCtrl = require('../controllers/accountController');
const api = express.Router();
const auth = require('../middleware/auth');

api.post('/newAccount',auth,accountCtrl.newAccount);
api.delete('/deleteAccount/:idAccount',auth,accountCtrl.deleteAccount);

module.exports = api;