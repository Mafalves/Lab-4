const db = require('mongoose');
db.connect("mongodb://admin:123abc@ds016058.mlab.com:16058/dbtest");
const Chamado = require('./Chamado.Model');

let projetoSchema = db.Schema({
    name: String,
    chamados: [],
});

module.exports = db.model('Projeto', projetoSchema);