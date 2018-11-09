'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
            type: String, 
            require:true
        },
    lastName: {
            type: String, 
            require:true
        },
    nickname: {
            type: String, 
            require:true
        },
    email: {
            type: String, 
            require:true
        },
    secondaryEmail:{
            type: String, 
            require:false
        },
    password: {
            type: String, 
            require:true
        },
    phone: {
            type: String, 
            require:false
        },
    active: {
        type:Boolean,
        default: true
    },
    user_accounts:[{
        _id:false,
        accounts:{
            type: mongoose.Schema.Types.Mixed,
            ref:"Account"
        }
    }]
});

module.exports = mongoose.model('User',UserSchema);