const uuid = require('uuid/v1');
const Chamado = require('./Chamado');
const Categoria = require('./Categoria');

class Projeto
{
    constructor(name) 
    {
        this.setName(name);
        this.id = uuid();
        this.chamados = [];
    }

    setName(name) 
    {
        if (typeof (name === 'string')) 
        {
            this.name = name;
        }
    }
}

module.exports = Projeto;