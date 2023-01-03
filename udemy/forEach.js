const a1 = [1,2,3,4,5,6,7,8,9,10]

for(var i in a1){
    console.log(i)
} //retornando os indices
for(var i of a1){
    console.log(i)
} //retornando os valores

//forEach
a1.forEach((valor, indice, array) => {
    console.log(valor, indice, array)
})
//forEach somando
let total = 0
a1.forEach((valor) => {
    total += valor
})
console.log(total)
//fazendo a mesma coisa com o reduce para treinar
var totalreduce = a1.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
},0)
console.log(totalreduce)