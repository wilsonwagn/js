/*
Desafio
Os cientistas brasileiros descobriram um exoplaneta a 1 bilhão de anos luz da terra. Ele foi carinhosamente batizado de Piralândia,
uma homenagem a cidade de Piracicaba, onde moram os cientistas. Após algum tempo observando esse planeta, os cientistas puderam ver que
nele haviam habitantes e, além disso, esses habitantes estavam tentando fazer contato com os cientistas através de uma comunicação numérica. 

Só que a numeração que encontraram estava invertida e como muitas delas foram descobertas, os cientistas chamaram você para conseguir automatizar esse processo. Logo, dado um número grande, sua tarefa é imprimir esse número invertido.

Entrada
O arquivo contém apenas uma linha de teste que é o número encontrado (0 < n < 9999999999).

Obs.: Perceba que o número lido é muito alto para armazenar em uma variável do tipo int, logo você irá precisar utilizar o tipo long, que para a leitura e impressão em C, você deve utilizar o %llu.

Saída
Imprimir o número lido invertido. Não esqueça de imprimir a quebra de linha (\n) no final, caso contrário você receberá (Presentation Error).

*/
let num = parseInt(gets());

var valorTotal = num


var valor100 = 0
var valor50 = 0
var valor20 = 0
var valor10 = 0
var valor5 = 0
var valor2 = 0
var valor1 = 0

flag = true
while (flag){
    if (num>=100){
        num-=100
        valor100+=1

    } else if (num>=50) {
        num-=50
        valor50+=1

    } else if (num>=20){
        num-=20
        valor20+=1

    } else if (num>=10){
        num-=10
        valor10+=1
    
    } else if (num>=5){
        num-=5
        valor5+=1
    
    } else if (num>=2){
        num-=2
        valor2+=1

    } else if (num>=1){
        num-=1
        valor1+=1
    
    } else{
        flag = false
    }
}

console.log(`${valorTotal}`)
console.log(`${valor100} nota(s) de R$ 100,00`)
console.log(`${valor50} nota(s) de R$ 50,00`)
console.log(`${valor20} nota(s) de R$ 20,00`)
console.log(`${valor10} nota(s) de R$ 10,00`)
console.log(`${valor5} nota(s) de R$ 5,00`)
console.log(`${valor2} nota(s) de R$ 2,00`)
console.log(`${valor1} nota(s) de R$ 1,00`)

