// 1️⃣Copiando um Array
const numeros = [1, 2, 3];
const copia = [...numeros];
console.log(copia);

// 2️⃣Adicionando um Item sem Alterar o Original
const frutas = ['Abacate', 'Manga', 'Maça'];
const adicionaFruta = [...frutas, 'Pessêgo' ];
console.log(adicionaFruta);

//3️⃣Combinando Dois Arrays
const number = [1, 2, 3];
const number1 = [2, 4, 5];
const combinaArray = [...number, ...number1];

console.log(combinaArray);


// 4️⃣Cópia Segura 
//O array lista foi alterado? Justifique sua resposta.
/* Não, o array(original) não foi alterado, pois o push adicionou mais um elemento no final do array. Dessa maneira, somente a cópia foi alterada*/

// NIVEL 2
//5️⃣Atualizando Dados de um Objeto

function atualizarIdade(usuario, novaIdade) {
    return {...usuario, idade:novaIdade};
}
const usuario = { nome: "Ana", idade: 25 };
const usuarioAtualizado = atualizarIdade(usuario, 30);

console.log(usuario);
console.log(usuarioAtualizado);


// 6️⃣Adicionando Propriedade Dinâmica
function propriedadeAdicionada(objeto, chave, valor) {
    return { objeto, [chave]: valor};
}

const objeto = {nome: 'celular', marca: 'Samsumg' };
console.log(propriedadeAdicionada(objeto, 'ano', 2023 ));

// 7️⃣Carrinho de Compras
const aluno = {
 nome: "Lucas",
 idade: 17
}

const alunoAtualizado = {
    ...aluno, 
    curso: 'Desenvolvimento de sistemas'
}

console.log(alunoAtualizado); 

// 8️⃣  Alterando propriedade
const produto = {
 nome: "Notebook",
 preco: 3000
}

const produtoAtualizado = {
    ...produto, 
    preco: 3500
}

console.log(produtoAtualizado);

// 9️⃣ Simulando lista de tarefas
const tarefas1 = [];

const tarefas2 = [...tarefas1, 'Estudar JS']
const tarefas3 = [...tarefas2, 'Fazer exercício']
const tarefas4 = [...tarefas3, 'Dormir cedo']

console.log(tarefas4);

// 🔟 Lista de compras
const compras1 = [...compras, 'Macarrão']
const compras2 = [...compras1, 'Leite']
const compras3 = [...compras2, 'Ovos']

console.log(compras3);

// Desafio Final (nível técnico)
let listaDeTarefas = ["Estudar", "Treinar"]

listaDeTarefas = [...listaDeTarefas, 'Programar', 'Assistir Aula']

console.log(listaDeTarefas);