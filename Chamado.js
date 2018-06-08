const uuid = require('uuid/v1');
const Categoria = require('./Categoria');

class Chamado
{
    constructor(analista, impacto, localidade, categoriaId)
    {
        this.setAnalista(analista);
        this.setImpacto(impacto);
        this.setLocalidade(localidade);
        this.setCategoriaID(categoriaId);        
        this.id = uuid();
        this.data = Date.now();
    }

    setAnalista(analista)
    {
        //Nao vou corrigir esse pra tu corrigir ai
        //O certo e typeof() === 'algumacoisa' 
        //Tu tava fazendo typeof(algo === 'outracoisa')
        if(typeof(analista === 'string'))
        {
            this.analista = analista;
        }
    }

    setImpacto(impacto)
    {

        //O certo e typeof() === 'algumacoisa' 
        //Tu tava fazendo typeof(algo === 'outracoisa')
        if(typeof(impacto === 'string'))
        {
            this.impacto = impacto;
        }
    }

    setLocalidade(localidade)
    {
        //O certo e typeof() === 'algumacoisa' 
        //Tu tava fazendo typeof(algo === 'outracoisa')
        if(typeof(localidade === 'string'))
        {
            this.localidade = localidade;
        }
    }

    setCategoriaID(categoriaId)
    {
        this.categoriaId = categoriaId;
    }
}

module.exports = Chamado;