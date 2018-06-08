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

var projetos = [ 'Micromoney', 'Cisco', 'Ovos'];
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
    //Nao esquece de colocar os return no res.send
    //A funcao acaba aki, mas e sempre bom botar...
    return res.send(projetos[0]);
});


app.post('/Categorias', (req, res) =>
{
    categorias.push(new Categoria(
        req.body.name,
        req.body.descricao
    ));
    return res.send(categorias[0]);
});

app.post('/Chamados', (req, res) =>{
    projetos[0].chamados.push(new Chamado(
        req.body.analista,
        req.body.impacto,
        req.body.localidade,
        req.body.categoriaId
    ));
    return res.send(projetos[0].chamados[0]);
});

// GET ROUTES
app.get('/', (req, res) =>{
    return res.send({msg: '4º Lab de JS. Nessa lab serão apresentados os projetos com seus chamados'});
});

app.get('/Projetos', (req, res) =>{

    //POST - JSON
    //req.body
    //GET - ?key=valor (Query String)
    //req.query

        if(req.query && req.query.hasOwnProperty('filter')){

            let result = projetos.filter( p => p == req.query.filter);

            return res.send({ ...result });
        }

    return res.send({ ...projetos });
});


app.get('/Categorias', (req, res) =>{
    return res.send(categorias[0]);
});

app.get('/Chamados', (req, res) =>{
    return res.send(projetos[0].chamados);
});

// Start Server
app.listen('8080', () => {
    console.log('Server ta ON');
});

console.log(projetos);
console.log(categorias);
console.log(chamados);