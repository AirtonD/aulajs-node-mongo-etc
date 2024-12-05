const container = document.querySelector('.container');
const data = new Date('2024-07-14 15:5');
let weekDay = diaSemana(data.getDay());
let day = data.getDate();
let month = mesAno(data.getMonth());
let year = data.getFullYear();
let hour = zeroAesquerda(data.getHours());
let min = zeroAesquerda(data.getMinutes());

function diaSemana(weekDay) {
    switch (weekDay) {
        case 0:
            return weekDay = 'domingo';
        case 1:
            return weekDay = 'segunda-feira';
        case 2:
            return weekDay = 'terça-feira';
        case 3:
            return weekDay = 'quarta-feira';
        case 4:
            return weekDay = 'quinta-feira';
        case 5:
            return weekDay = 'sexta-feira';
        case 6:
            return weekDay = 'sábado';
    }
}
function mesAno(month) {
    let nomeMes
    switch (month) {
        case 0:
            return nomeMes = 'janeiro';
        case 1:
            return nomeMes = 'fevereiro';
        case 2:
            return nomeMes = 'março';
        case 3:
            return nomeMes = 'abril';
        case 4:
            return nomeMes = 'maio';
        case 5:
            return nomeMes = 'junho';
        case 6:
            return nomeMes = 'julho';
        case 7:
            return nomeMes = 'agosto';
        case 8:
            return nomeMes = 'setembro';
        case 9:
            return nomeMes = 'outubro';
        case 10:
            return nomeMes = 'novembro';
        case 11:
            return nomeMes = 'dezembro';

    }
}
function zeroAesquerda(valor) {
    return valor >= 10 ? num : `0${valor}`;
}

container.innerHTML = `<h1>${weekDay}, ${day} de ${month} de ${year} ${hour}:${min}</h2>`;