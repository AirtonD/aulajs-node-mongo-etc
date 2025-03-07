import validator from 'validator';

export default class Contato {
    constructor(formContato) {
        this.form = document.querySelector(formContato);
    }
    init() {
        this.events();
    }
    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validade(e);
            
        });

    }
    validade(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        if (!nomeInput.value) {
            this.criaErro(nomeInput, "Nome é obrigatório.");
            error = true;
        }
        if (!sobrenomeInput.value) {
            this.criaErro(sobrenomeInput, "Sobrenome é obrigatório.");
            error = true;
        }
        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            this.criaErro(emailInput, "E-mail inválido!");
            error = true;
        }
        if (!telefoneInput.value && !emailInput.value) {
            this.criaErro(emailInput, "Pelo menos um contato precisa ser inserido.");
            this.criaErro(telefoneInput, "Pelo menos um contato precisa ser inserido.");
            error = true;
        }

        if (!error) el.submit();


    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}