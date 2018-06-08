const uuid = require('uuid/v1')


class Categoria
{
    constructor(name, descricao)
    {
        this.id = uuid();
        this.setName(name);
        this.setDescricao(descricao);
    }

    setName(name)
    {
        if(typeof (name === 'string')) 
        {
            this.name = name;
        }
    }

    setDescricao(descricao) 
    {
        if(typeof(descricao === 'string')) 
        {
            this.descricao = descricao;
        }
    }
}

module.exports = Categoria;