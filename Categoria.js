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
        //O certo e typeof() === 'algumacoisa' 
        //Tu tava fazendo typeof(algo === 'outracoisa')
        if(typeof(name) === 'string') 
        {
            this.name = name;
        }
    }

    setDescricao(descricao) 
    {
        //O certo e typeof() === 'algumacoisa' 
        //Tu tava fazendo typeof(algo === 'outracoisa')
        if(typeof(descricao) === 'string') 
        {
            this.descricao = descricao;
        }
    }
}

module.exports = Categoria;