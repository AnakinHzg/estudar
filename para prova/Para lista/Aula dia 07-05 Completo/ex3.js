const express = require('express')

const app = express()


app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})

app.get("/contato",function(req,res){
    res.send("Página de contato da empresa")

})


app.get("/telefone",function(req,res){
    res.send("Número de telefone da empresa") 

})     

app.get("/email",function(req,res){
    res.send("Endereço de e-mail da empresa")

})    

