function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco += quantia;
}

function Caneca(nome,preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;