const express = require('express')

const app = express()

app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})

app.get("/carreiras",function(req,res){
    res.send("Página de carreiras da empresa")

})


app.get("/beneficios",function(req,res){
    res.send("Página de benefícios da empresa") 

})     

app.get("/treinamento",function(req,res){
    res.send("Página de treinamento da empresa")

})   