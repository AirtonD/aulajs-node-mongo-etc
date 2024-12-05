function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    estoqueP = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, //mostra a chave
        configurable: true, //pode apagar
        get: function(){
            return estoqueP;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                console.log('B');
                return;
            }
            estoqueP = valor;
        }
    });
}

const p1 = new Produto('Camiseta',  20, 3);
p1.estoque = "a";
console.log(p1.estoque);