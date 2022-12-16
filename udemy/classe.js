class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    // Método
    falar() {
        console.log(`${this.nome} está falando seu nome`)
    }

}
const p1 = new Pessoa("Caio", "Prianti")
console.log(p1)
p1.falar() 