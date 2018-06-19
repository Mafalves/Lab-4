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
