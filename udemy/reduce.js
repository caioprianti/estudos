const numeros = [1,2,3,4,5,6,7,8,9,10]
//SOMANDO
const total = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador += valor
    return acumulador
}, 0) // 0 é o valor inicial do acumulador
console.log(total)
//FILTRANDO PARES (DEVERIA SER FEITO COM FILTER, USANDO REDUCE APENAS PARA EXEMPLO)
const valoresPares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
    
},[])
console.log(valoresPares)
//RETORNANDO VALORES DOBRADOS (DEVERIA SER FEITO COM MAP, USANDO REDUCE APENAS PARA EXEMPLO)
const valoresDobrados = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2)
    return acumulador
},[])
console.log(valoresDobrados)

const pessoas = [
    {nome: "Caio", idade: 27},
    {nome: "Daniel", idade: 28},
    {nome: "Flavia", idade: 25},
    {nome: "Gabi", idade: 23}
]
//RETORNAR PESSOA MAIS VELHA 
// ACUMULADOR É SEMPRE O PRIMEIRO VALOR E VALOR É SEMPRE O SEGUNDO VALOR
//ACUMULADOR ARMAZENA O VALOR RETORNADO, POR ISSO A PESSOA MAIS VELHA FICOU GRAVADA NO ACUMULADOR
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)