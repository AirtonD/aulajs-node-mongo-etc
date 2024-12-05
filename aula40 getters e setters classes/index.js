const _velocide = Symbol();
 class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocide] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar () {
        if (this[_velocide] >= 100) return;
        this[_velocidade]++;
    }
 }