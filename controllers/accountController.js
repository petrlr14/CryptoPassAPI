'use strict'
const Account = require("../modules/account");
const AES = require('crypto-js/aes');
const User = require('../modules/user');

function newAccount(req,res){
    var userId = req.body._id;
    var privateKey="";
    var newAccount = new Account();
    newAccount.wallpaper = req.body.wallpaper ;
    newAccount.name = req.body.name ;
    newAccount.description = req.body.description ;
    newAccount.url = req.body.url ;
    newAccount.login = req.body.login;
    newAccount.password= req.body.password;

    User.findById(userId,(err,usr)=>{
        if(err) return res.status(500).send({message:'internal error'})
        if(!usr) return res.status(404).send({message:"User not found, please sign"})
        privateKey = usr.password.substring(0,31);
        newAccount.password = AES.encrypt(newAccount.password,privateKey);
        newAccount.login = AES.encrypt(newAccount.login,privateKey);
        
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
    })    
    

}
function deleteAccount(req,res){
    let nameAccount = req.params.nameAccount;
    let userId = req.body._id;
    User.findById(userId,(err,usr)=>{
        if(err) return res.status(500).send({message:'Internal Error'});
        if(!usr) return res.status(404).send({message:'404 User not found'});
        Account.findOne({'nameAccount':nameAccount},(err,account)=>{

            if(err) return res.status(500).send({message:'Internal error'});
            if(!account) return res.status(404).send({message:'Account not found 404'});
            
            usr.user_accounts.forEach(element => {
                if(element.id_account == account._id){
                    usr.user_accounts.splice(usr.user_accounts.indexOf(element),1);
                }
            });
            Account.findByIdAndDelete(account._id,(err,res)=>{
                if(err) return res.status(500).send({message:'Internal Error'});

                return res.status(200).send({message:'Account removed successfuly'})
            })
        })
    })
}
module.exports ={
    newAccount,
    deleteAccount
}