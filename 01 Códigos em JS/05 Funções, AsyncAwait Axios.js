/*
==> Importando funções | Async/Await | Axios
*/


// ==> Web Pack = Serviço que faz ser possível usar diversos arquivos .js na aplicação.

/* Importando a função na 1º forma, o nome só pode ser alterado da seguinte forma:
A seguinte forma está pegando de um arquivo, diversas funções.

import {soma as somaFunctions1} from "./funcoes";
console.log(somaFunctions1(2,5))
//ou:
import { soma, sub } from "./funcoes";
console.log(soma(2,2));
console.log(sub(4,8));
//ou para citar todas as funções de uma vez:
import * as funcoes from './funcoes';
console.log(funcoes.soma(10,10));
console.log(funcoes.sub(10,10));


 Importando a função na 2º forma, o nome pode ser alterado como quiser.
Importando apenas um unico arquivo, com uma unica função.
import somaFunctions2 from './soma';
console.log(somaFunctions2(20,55))
*/

//Async/Await:
/*
const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(() => {resolve("OK")},1000);
});

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

}

executaPromise();*/

//Axios:
/*
import axios from "axios";

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            
            console.log(response);
        }   catch (err) {
            console.warn("ERRO NA API")
        }
    }
}
Api.getUserInfo('wilsonzolanski')
*/