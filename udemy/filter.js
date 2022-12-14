const array = [1,2,3,4,5,6,7,8,9,10]
const index = 8
// findIndex
const IndexOf = array.findIndex((n) =>{
    return n === index
})
console.log(IndexOf) //7

//indexOf
const indexOf = array.indexOf(index)
console.log(indexOf) //7

//filter
const filtrado = array.filter((valor) => {
    return valor < 10
})
console.log(filtrado)
//filter com objeto
const arrayObjetos = [
    {nome: "Caio", idade: 27},
    {nome: "Daniel", idade: 28},
    {nome: "Flavia", idade: 25},
    {nome: "Gabi", idade: 23}
]

const arrayObejtosFiltrados = arrayObjetos.filter((valor) => {
   console.log(valor)
   return valor.idade < 28
})
console.log(arrayObejtosFiltrados)

