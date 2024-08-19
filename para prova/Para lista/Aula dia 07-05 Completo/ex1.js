const express = require('express')

const app = express()


app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})

app.get("/historia",function(req,res){
    res.send("Hístória da empresa")

})


app.get("/equipe",function(req,res){
    res.send("Equipe da empresa") 

})     

app.get("/missao-visao",function(req,res){
    res.send(`<h1>Missão evisão da empresa</h1>`)

})    

