//chamar a dependencia express 
//chamar a dependecia mongoose
//chamar a dependencia cors (Serve para permitir acesso atraves de outras rotas)
const express = require('express');
const mongoose = require('mongoose');
const Requiredir = require('require-dir');
const cors = require('cors');
//Inciando o APP
const app = express();
app.use(express.json());//permita que envie dados para aplicação no formato de JSON
//chamar a variavel pela função 
app.use(cors());//Qual dominio permite acesso 

//inciando o DB
mongoose.connect("mongodb://192.168.99.100:27017/nodeapi",
{useNewUrlParser:true,
useUnifiedTopology: true,
}
);

Requiredir("./src/models");

//http://192.168.99.100:27017/ pois o docker quick starter ele nao funciona no local host direto 
//tem que passar docker-machine ip. para verificar o Ip e atribuir :porta em que esta o container

console.log("Aplicação do Mongoose Rodando na porta 3001")
//ROtas
//Toda rota que tiver api ira receber do arquivo routes.js
app.use('/api', require('./src/routes'));

//req faz a requisição
//res devolve 

app.listen(3001);
//escutar na porta 30001