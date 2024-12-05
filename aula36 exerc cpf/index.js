function validarCPF (cpf) { 

let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
let i = 11;
cpfArray.pop();
cpfArray.pop();

const total1 = cpfArray.reduce(function(acumulador, valor) {
return acumulador += (valor * --i);
},0);


let firstNumber = (11 - (total1 % 11));

if (firstNumber > 9) {
    firstNumber = 0
}

cpfArray.push(String(firstNumber));

i = 12;

const total2 = cpfArray.reduce(function(acumulador, valor) {
    return acumulador += (valor * --i);
    },0);

let secondNumber = (11 - (total2 % 11));

if (secondNumber > 9) {
    secondNumber = 0
}

cpfArray.push(String(secondNumber));

let cpfVerified = (String(cpfArray[0] + cpfArray[1] + cpfArray[2] + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "." + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10]));

if(cpfVerified === cpf) {
    console.log ("CPF Válido!");
} else {
    console.log ("CPF Inválido!")
}
}

validarCPF("097.589.499-42")
 