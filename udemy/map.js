const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosEmDobro = numeros.map((valor) => {
    return valor*2
})
console.log(numerosEmDobro)

const pessoas = [
    {nome: "Caio", idade: 27},
    {nome: "Daniel", idade: 28},
    {nome: "Flavia", idade: 25},
    {nome: "Gabi", idade: 23}
]

const nomes = pessoas.map((valor) => {
    return valor.nome
})
console.log(nomes)
const idades = pessoas.map((valor) => {
    return valor.idade
})
console.log(idades)

const ComIds = pessoas.map((valor, indice) => {
    return valor.id = indice + 1
})
console.log(ComIds)