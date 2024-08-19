let Animal = require("./classe")

let Animal1 = new Animal ('Cachorro', 'PitBull', 4)
let Animal2 = new Animal ('Cachorro', 'Pinscher', 4)
let Animal3 = new Animal ('Cachorro', 'Vira Lata', 4)

console.log(Animal1.exibirInfo())
console.log(Animal2.exibirInfo())
console.log(Animal3.exibirInfo())
