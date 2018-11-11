'use strict'
const service = require('../services/index')
function isAuth(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:'No authorization'})
    }
    const token = req.headers.authorization.split(" ")[1];
    
    service.decodeToken(token)
        .then(response =>{
            req.user = response
            next();
        })
        .catch(response =>{
            res.status(response.status).send("Error al decodificar");
        })
}

module.exports = isAuth;