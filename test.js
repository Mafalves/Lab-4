const uuid = require('uuid/v1');
const Categoria = require('./Categoria');
const Chamad = require('./Chamado');
const Projeto = require('./Projeto');

let projetos = [];
let categorias = [];
let chamados = [];

projetos.push(new Projeto('Microsft'));

categorias.push(new Categoria('Outlook', 'Falha ao conectar'));

projetos[0].chamados.push(
    {
        analista: 'Testa',
        impacto: 'Low',
        localidade: 'Brazil',
        id: uuid(),
        categoriaId: categorias.filter( c => c.name === 'Outlook')[0].id,
        data: Date.now()
    });

console.log(projetos);
console.log(projetos[0]);


//Separar classes em arquivos diferente
//Criar rotas para Categoria, Projeto e Chamados

//Post Categoria
//Criar uma categoria, Adiciona num array (categorias) e envia (resposta)
//com o objeto criado

//Post Projeto
//Criar um projeto, adicona no array, retorna objecto criado

//Post Chamado
//Busca o chamado no array de projetos
//Adiciona o chamado pro projeto
//envia a responta com chamado criado

//Criei GET Routes para:
//Ver todos os projetos criados
//Ver todos as categorias criadas
