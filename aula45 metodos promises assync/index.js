function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
        return;
        }

        resolve(msg.toUpperCase() + ' - Passei');
        return;
    }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject

// const promises = [
//     'primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 400),
//     esperaAi('Promise 3', 1000),
//     'Outro valor'
// ]

// Promise.all(promises)
// .then(function(valor){
// console.log(valor);}
// )
// .catch(function(erro){
//     console.log(erro);
// })

// const promises = [
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 400),
//     esperaAi('Promise 3', 1000),
// ]

// Promise.race(promises)
// .then(function(valor){
// console.log(valor);}
// )
// .catch(function(erro){
//     console.log(erro);
// })



async function  executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand()); // se não tiver assync e a funcao nao tiver retornado o valor ainda, exibirá "Pendente", por isso usasse assync, para continuar o codigo apenas quando ela for executada por completo.
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);

    } catch (e) {
        console.log(e);
    }
}

executa();