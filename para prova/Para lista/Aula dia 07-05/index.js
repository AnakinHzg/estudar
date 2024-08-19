const express = require('express')

const app = express()

// Abrindo um servidor

app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})

app.get("/",function(req,res){
    res.send("Seja mal vindo!") //send envia resposta

})


app.get("/sobre",function(req,res){
    res.send("Minha página sobre!") //send envia resposta

})     

app.get("/blog",function(req,res){
    res.send(`<h1>Minha página blog!</h1>`) //send envia resposta

})    

// module.exports =teeryh