//Destructuring = Pegar parte de variáveis e atribuindo a outras variaveis

//Jeito comum
var wilson = ["Nicki", "21 anos", "Black", ["kkk"]]
var nome = wilson[0]
var idade = wilson[1]
var corFavorita = wilson[2]
var risada = wilson[3][0]

//Nova formula com JS6
var [nome2, idade2, corFavorita2, [risada2]] = ["Nicki", "21 anos", "Black", ["kkk"]]
console.log(nome, nome2, risada2)

//Exemplo com objetos:

var objeto = {
    name: "Wilson"
};

var { name } = objeto;
console.log(name);