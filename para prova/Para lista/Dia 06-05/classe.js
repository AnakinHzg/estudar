class Animal{
    constructor( nome, raça, quantDePatas){
        this.nome = nome
        this.raça = raça
        this.quantDePatas = quantDePatas
    }
    exibirInfo(){
        console.log(`O nome do animal é ${this.nome}`)
        console.log(`A raça do animal é ${this.raça}`)
        console.log(`A quantidade de patas do animal é ${this.quantDePatas}`)
    }
}
module.exports = Animal