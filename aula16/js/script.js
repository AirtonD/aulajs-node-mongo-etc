let nmr = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const nmr2 = document.getElementById('nmr2');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arredondadoParaBaixo = document.getElementById('arredondadoParaBaixo');
const arredondadoParaCima = document.getElementById('arredondadoParaCima');
const comDuasCasas = document.getElementById('comDuasCasas');

numeroTitulo.innerHTML, nmr2.innerHTML = nmr;
raiz.innerHTML = (nmr ** 0,5);
inteiro.innerHTML = Number.isInteger(nmr);
nan.innerHTML = Number.isNaN(nmr);
arredondadoParaBaixo.innerHTML = Math.floor(nmr);
arredondadoParaCima.innerHTML = Math.ceil(nmr);
comDuasCasas.innerHTML = nmr.toFixed(2);


