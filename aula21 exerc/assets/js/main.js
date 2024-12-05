function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        function setResultado (msg) {
            resultado.innerHTML = msg;
        }

        let peso = form.querySelector('#peso');
        let altura = form.querySelector('#altura');
        let imc = peso.value / (altura.value ** altura.value);
        imc = imc.toFixed(1);

        if (!imc) {
            setResultado(`<p id="inv">Valor inválido</p>`)
            console.log(imc);
        } else if (imc < 18.5) {
            setResultado(`<p id="baixo">Seu IMC é ${imc} (Abaixo do peso)</p>`);
            console.log(imc);
        } else if (imc >= 18.5 && imc <= 24.9) {
            setResultado(`<p id="normal">Seu IMC é ${imc} (Peso normal)</p>`);
            console.log(imc);
        } else if (imc >= 25 && imc < 30) {
            setResultado(`<p id="sobrepeso">Seu IMC é ${imc} (Sobrepeso)</p>`);
            console.log(imc);
        } else if (imc >= 30 && imc < 35) {
            setResultado(`<p id="ob1">Seu IMC é ${imc} (Obesidade grau 1)</p>`);
            console.log(imc);
        } else if (imc >= 35 && imc < 40) {
            setResultado(`<p id="ob2">Seu IMC é ${imc} (Obesidade grau 2)</p>`);
            console.log(imc);
        } else   {
            setResultado(`<p id="ob3">Seu IMC é ${imc} (Obesidade grau 3)</p>`);
            console.log(imc);
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();