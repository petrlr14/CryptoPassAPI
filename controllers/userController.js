'use strict'

const User = require('../modules/user');

function getAllUsers(req,res){
    User.find({},(err,users)=>{
        if(err) return res.status(500).send({message: `Something is wrong ${err} `});
        if(!users) return res.status(404).send({message: 'empty'});
        return res.status(200).send(users);
    });
}

module.exports = {
    getAllUsers
}
