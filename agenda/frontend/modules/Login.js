import validator from 'validator';

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init() {
        this.events();
    }
    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validade(e);
           
        });
    
    }
    validade(e) {
        console.log(e);
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
          }

        if(!validator.isEmail(emailInput.value)){
            this.criaErro(el .email, "E-mail inválido!");
            error = true;
        }
        if(passwordInput.value.length <3 || passwordInput.value.length > 50){
            this.criaErro(el .password, "Senha precisa ter entre 3 e 50 caracteres!");
            error = true;
        }

        if(!error) el.submit();

        
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
      }
}