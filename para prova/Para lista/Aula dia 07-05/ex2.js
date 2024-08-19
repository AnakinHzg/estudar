const express = require('express')

const app = express()


app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})

app.get("/politica-de-privacidade",function(req,res){
    res.send("Política de privacidade da empresa")

})


app.get("/politica-de-reembolso",function(req,res){
    res.send("Política de reembolso de empresa") 

})     

app.get("/termos-de-servico",function(req,res){
    res.send(`<h1>Termos de serviço da empresa</h1>`)

})    

