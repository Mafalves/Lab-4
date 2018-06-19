const db = require('mongoose');
db.connect("mongodb://admin:123abc@ds016058.mlab.com:16058/dbtest");

let analistaSchema = db.Schema({
    firstName: String,
    lastName: String
});

module.exports = db.model('Analista', analistaSchema);

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

Analista.find(function(err, anlistas){
    if(err)
    {
        return console.error(err);
    }
    console.log(anlistas);
});
*/