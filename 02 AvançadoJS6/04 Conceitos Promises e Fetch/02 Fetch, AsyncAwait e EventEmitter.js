// Fetch, Async/Await e EventEmitter

// Fetch = Tem o intuito de fazer requisições, se utilizando de promises.

// Async/Await = Forma de criar de promisses mais simples, e lidar com outras promisses.
const funçãoSimples = async() => {
    return 12345
}

funçãoSimples().then(data => {
    console.log(data);
})

// Lidando com erros:

const funçãoSimples = async() => {
    throw now Error("Oh shit, essa merda deu erro!");
    return 12345;
}

funçãoSimples()
    .then(data => {
    console.log(data);
    })
    .catch(err => {
        console.log(err)
    })




    