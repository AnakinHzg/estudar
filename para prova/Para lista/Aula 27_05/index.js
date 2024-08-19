const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.listen(8081,function(){
    console.log('Servidor ok!')
})
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})
app.post('/frases',function(req,res){
    res.send(`Autor: ${req.body.autor} Frase: ${req.body.frase}`)
})


