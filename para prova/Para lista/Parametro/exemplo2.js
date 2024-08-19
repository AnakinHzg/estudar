const express = require('express')

const app = express()

app.listen(3000,function(){
    console.log('Servidor ok!')
})

app.get('/:nome/:cargo',function(req,res){
    res.send(`Olá ${req.params.nome} seu cargo é: ${req.params.cargo}`)
    
})
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
    
})

app.use('/img',express.static(__dirname + '/download.jpg'))