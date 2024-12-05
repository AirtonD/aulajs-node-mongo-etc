const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const id = pessoas.map(valor => ({ idade: valor.idade}));
console.log(id);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 37];
// const numerosPares = numeros
// .filter(valor => valor % 2 === 0)
// .map(valor => valor * 2)
// .reduce((a,b) => a + b);

// console.log(numerosPares);

