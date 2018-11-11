'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

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
            require:true,
            unique: true
        },
    email: {
            type: String, 
            require:true,
            unique: true
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

UserSchema.pre('save',(next)=>{
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(12, (err,salt)=>{
        if(err) return next();

        bcrypt.hash(user.password, salt,null,(err,hash)=>{
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
})

module.exports = mongoose.model('User',UserSchema);