const alunosA = [
    {nome: "Wilson", nota: 10},
    {nome: "Pedro", nota: 7.5},
    {nome: "Douglas", nota: 9.0},
    {nome: "KK", nota: 1}
]

const alunosB = [
    {nome: "Wilson", nota: 1},
    {nome: "Pedro", nota: 4.5},
    {nome: "Douglas", nota: 3.0},
    {nome: "KK", nota: 1}
]
// ATENÇÃO: array.lenght (Diz o tamanho da array).

// FUNÇÕES:
function media(alunos){
    // ESTRUTURA DE REPETIÇÃO:
    let soma = 0
    for(let x = 0; x < alunos.length; x++) {
        soma = soma + alunos[x].nota
    }
    const media = soma / alunos.length
    return media
}
const media1 = media(alunosA)
const media2 = media(alunosB)

function enviaMensagem(media, turma){
    if (media > 5){
        console.log(`A média da turma ${turma} ficou com a média: ${media}, parabéns!`)
    } else{
        console.log(`A média da turma ${turma} ficou com a média abaixo de 5: ${media}.`)
    }
}

enviaMensagem(media1, "Turma A")
enviaMensagem(media2, "Turma B")