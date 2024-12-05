export const nome = 'Luiz';
export const sobrenome = 'Miranda';
const idade = 30;

export default function soma(x, y) {  //qualquer coisa que for importado sem especificar, chamará o default
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = nome;
    }
}