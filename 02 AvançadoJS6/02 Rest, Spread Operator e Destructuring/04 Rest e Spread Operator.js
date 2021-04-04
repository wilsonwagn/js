//Rest e Spread Operator
//O que é Rest? — Argumentos além do que definido na função.
//Rest pega todos os parametros de uma função e transforma numa array.

//Exemplo Rest: 
function sum(...args){
    console.log("Arguments: ", arguments)
    console.log("Args: ", args)
}
console.log("Exemplo rest: ", sum(5,5,6,9,3))

//Exemplo Rest2.
function sum2(...args){
    return args.reduce((acc,value) => acc + value, 0);
}
console.log("Exemplo rest2: ", sum2(5, 5, 5, 2,3))

//Exemplo Rest3 + Arrow Functions:
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum3 = (...rest) => {
    return multiply.apply(undefined, rest);
}

console.log("Exemplo rest3: ", sum3(5, 5, 5, 2, 3));

// O que é spread operator? — Pega todos os itens de uma array e transforma em parametros.
// Funciona em strings, arrays e objetos interaveis

//Exemplo de Spread:
const str = 'Nicki Minaj'
function logArgs(...args){
    console.log(args)
}
logArgs(...str)
console.log('teste')

//Exemplo de Spread2:
const arr = [1, 2, 3, 4]
function logArgs(a, b, c){
    console.timeLog(a, b, c)
}
logArgs(...arr);