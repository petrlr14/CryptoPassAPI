'use strict'

const mongoose = require('mongoose');
const User = require('../modules/user');
const service = require ('../services/index')
const bcrypt = require('bcrypt-nodejs');
function signUp(req, res){
    let user = new User();
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.nickname = req.body.nickname;
    user.email = req.body.email;
    user.secondaryEmail = req.body.secondaryEmail;
    user.password = req.body.password;
    user.phone = req.body.phone;

    user.save((err)=>{
        if(err) return res.status(500).send({
           message: 'Something is wrong '+err 
        });
        res.status(200).send({token: service.createToken(user)});
        
    });
}
function signIn(req,res){
    User.find({nickname: req.body.nickname},(err,user)=>{
        if(err) return res.status(500).send({message: err});
        if(!user[0]) return res.status(404).send({message: 'User not found'});

        const verifyPass = bcrypt.compareSync(req.body.password,user[0].password);

        if(!verifyPass) return res.status(403).send({message:"Invalid credentials"})
        req.user = user[0]
        res.status(200).send({
            token:  service.createToken(user)
        });
    })
}

module.exports ={
    signIn,
    signUp
}