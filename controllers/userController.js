'use strict'

const User = require('../modules/user');

function signUp(req,res){
    let user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        nickname: req.body.nickname,
        email: req.body.email,
        secondaryEmail: req.body.secondaryEmail,
        password: req.body.password,
        phone: req.body.phone
    });
    user.save((err)=>{
        if(err) return res.status(500).send({
           message: 'Something is wrong '+err 
        });
        res.status(200).send({
           message: 'Succeess signup' 
        });
        
    });
}
