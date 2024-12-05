class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return
        };
        this.ligado = true
    };
    desligar(){
        if (this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
    }
}

class Smartphone extends DispositivoEletronico {
    constructor (nome, cor) {
        super(nome);
        this.cor = cor
    }
}