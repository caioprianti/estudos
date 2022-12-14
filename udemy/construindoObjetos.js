//FactoryFunction
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa("Caio","Prianti")
console.log(p1.nomeCompleto())
//ConstructorFunction
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
const p2 = new Pessoa("Caio", "Prianti")
console.log(p2)

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, estoque, {
        enumerable: true, //mostra chave
        value: estoque, // valor da chave
        writable: false, // pode alterar o valor
        configurable: false // nao pode apagar/reconfigurar a chave
    })
}
const produto1 = new Produto("Camiseta", 50, 3)
produto1.estoque = 10
console.log(produto1)