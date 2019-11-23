'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const config = require("./config");


const retry = ()=>{
	return connect();
}

const connect=()=>{
	mongoose.connect(config.bd,(err,res)=>{
	    if(err){
    		console.log(err);
	    	setTimeout(retry, 5000)
	    }
	    console.log("conexion establecida");

	    app.listen(config.port,()=>{
        	console.log(`Servidor corriendo puerto: ${config.port}`);
	    });
    
	});
}

connect();

