//Symbols = Gerar um identificador único

const uniqueID = Symbol('Wilson');
const uniqueID2 = Symbol('Wilson');

console.log("O primeiro: ", uniqueID)
console.log("São a mesma coisa? ", uniqueID === uniqueID2)

const obj = {
    [uniqueID]: 'Hello'
}

console.log(obj)