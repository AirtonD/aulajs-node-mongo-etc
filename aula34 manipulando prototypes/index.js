function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto ('Camiseta', 50);

p1.aumento(100);

console.log(p1);

const p2 = { //objeto criado separadamento do objeto Produto
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); //p2 herda o prototype do objeto Produto

p2.aumento(10);

console.log(p2);

const p3 = Object.create(Produto.prototype); //cria o objeto e já seta o prototype
p3.preco = 113;
p3.aumento(10);
console.log(p3);