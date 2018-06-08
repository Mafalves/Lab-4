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
        if(typeof(analista === 'string'))
        {
            this.analista = analista;
        }
    }

    setImpacto(impacto)
    {
        if(typeof(impacto === 'string'))
        {
            this.impacto = impacto;
        }
    }

    setLocalidade(localidade)
    {
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