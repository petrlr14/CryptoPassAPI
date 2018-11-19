'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AES = require('crypto-js/aes');

const AccountSchema = new Schema({
    wallpaper: {
        type:String
    },
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String
    },
    url:{
        type:String,
        required:true
    },
    login: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
     
});

module.exports = mongoose.model('Account',AccountSchema);