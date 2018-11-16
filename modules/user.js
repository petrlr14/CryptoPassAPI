'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    name: {
            type: String, 
            required:true
        },
    lastName: {
            type: String, 
            required:true
        },
    nickname: {
            type: String, 
            required:true,
            unique: true
        },
    email: {
            type: String, 
            required:true,
            unique: true
        },
    password: {
            type: String, 
            required:true
        },
    phone: {
            type: String, 
            required:false
        },
    active: {
        type:Boolean,
        default: true
    },
    user_accounts:[{
        _id:false,
        accounts:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Account"
        }
    }]
});

UserSchema.pre('save',function(next){
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