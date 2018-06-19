let db = require('mongoose');
db.connect("mongodb://admin:123abc@ds016058.mlab.com:16058/dbtest");

let categoriaScheme = db.Schema({
    name: String,
    Descricao: String
});

module.exports = db.model('Categoria', categoriaScheme);