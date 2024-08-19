const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))

app.listen(8081,function(){
    console.log('Servidor ok!')
})

let livrosHtml = ''

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index2.html')
})
app.get('/cadastro',function(req,res){
    res.sendFile(__dirname + '/cadastro.html')
})

app.post('/cadastro',function(req,res){
    livrosHtml += `
    <p>
        <strong>Título:</strong>${req.body.titulo}<br>
        <strong>Autor:</strong>${req.body.autor}<br>
        <strong>Gênero:</strong>${req.body.genero}<br>
        <strong>Número de páginas:</strong>${req.body.paginas}<br>
        <strong>Preço:</strong>${req.body.preco}<br>
    </p>    
    `
    res.send('<center>Livro cadastrado com sucesso!<br><a href="/">Voltar</a>')
})
app.post('/consulta',function(req,res){
    res.send(`
    <h1>Consulta de livros</h1>
    ${livrosHtml}
    <br><a href="/">Voltar para página inicial</a>
    `)
})

