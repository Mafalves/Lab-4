let db = require('mongoose');
db.connect("mongodb://admin:123abc@ds016058.mlab.com:16058/dbtest");

let chamadoSchema = db.Schema({
    analistaID: String,
    impacto: String,
    localidade: String,
    categoriaID: String,
    data: {type: Date, deafult: Date.now}
});

module.exports = db.model('Chamado', chamadoSchema);
