// Require all necessary modules
const logger = require('morgan');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Require local files
const Categoria = require('./Categoria');
const Chamado = require('./Chamado');
const Projeto = require('./Projeto');

var projetos = [];
var categorias = [];
var chamados = [];

//Sempre q for trampar com POST, copia os body parse
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//POST ROUTES

app.post('/Projetos', (req, res) =>{
    projetos.push(new Projeto(
        req.body.name,
        req.body.id,
        req.body.chamados
    ));
    res.send(projetos[0]);
});


app.post('/Categorias', (req, res) =>
{
    categorias.push(new Categoria(
        req.body.name,
        req.body.descricao
    ));
    res.send(categorias[0]);
});

app.post('/Chamados', (req, res) =>{
    projetos[0].chamados.push(new Chamado(
        req.body.analista,
        req.body.impacto,
        req.body.localidade,
        req.body.categoriaId
    ));
    res.send(projetos[0].chamados[0]);
});

// GET ROUTES
app.get('/', (req, res) =>{
    res.send({msg: '4º Lab de JS. Nessa lab serão apresentados os projetos com seus chamados'});
});

app.get('/Projetos', (req, res) =>{
    res.send(projetos[0]);
});

app.get('/Categorias', (req, res) =>{
    res.send(categorias[0]);
});

app.get('/Chamados', (req, res) =>{
    res.send(projetos[0].chamados);
});

// Start Server
app.listen('8080', () => {
    console.log('Server ta ON');
});

console.log(projetos);
console.log(categorias);
console.log(chamados);