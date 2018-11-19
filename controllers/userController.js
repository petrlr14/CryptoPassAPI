'use strict'

const User = require('../modules/user');

function getAllUsers(req,res){
    User.find({},(err,users)=>{
        if(err) return res.status(500).send({message: `Something is wrong ${err} `});
        if(!users) return res.status(404).send({message: 'empty'});
        return res.status(200).send(users);
    });
}
function getUserByNickname(req,res){
    let nickname = req.params.nickname;
    User.findOne({'nickname':nickname},(err, user)=>{
        if(err) return res.status(500).send({message:"internal error"});
        if(!user) return res.status(404).send({message:"404 user not found"});
        
        return res.status(200).send({user});
    })
}
function getUserAccountsByNickname(req,res){
    let nickname = req.params.nickname;
    User.findOne({'nickname':nickname},(err,usr)=>{
        if(err) return res.status(500).send({message:`Internal error ${err}`});
        if(!usr) return res.status(404).send({message:'Error 404 user not found'});
        let accouts = usr.user_accounts;
        res.status(200).send({accouts});
    })
}

module.exports = {
    getAllUsers,
    getUserByNickname,
    getUserAccountsByNickname
}
