'use strict'
const Account = require("../modules/account");
const User = require('../modules/user');

function newAccount(req,res){
    let userId = req.body._id;
    let newAccount = new Account();
    newAccount.wallpaper = req.body.wallpaper ;
    newAccount.name = req.body.name ;
    newAccount.description = req.body.description ;
    newAccount.url = req.body.url ;
    newAccount.login = req.body.login;
    newAccount.password= req.body.password;

    newAccount.save((err,account)=>{
        if(err) return res.status(500).send({message:`somthing is wrong ${err}`});
        
        User.findOne({'_id':userId},(err,user)=>{
            if(err) return res.status(500).send({message:`Something is wrong ${err}`});
            if(!user) return res.status(404).send({message:`User not exist`});
            user.user_accounts.forEach(element => {
                if(element.id_account == account._id){
                    user.user_accounts.splice(user.user_accounts.indexOf(element),1);
                }
            });
            user.user_accounts.push({id_account:account._id})
            user.save((err,usrUpdate)=>{
                if(err) return res.status(500).send({message:`Something is wrong ${err}`});
                res.status(200).send({message:'account created successfuly'})
            })
        })
    })

}

module.exports ={
    newAccount
}