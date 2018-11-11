'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function isAuth(req,res,next){
    if(!req.headers.autorization){
        return res.status(403).send({message:'No authorization'})
    }
    const token = req.headers.autorization.split(" ")[1];
    const payload = jwt.decode(token,config.SECRET_TOKEN);

    if(payload.exp <= moment().unix()){
        return res.status(401).send({message: 'Token expired'});
    }
    req.user = payload.sub
    next();
}

module.exports = isAuth;