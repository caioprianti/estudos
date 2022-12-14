//metodo literal para criar
const pessoa = {
    nome: "Caio",
    sobrenome: "Prianti"
}
console.log(pessoa)
//usando o new
const pessoa1 = new Object()
pessoa1.nome = "Caio"
pessoa1.sobrenome = "`Prianti"
pessoa1.idade = 27
console.log(pessoa1)
//Excluindo atributo
delete pessoa1.sobrenome
console.log(pessoa1)
// Criando métodos
pessoa1.falarnome = function() {
    console.log(`${this.nome} está falando seu nome`)
}
pessoa1.falarnome()
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.getDataNascimento())
//ver as chaves
for(var i in pessoa1){
    console.log(i)
}
//ver os valores
for(var i in pessoa1){
    console.log(pessoa1[i])
}
