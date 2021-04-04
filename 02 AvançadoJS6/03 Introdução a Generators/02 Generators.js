// Generators = São funções com pausa, que pausam e voltam.

function* hello(){
    console.log("Olá")
    yield 1

    console.log("Tudo bem?")
    yield

    console.log("Qual o seu nome?")
    yield

}

const it = hello()

console.log(it.next())
console.log(it.next())
console.log(it.next())
