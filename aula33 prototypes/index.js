function Pessoa( nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){ //utilizasse para evitar gastar muita memória para que um método nao seja criada varias vezes a cada objeto criado
    return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(pessoa1);
console.dir(pessoa2);