// Callbacks e Promises

// Callbacks = callback é um tipo de função que só é executada após o processamento de outra função.

// Promises = são códigos que não vão influenciar na linha do tempo do meu código do javascript,
// são funções que vão devolver o resultado seja ele de erros ou não só depois de um tempo.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Primeira Informação');
    }, 1000);
})


const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Segunda Informação');
    }, 5000);
});


console.log(myPromise)
myPromise
    .then(data => {
        console.log(data)
        return myPromise2
    })
    .then(data2 => console.log(data2))
    .catch();
// Promisses pode ter 3 status. (pending | pendente, fulfilled | terminou de executar, rejectd | rejeitada)