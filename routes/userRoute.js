'use strict'

const express = require('express');
const UserCtrl = require('../controllers/userController');
const api = express.Router();
const auth = require('../middleware/auth');

api.get('/users',auth,UserCtrl.getAllUsers);
api.get('/myUser/:nickname',auth,UserCtrl.getUserByNickname);

module.exports = api;