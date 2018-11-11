'use strict'

const express = require('express');
const UserCtrl = require('../controllers/userController');
const api = express.Router();
const app = express();

api.get('/users',UserCtrl.getAllUsers);

module.exports = api;