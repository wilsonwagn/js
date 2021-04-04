'use strict';
class Person{
    #name = '';
    constructor(name){
        this.#name = name;
    }
    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}
const resposta = new Person('Wilson');
console.log(resposta.name);