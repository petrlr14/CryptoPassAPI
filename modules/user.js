'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    lastName: String,
    nickname: String,
    email: String,
    secondaryEmail:String,
    password: String,
    phone: String,
    active: Boolean,
    accounts: [String]
});

module.exports = mongoose.model('User',UserSchema);