'use strict'

const User = require('../modules/user');

function signUp(req,res){
    let user = new User();
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.nickname = req.body.nickname;
    user.email = req.body.email;
    user.secondaryEmail = req.body.secondaryEmail;
    user.password = req.body.password;
    user.phone = req.body.phone;

    user.save((err,user)=>{
        if(err) return res.status(500).send({
           message: 'Something is wrong '+err 
        });
        res.status(200).send({user});
        
    });
}

function getAllUsers(req,res){
    User.find({},(err,users)=>{
        if(err) return res.status(500).send({message: 'Something is wrong ' + err });
        if(!users) return res.status(404).send({message: 'empty'});
        return res.status(200).send(users);
    });
}

module.exports = {
    signUp,
    getAllUsers
}
