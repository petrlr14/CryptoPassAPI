'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config')
function createToken(user){
    const payload = {
        sub: user._id,
        iat: moment().unix(),
    }

    return jwt.encode(payload,config.SECRET_TOKEN)
}

function decodeToken(token){
    const decode = new Promise((resolve,reject)=>{
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN);
            resolve(payload.sub);
        }catch(err){
            reject({
                status:500,
                message: "Invalid token"
            });
        }
    })
    return decode;
}
module.exports = {createToken,decodeToken};