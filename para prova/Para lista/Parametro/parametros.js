//


const express = require('express')

const app = express()

app.listen(3000,function(){
    console.log('Servidor ok!')
})

app.get('/ola/:cargo/:nome/:cor',function(req,res){
    res.send(`Olá ${req.params.nome} seu cargo é: ${req.params.cargo} e sua cor favorita é: ${req.params.cor}`)
    
})
app.get('/aula/:aluno/:curso/:ano',function(req,res){
    res.send(`Olá ${req.params.aluno} seu curso é: ${req.params.curso} e seu ano é: ${req.params.ano}`)
    
})