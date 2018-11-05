'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = Schema({
    wallpaper: String,
    name: String,
    description: String,
    url:String,
    login: String,
    password: String
});

module.exports = mongoose.model('Account',AccountSchema);