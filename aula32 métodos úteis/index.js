// const produto = { nome: 'Caneca', preco: 1.8};
// const outraCoisa = produto;

// produto.nome = 'Airton';
// console.log(produto.nome);
// console.log(outraCoisa.nome);

// // dessa forma os dois objetos ficam interligados

// // para apenas copiar os valore se usa o spread operataor (...)

// const produto2 = { nome: 'Caneca', preco: 1.8};
// const outraCoisa2 = {...produto2};

// outraCoisa2.nome = 'Airton';
// console.log("____")
// console.log(produto2.nome)
// console.log(outraCoisa2.nome);

// //pode-se junto com spread operador, incluir novas chaves

// const produto3 = { nome: 'Caneca', preco: 1.8};
// const outraCoisa3 = {
//     ...produto2,
//     material: 'porcelana'
// };

// outraCoisa2.nome = 'Airton';
// console.log("____")
// console.log(outraCoisa3.material);

const produto = { nome: 'Produto', preco: 1.8};
const caneta = Object.assign({}, produto);

// // .keys um array com os nomes das chaves
// // .values retornar apenas os valores do objeto
// // .entries retora os valores e as chaves

// console.log(Object.keys(produto));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));


// Object.freeze(produto); // não deixa fazer mais nada com o objeto

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// });

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //ver as propriedades da chave - value: valor da variável; writable: pode alterar o valor; enumerable: será exibido; configurable: conseguesse excluir/alterar

