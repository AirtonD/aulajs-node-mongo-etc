const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let x = 10801000;

function zeroNaFrente(num) {
    return num >= 10 ? num : `0${num}`;
}

function hora() {
    relogio.style.color = 'black';
    let data = new Date(x);
    console.log(data);
    let hr = zeroNaFrente(data.getHours());
    let min = zeroNaFrente(data.getMinutes());
    let sec = zeroNaFrente(data.getSeconds());
    x = x + 1000;
    return `${hr}:${min}:${sec}`;

}

iniciar.addEventListener('click', function (event) {
    const timer = setInterval(function () {
        relogio.innerHTML = hora();
    }, 1000);
    pausar.addEventListener('click', function (event) {
        relogio.style.color = 'green';
        clearInterval(timer);
    },);
    zerar.addEventListener('click', function (event) {

        setTimeout(function () {
            clearInterval(timer);
            x = 1000 * 60 * 60 * 3;
            relogio.innerHTML = hora()
        }, 0)
    });
});


