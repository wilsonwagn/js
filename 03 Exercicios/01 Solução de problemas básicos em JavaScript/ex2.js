/*
DESAFIO
No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu suprimento de comida disponível todos os dias.
Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg), e calcule quantos dias passarão antes que
Blobs coma todo esse suprimentoaté restar um quilo ou menos.

Entrada
A primeira linha de entrada contem um único inteiro N (1 ≤ N ≤ 1000), indicando o número de casos de teste.
As N linhas seguintes contém um valor de ponto flutuante C (1 ≤ C ≤ 1000)
correspondente à quantidade de comida disponível para Blobs.

Saída
Para cada caso de teste, imprima uma linha contendo o número de dias que Blobs irá demorar para comer todo seu suprimento de comida,
seguido da palavra "dias". 
*/
var n = parseInt(gets());

while (n) { //complete o codigo
  var c = parseFloat(gets());
  let dias = 0; //atribua o valor correto a variavel
  while (c > 1.0) { // complete o while
    c /= 2 
    dias++
  }
  console.log(dias, `  dias`);
  n-- //complete o código para a saída
}