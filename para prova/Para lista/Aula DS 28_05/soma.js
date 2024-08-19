const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,function(){
    console.log('Servidor ok!')
})
app.get("/",function(req,res){
    res.sendFile(__dirname + '/index2.html')
})
app.get('/soma',function(req,res){
    res.sendFile(__dirname + '/soma.html')
})
app.post('/soma',function(req,res){
    const n1 = parseFloat(req.body.num1) 
    const n2 = parseFloat(req.body.num2)
    const total = n1 + n2
    res.send(`<center>O resultado da soma é: ${total}`)
})
