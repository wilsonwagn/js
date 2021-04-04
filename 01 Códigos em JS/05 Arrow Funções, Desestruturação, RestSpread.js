const soma = (a = 1, b = 2) => a+b;
console.log(soma)

//==> Desestruturação | Desestruturação de objetos.

const usuario = {
    nome: "Wilson",
    idade: 23,
    endereço: {
        cidade: "Ipojuca",
        estado: "PE",
    },
};

//Ex1:
const { nome, idade, endereço: { cidade } } = usuario
console.log(nome);
console.log(idade);
console.log(cidade);

//Ex2: 
function mostraNome({ nome, idade }){
    console.log(nome, idade);
}

mostraNome(usuario);
*/

//==> Rest/Spread:
// REST: Pega o resto das propriedades usando "..."

//Ex1:
/*
const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "Rockeseat"
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);
*/

//Ex2:
/*
const array = [1,2,3,4];
const[a,b,...c] = array;

console.log(c)
*/
//Ex3:
/*
function soma(...params){
    return params.reduce((total, next) => total+next);
}
console.log(soma(1,2,3))

*/

//==> Rest/Spread:
// SPREAD: Repassar as informações de objeto/array para outra estrtura.

//Ex1:
/*
const ar1 = [1,2,3];
const ar2 = [4,5,6];
const arr3 = [...ar1,...ar2];

//Ex2:
const usuario = {
    nome: "Wilson",
    idade: 21,
    Cidade: "Ipojuca"
};

const usuario2 = { ...usuario, nome: "Bruno"};
console.log(usuario);
console.log(usuario2);
