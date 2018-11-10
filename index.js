'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const config = require("./config");

app.listen(config.port,()=>{
    console.log(`Servidor corriendo puerto: ${config.port}`);
});
mongoose.connect(config.bd,(err,res)=>{
    if(err) throw err
    console.log("conexion establecida");

    
});

