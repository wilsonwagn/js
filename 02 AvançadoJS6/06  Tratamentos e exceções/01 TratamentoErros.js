
// Entendendo o erro:
try{
    //console.log(name)
    const name = "Wilson Wagner"
    const meuErro = new Error("Mensagem customizada")

    throw meuErro //Forçando o erro

} catch (err) {
    console.log("O seguinte erro ocorreu: ", err)
} 

// Tratando o erro:

try{
    console.log(name)
    const name = "Wilson Wagner"
} catch (err) {
    console.log("O seguinte erro ocorreu 2: ", err)
} finally {
    console.log("Continue aqui, porque antes deu erro!")
}