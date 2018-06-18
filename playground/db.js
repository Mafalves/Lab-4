//Vamos aprender Banco de dados
//MongoDb + Mongoose
//mongodb://admin:123abc@ds016058.mlab.com:16058/dbtest -connection String

//MongoDb, Cosmo, Firebase, Redis, Casandra    -      SQL, MySql, Oracle
//NoSQL
//Document Driven                              -  Entidades

//SQL
//Pessoa - Table, Id, Foreign key (nome - varchar, NOT NULL, sobrenome, varchar, NOT NULL, age, INT NULL);
//Row

//NoSQL
//Pessoa - Collection, Id, 
//Documents

const db = require('mongoose');
db.connect("mongodb://admin:123abc@ds016058.mlab.com:16058/dbtest");


let analistaSchema = db.Schema({
    firstName: String,
    lastName: String
});

let Analista = db.model('Analista', analistaSchema);

/*
let anl1 = new Analista(
    {
        firstName: 'Moisés',
        lastName: 'Alves'
    }
);

anl1.save(function(err, anl1){
    if(err)
        return console.error(err); 
});
*/

Analista.find(function(err, anlistas){
    if(err)
    {
        return console.error(err);
    }
    console.log(anlistas);
});