const express = require('express')

const app = express()

app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})

app.get("/produtos",function(req,res){
    res.send("Página de produtos da empresa")

})


app.get("/servicos",function(req,res){
    res.send("Página de serviços da empresa") 

})     

app.get("/garantia",function(req,res){
    res.send("Página de garantia da empresa")

})   